'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
// 骨架屏方案
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
// 预渲染插件 利于sec
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const Version = new Date().getTime()

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  plugins:[
    // 骨架屏方案
    new SkeletonWebpackPlugin({
      webpackConfig: {
          entry: {
              app: path.resolve('./src/entry.js')
          }
      }
    }),
    new PrerenderSpaPlugin({
      //编译后html需要存放的路径
      staticDir: path.join(__dirname, '../dist'),
      // 列出需要预渲染的路由
      routes: ['/', '/treeTable']
    })
  ],
  output: {
    path: config.build.assetsRoot,
    // filename: utils.assetsPath('js/[name].[chunkhash].' + Version + '.js'),
    // chunkFilename: utils.assetsPath('js/[id].[chunkhash].' + Version + '.js'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
         test: /\.scss$/,
         loaders: ["style", "css", "sass"]
       },
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
