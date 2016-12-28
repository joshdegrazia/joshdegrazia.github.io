const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "bin/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, './app/styles'),
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.pdf$/,
        loader: 'url-loader',
        include: path.join(__dirname, './app/documents')
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        include: path.join(__dirname, './app/images')
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app")]
  },
  resolve: {
    root: [path.join(__dirname, './app')],
    extensions: ['', '.js', '.jsx', '.scss', '.jpg', '.png']
  },
  plugins: [new ExtractTextWebpackPlugin("style.css", {allChunks: false})]
}
