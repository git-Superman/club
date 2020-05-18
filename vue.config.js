const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('~api', resolve('src/api'))
  },
  // 跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.blcpoint.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
