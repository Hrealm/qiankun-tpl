const packageName = require('./package.json').name;

module.exports = {
  configureWebpack:{
    output: {
      library: `${packageName}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  },
  
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}