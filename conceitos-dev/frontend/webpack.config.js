const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'}, // injetar o estilo do CSS no HTML
          { loader: 'css-loader'} // ler o .css e compreender as importações DENTRO do CSS
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}