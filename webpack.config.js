const path = require('path');

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
      }
    ]
  },
  resolve: {
    root: [path.join(__dirname, './app')],
    extensions: ['', '.js', '.jsx']
  }
}
