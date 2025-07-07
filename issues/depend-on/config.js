const path = require('path');
const isRspack = process.argv[1].endsWith('rspack.js');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    vendor1: {
      import: './src/vendor1.js',
    },
    vendor2: {
      import: './src/vendor2.js',
    },
    app: {
      import: './src/app.js',
      dependOn: ['vendor1', 'vendor2'],
    },
    app2: {
      import: './src/app2.js',
      dependOn: ['vendor1', 'vendor2'],
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, isRspack ? 'dist-rspack' : 'dist-webpack'),
  },
  optimization: {
    minimize: false,
    // sideEffects: false,
  },
};
