const path = require('path');
const isRspack = process.argv[1].endsWith('rspack.js');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    app: {
      import: './src/app.js',
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, isRspack ? 'dist-rspack' : 'dist-webpack'),
  },
  optimization: {
    minimize: false,
  },
};
