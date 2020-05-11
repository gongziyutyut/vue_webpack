const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin') 
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  // 指定打包的模式
  //mode: 'development',
  entry: {
    // 配置入口文件
    main: './src/main.js'
  },
  output: {
    // 配置打包文件输出的目录
    path: path.resolve(__dirname, '../dist'),
    // 生成的js文件名称
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用的路径
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp3|webm|ogg|mp4|wav|flac|aac)(\?.*)?$/, // 媒体文件
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,  // 文件大小限制（vue脚手架中限制为10000）
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)$/, //字体图标转换
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'thread-loader',
          },
          {
            loader: 'vue-loader',
            options: {
              complierOptions: {
                preserveWhitespace: false
              }
            }
          },
        ]
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': resolve('src'),
    },
    extensions: [
      '.js',
      '.vue'
    ]
  },

  plugins:[
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}
