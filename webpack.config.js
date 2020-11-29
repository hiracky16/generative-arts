const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "production",
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }
      ]
    }]
  },
  entry: {
    euclid: './src/euclid/euclid-algorithm.js',
    circleDrawer: './src/circleDrawer/index.js',
    tanjiro: './src/tanjiro/index.js',
    style: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    inline: true,
    port: 8888,
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      chunks: ['style'],
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      chunks: ['euclid', 'style'],
      filename: 'euclid.html',
      template: './src/euclid/template.html'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      chunks: ['circleDrawer', 'style'],
      filename: 'circleDrawer.html',
      template: './src/circleDrawer/template.html'
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      chunks: ['tanjiro', 'style'],
      filename: 'tanjiro.html',
      template: './src/tanjiro/template.html'
    }),
  ]
}