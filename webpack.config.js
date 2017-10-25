const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, './client/dist');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?noInfo=true',
    path.join(__dirname, './client/src/index.jsx')
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:2000'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'client'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap!sass-loader?sourceMap'
        })
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=/fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=/img/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // new HtmlWebpackPlugin({ template: './client/index.html' }),
    new ExtractTextPlugin({ filename: 'css/style.css' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
