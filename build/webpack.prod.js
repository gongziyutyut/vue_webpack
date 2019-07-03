const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //用于提取css到文件中
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin'); // 用于压缩代码
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //删除上次构建的文件
const CopyWebpackPlugin = require('copy-webpack-plugin') //拷贝静态资源
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 模块分析

module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: '#source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-commom',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        }
      }
    }
  },
  module: {
    rules: [
        {
          test: /\.css$/,
  　　    use: [
    　　      MiniCssExtractPlugin.loader,
    　　 　　 "css-loader"
      　　 ]
  　　  },
        {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
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
        NODE_ENV: 'production',
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new OptimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false,
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ]),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static' // 可选server， static， disabled
    })

  ]
})

