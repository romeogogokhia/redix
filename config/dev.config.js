const WebpackMerge = require('webpack-merge')
const WebpackCommon = require('./common.config')

module.exports = WebpackMerge(WebpackCommon, {
  mode: 'development',
  devtool: 'cheap-module-inline-source-map'
})
