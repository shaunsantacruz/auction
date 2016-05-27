var webpack = require('webpack');

//http://webpack.github.io/docs/configuration.htm
module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/src/index.js'
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: [/node_modules/, '/build', '/assets/bundle.js']
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/assets',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  //https://webpack.github.io/docs/webpack-dev-server.html
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
    //noInfo: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
