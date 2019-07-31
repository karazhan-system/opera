const crypto = require('crypto')

module.exports = {
  encodeSHA256 (str) {
    return crypto.createHash('sha256').update(str).digest('hex')
  }
}