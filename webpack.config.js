var path = require('path');
var webpack = require('webpack')
// require('dotenv').config();

module.exports = {
  entry: './public/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'main.bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"',
        'AWS_BUCKET':     JSON.stringify(process.env.AWS_BUCKET),
        'AWS_ACCESS_KEY': JSON.stringify(process.env.AWS_ACCESS_KEY),
        'AWS_SECRET_KEY': JSON.stringify(process.env.AWS_SECRET_KEY)
      }
    })
  ]
}
