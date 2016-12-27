var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname + '/public');
var APP_DIR = path.resolve(__dirname + '/app');
var PORT = 8080;

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:'+ PORT,
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'source-map',
  devServer: {
    hot:true,
    contentBase: BUILD_DIR,
    port: PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /.jsx?/,
        include: APP_DIR,
        exclude: '/node_modules/',
        loaders: ['react-hot', 'babel'],
      },
      {
       test: /\.less$/,
       loader: "style-loader!css-loader!less-loader"
     }
    ]
  }
};

module.exports = config;
