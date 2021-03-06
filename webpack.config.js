const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('./src'),
  entry: {
    vendor: ['leaflet'],
    moh: ['./moh/app/Application.js', './moh/res/index.less']
  },
  output: {
    path: path.resolve('./public/assets'),
    publicPath: '/assets/',
    filename: '[name]/index.js'
  },
  devServer: {
    contentBase: path.resolve('./public')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'ui5-loader?sourceRoot=./src',
          'babel-loader?sourceRoot=./src&presets=ui5'
        ]
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.(jpg|png)$/,
        loaders: ['url-loader?name=assets/images/[name].[ext]&limit=10240']
      },
      { test: /\.svg$/, loaders: ['url-loader?name=assets/images/[name].[ext]&limit=10240'] }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./[name]/res/index.css')
  ]
};
