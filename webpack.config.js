const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  devtool: 'eval',
  context: __dirname + "/src",
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/dev-server',
    './index.js'
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '../node_modules/bootstrap/dist/js/bootstrap.min.js',
        to: 'node_modules/bootstrap'
      },
      {
        from: '../node_modules/bootstrap/dist/css/bootstrap.min.css',
        to: 'node_modules/bootstrap'
      },
      {
        from: '../node_modules/jquery/dist/jquery.min.js',
        to: 'node_modules/jquery/jquery.min.js'
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader?modules=true&localIdentName=[local]___[hash:base64:5]" }
    ]
  }
};
