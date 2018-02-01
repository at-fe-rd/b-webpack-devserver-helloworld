const path = require('path');
//write file to output path
const  WriteFilePlugin = require('write-file-webpack-plugin');
//generating html file, that includes bundle files
const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './bundle.js'
  },
  plugins: [
    //new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}