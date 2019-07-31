const OSS = require('ali-oss')
const config = require('../config')

module.exports = options => {

  const client = new OSS({
    region: 'oss-cn-shenzhen',
    accessKeyId: config.OSS.accessKeyID,
    accessKeySecret: config.OSS.accessKeySecret,
    bucket: config.OSS.bucket
  })

  return async (ctx, next) => {
    ctx.OSS = client
    await next()
  }
}