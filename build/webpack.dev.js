const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin') //拷贝静态资源

module.exports = merge(webpackConfig, {
  mode: "development",

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    hot: true,
    port: 3000,
    contentBase: false // 依据vue-cli配置， we use CopyWebpackPlugin
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"' // 一定要加双引号
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: 'src',
        ignore: ['.*']
      }
    ])
  ]
})