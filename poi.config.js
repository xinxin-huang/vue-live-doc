const path = require('path')
const merge = require('webpack-merge')
const pkg = require('./package.json')
const webpackConfig = require('./webpack.config')

const srcAbsPath = path.resolve(__dirname, './src')
const distAbsPath = path.resolve(__dirname, './dist/' + pkg.name)

module.exports = (options, req) => ({
  port: 3000,
  entry: path.join(srcAbsPath, 'entry.js'),
  dist: distAbsPath,
  removeDist: true,
  homepage: '/static/' + pkg.name,
  html: {
    title: 'Vue Live Doc'
  },
  templateCompiler: true,
  webpack: config => merge(config, webpackConfig),
  env: {
    pkg
  }
})
