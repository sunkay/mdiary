var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],

    singleRun: false,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'dots' ],

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.jsx$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
          }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
