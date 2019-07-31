const Koa = require('koa')
const koaLogger = require('koa-logger')
const koaBodyParser = require('koa-bodyparser')
const koaCors = require('@koa/cors')
const koaParameter = require('koa-parameter')

const oss = require('./middleware/mid.oss')
const api = require('./api')

const app = new Koa()

app.use(koaCors())
app.use(koaLogger())
app.use(koaParameter(app))
app.use(koaBodyParser())
app.use(oss())
app.use(api.routes())
app.use(api.allowedMethods())

app.listen(33332)