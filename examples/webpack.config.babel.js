import path from 'path';
import express from 'express';
import webpack from 'webpack';

export default {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './bundle/')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader']
      }
    ]
  },

  externals: {
    'ftw-rubric-builder': 'window.FtwRubricBuilder',
    react: 'window.React',
    'react-dom': 'window.ReactDOM'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  devServer: {
    contentBase: './',
    publicPath: '/build',
    port: 8080,
    writeToDisk: true,
    before(app, server) {
      app.use('/build', express.static(path.resolve(__dirname, '../build/')));
    }
  }
};
