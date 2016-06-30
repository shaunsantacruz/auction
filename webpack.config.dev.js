var webpack = require('webpack');

//http://webpack.github.io/docs/configuration.htm
module.exports = {
  //devtool: 'eval-source-map',
  //devtool: 'cheap-eval-source-map',
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: [/node_modules/, '/build', '/assets/bundle.js']
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.(jpg|gif|jpeg)$/, loader: "file-loader" },
      {
        test: /\.(scss|css)$/,
        loaders: ["style", "css", "sass"]
      }
    ]
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
    historyApiFallback: true
    //noInfo: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'APP_ENV': JSON.stringify('client'),
      },
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
