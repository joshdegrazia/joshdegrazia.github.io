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
        include: path.join(__dirname, './app/styles'),
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpg|png|pdf)$/,
        loader: 'file-loader',
        include: [path.join(__dirname, './app/images'), path.join(__dirname, './app/documents')]
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
