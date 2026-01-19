// mock amd define
window.define = () => {
  console.log('🚀 ~ app.js ~ define');
};
window.define.amd = {};

import(
  /* webpackChunkName: "test-amd-pkg" */
  'test-amd-pkg'
).then((mod) => {
  console.log('🚀 ~ app.js ~ test-amd-pkg:', mod.foo);
});
