const Router = require('koa-router')
const api = new Router()

const { download, encodeSHA256 } = require('../core')

api.post('/', async ctx => {
  const { urls } = ctx.request.body
  const result = {}

  const ossPromises = urls.map((url, idx) => new Promise((resolve, reject) => {
    const filename = encodeSHA256(url)

    ctx.OSS.get(filename).then(res => {
      // OSS资源存在
      resolve([url, filename])

    }).catch(err => {
      // OSS资源不存在
      if (err.code === 'NoSuchKey') {
        download(url).then(file => {
          // 远程资源成功下载
          ctx.OSS.putStream(filename, file.data).then(res => {
            // 远程资源下载
            resolve([url, filename])
          }).catch(err => {
            resolve([url, 'save failed'])
          })

        }).catch(err => {
          // 远程资源无法下载
          resolve([url, 'download failed'])
        })
      }
    })
  }))
  
  const ossResults = await Promise.all(ossPromises)
  ossResults.forEach(res => {
    const [url, filename] = res
    result[url] = filename
  })
    
  ctx.body = result
})

module.exports = api