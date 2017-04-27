var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
          './client/index.js'
  ],

  output: {
    path: __dirname + '/static/',
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.js/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ],
    
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules',
      },
      {
        test: /\.js/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ],
};