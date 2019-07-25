const Router = require('koa-router')
const api = new Router()

api.prefix('/api')

const nlp = require('./api.nlp')

api.use('/nlp', nlp.routes(), nlp.allowedMethods())

module.exports = api