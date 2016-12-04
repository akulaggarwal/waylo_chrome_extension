const path = require('path');

module.exports = {

  entry: [
    './event/index.js'
  ],

  output: {
    filename: 'event.js',
    path: path.join(__dirname, '../', 'build')
  },

  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(js)?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
