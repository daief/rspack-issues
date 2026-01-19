window.define = () => {
  console.log('🚀 ~ app.js ~ define');
};
window.define.amd = {};

import(
  /* webpackChunkName: "test-amd-pkg" */
  'test-amd-pkg'
).then((xx) => {
  console.log('🚀 ~ app.js ~ xx:', xx);
});
