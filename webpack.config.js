const path = require('path');

module.exports = {
  entry: ['./scripts/main.js','./scripts/libs/accordion.js','./scripts/libs/tab.js','./scripts/libs/modal.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
  // ,
  // module: {
  //   rules: [
  //     { test: /\.scss$/, 
  //       use: ['style-loader','css-loader','sass-loader'] }
  //   ]
  // }
};