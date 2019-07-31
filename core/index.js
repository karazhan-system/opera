const { download } = require('./core.download')
const { encodeSHA256 } = require('./core.hash')

module.exports = {
  download,
  encodeSHA256,
}