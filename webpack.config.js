const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  }
};
