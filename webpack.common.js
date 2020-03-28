const path = require('path')
const HTMLwebplugin = require('html-webpack-plugin')

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.(scss|sass|css)$/,
    exclude: /node_modules/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  },
]
module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  module: { rules },
  plugins: [
    new HTMLwebplugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      hash: true,
      inject: true,
    }),
  ],
  stats: {
    children: false,
  },
}
