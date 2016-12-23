const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  context: __dirname + "/src",
  entry: {
    vendor: ['react', 'react-dom', 'react-router'],
    app: './index.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[hash].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",

      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),
    new ExtractTextPlugin('styles-[hash].css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new CopyWebpackPlugin([
      {
        from: '../node_modules/bootstrap/dist/js/bootstrap.min.js',
        to: 'node_modules/bootstrap'
      },
      {
        from: '../node_modules/bootstrap/dist/css/bootstrap.min.css',
        to: 'node_modules/bootstrap'
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?modules=true&localIdentName=[local]___[hash:base64:5]') }
    ]
  }
};
