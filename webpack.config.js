var path = require('path');

module.exports = {
  entry: './public/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'main.bundle.js'
  }
}
