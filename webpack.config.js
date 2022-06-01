const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './client/App.jsx')  
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js', 
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './build'),
      publicPath: 'bundle.js',
    }, 
    port: 3000,
    proxy: {
      '/api/*': 'http://localhost:8080'
    },
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/public/index.html'),
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules'
    }),
  ],
  module: {
    rules: [
      // Babel: JSX translator
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
          }
        }
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

};