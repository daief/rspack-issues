const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  devtool: false,
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist-keep'),
    library: ['globalHandle', '[name]'],
    libraryTarget: 'var',
  },
  optimization: {
    splitChunks: false,
    minimize: true,
    usedExports: 'global',
    chunkIds: 'deterministic',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    'array-tree-filter': 'ArrayTreeFilter',
    'async-validator': 'AsyncValidator',
    csstype: 'Csstype',
    dayjs: 'Dayjs',
    jsbi: 'Jsbi',
    lodash: '_',
    'popper.js': 'Popper',
    'react-dropzone': 'ReactDropzone',
    'react-is': 'ReactIs',
    'react-transition-group': 'ReactTransitionGroup',
    'resize-observer-polyfill': 'ResizeObserverPolyfill',
    'shallow-equal': 'ShallowEqual',
    warning: 'Warning',
    '@muya-ui/utils': 'MuyaUtils',
    '@muya-ui/icon-base': 'MuyaIconBase',
    '@muya-ui/theme-light': 'MuyaThemeLight',
  },
};
