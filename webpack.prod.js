const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MinifyPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new MinifyPlugin({
        test: /\.(?:[cm]?js|css|html?)(\?.*)?$/i,
        minify: [
          MinifyPlugin.terserMinify,
          MinifyPlugin.cssoMinify,
          MinifyPlugin.htmlMinifierTerser,
        ]
      }),
    ],
  },
})
