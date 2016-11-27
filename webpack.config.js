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
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./app")]
  },
  resolve: {
    root: [path.join(__dirname, './app')],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  plugins: [new ExtractTextWebpackPlugin("style.css", {allChunks: false})]
}
