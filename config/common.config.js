const Path = require('path')
const Webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const autoprefixer = require('autoprefixer')

const opts = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== 'production'
}

module.exports = {
  entry: {
    app: './src/js/app.js',

    fontsEn: './src/styles/fontsEn.scss',
    fontsKa: './src/styles/fontsKa.scss',
    styles: './src/styles/main.scss'
  },
  output: {
    path: Path.join(opts.rootDir, 'public'),
    pathinfo: opts.devBuild,
    // filename: opts.devBuild ? 'js/[name].bundle.js' : 'js/[name].[contenthash].bundle.js'
    filename: 'js/[name].bundle.js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          chunks: 'all',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['public'], {
      root: Path.join(__dirname, '..')
    }),
    new MiniCssExtractPlugin({
      // filename: opts.devBuild ? 'styles/[name].bundle.css' : 'styles/[name].[contenthash].bundle.css'
      filename: 'styles/[name].bundle.css'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './about.html',
      template: './src/about.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './real-estate.html',
      template: './src/real-estate.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './rent.html',
      template: './src/rent.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './rent-inside.html',
      template: './src/rent-inside.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './sale.html',
      template: './src/sale.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './news-inside.html',
      template: './src/news-inside.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './csr.html',
      template: './src/csr.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './horeca.html',
      template: './src/horeca.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './agro.html',
      template: './src/agro.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      filename: './contact.html',
      template: './src/contact.html',
      chunks: ['fontsEn', 'styles', 'vendor', 'app']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader']
      },

      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      },

      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              minimize: !opts.devBuild,
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              url: true,
              plugins: () => [autoprefixer({
                add: !opts.devBuild
              })],
              sourceMap: true
            }
          },
          'resolve-url-loader',
          'sass-loader?sourceMap' // sass-loader?sourceMap  when 'resolve-url-loader' enabled
        ]
      },

      // Load fonts
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      // Load images
      {
        test: /\.(svg|png|jpg|jpeg|gif?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      { test: /\.html$/, loader: 'html-loader?attrs[]=video:src' },
      { test: /\.(mov|mp4)$/, loader: 'url-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '_router-links.scss'],
    modules: ['node_modules'],
    alias: {
      request$: 'xhr'
    }
  }
}
