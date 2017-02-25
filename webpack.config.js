/**
 * WebPack Defalut 설정 
 */


var path = require("path");

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname + "build",
    filename: 'bundle.js'
  },
  devServer: {
      inline: true,
      port: 7777,
      contentBase: __dirname + '/build/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: [
            'syntax-dynamic-import',
            'transform-async-to-generator',
            'transform-regenerator',
            'transform-runtime'
          ]
        }
      }]
    }]
  }
};