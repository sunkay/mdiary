var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');

// Load *package.json* so we can use `dependencies` from there
var pkg = require('./package.json');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// testing
var webdriverio = requre('webdriverio');
var wd-options = require('./wdio.conf.js');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

console.log("entry point:", PATHS.app);

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'mdiary',
      template: 'index.html',
      inject: 'body'
    })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module:{
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build' || TARGET === 'stats' || TARGET === 'deploy') {
  module.exports = merge(common, {
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies).filter(function(v){
        // Exclude alt-utils as it won't work with this setup
        // due to the way the package has been designed
        // (no package.json main).
        return v !== 'alt-utils';
      }),
    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    devtool: 'source-map',
    module:{
      loaders: [
        // extract CSS during build
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new Clean([PATHS.build]),
      new ExtractTextPlugin('styles.[chunkhash].css'),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
      }),
      // Extract vendor and manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
    ]
  });
}

/*
if(TARGET === 'test'){
  webdriverio.
    remote(options).
    init();

}
*/
