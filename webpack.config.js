var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: ''
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }
    ]
  }
};
