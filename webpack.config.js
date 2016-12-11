// var webpack = require('webpack');
// var path = require('path');
//
// module.exports = {
//   // devtool: 'inline-source-map',
//   entry: [
//     'webpack-dev-server/client?http://127.0.0.1:8080/',
//     'webpack/hot/dev-server',
//     './client/index.js'
//   ],
//   output: {
//     path: path.join(__dirname, './client'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: [/\.js$/, /\.es6$/, /\.jsx?$/],
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['', '.js']
//   },
//   plugins: [
//     // new webpack.NoErrorsPlugin()
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   devServer: {
//     hot: true,
//     contentBase: './client'
//   }
// }

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  // devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, './client'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/],
        loaders: ['react-hot', 'babel'],
        // exclude: /node_modules/
        include: path.join(__dirname, 'client')
      },
      {
        test: [/\.js$/, /\.es6$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]//,
  // devServer: {
  //   hot: true,
  //   contentBase: './client'
  // }
}
