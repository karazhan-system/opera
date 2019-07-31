const axios = require('axios')

module.exports = {
  download (url) {
    return axios({
      url,
      header: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
      },
      responseType:'stream'
    })
  }
}