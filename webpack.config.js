const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html',
  minify: {
    collapseWhitespace: true
  },
  inject: 'head'
});

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.css$/, 
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]',
              minimize: true
            }
          }
        ]
      },
      { test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: {outputPath: 'resources/images/'} }] },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.svg$/, loader: 'svg-inline-loader' },
      {test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'resources/fonts/'
          }
        }]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
