const webpack = require('webpack')

module.exports = {
  baseUrl: './',
  outputDir: 'asher',
  assetsDir: 'static',
  indexPath: './',
  productionSourceMap: false, // 打包文件是否有 source map
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/theme.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': require('./config/dev.env')
      })
    ]
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://easy-mock.com/mock/5b7986c6bcb2ab748b0c255d',
        ws: true,
        changeOrigin: true
      },
    }
  }
}