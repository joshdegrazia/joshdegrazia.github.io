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
    // TODO: edit this for your local machine
    root: '/Users/joshdegrazia/code/joshdegrazia/joshdegrazia.github.io/app',
    extensions: ['', '.js', '.jsx']
  }
}
