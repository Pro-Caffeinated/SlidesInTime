var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?importLoaders=1'],
      exclude: ['node_modules']
    },
    {
    test: /\.png$/,
    loader: 'url-loader',
    query: { mimetype: 'image/png' }
    }]
  }
};
