const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    watchFiles: ['src/**/*'],
  },
  watch: true,
  watchOptions: {
    ignored: '**/node_modules',
  },
})
