'use strict'
const utils = require('./utils')
const config = require('../config')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1'] }),
    require('postcss-px2rem')({remUnit: 75}),
  ],
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
