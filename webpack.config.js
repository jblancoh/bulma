var TP = require('extract-text-webpack-plugin')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module:{
    loaders: [
        {
          test: /\.sass$/,
          loader: TP.extract ('css!sass')
        }
    ]
  },
  plugins:[
    new TP('src/style.css',{
      allchunks: true
    })
  ]
}
