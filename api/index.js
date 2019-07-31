const Router = require('koa-router')
const api = new Router()

api.prefix('/api')

const img = require('./api.img')

api.use('/img', img.routes(), img.allowedMethods())

module.exports = api
