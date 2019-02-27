const Webpack = require('webpack')
const WebpackMerge = require('webpack-merge')
const WebpackCommon = require('./common.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = WebpackMerge(WebpackCommon, {
  mode: 'production',
  performance: {
    hints: false
  },

  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 8
      }
    }),
    new ManifestPlugin()
  ]
})
