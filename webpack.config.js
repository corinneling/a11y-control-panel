const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: PRODUCTION ? false : 'eval-source-map',
  mode: PRODUCTION ? 'production' : 'development',
  entry: './src/js/aesthetica11yBookmarklet.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'aesthetica11yBookmarklet.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
    new CopyWebpackPlugin([
      {from:'src/public',to:'../'} 
  ]),
  ]
};