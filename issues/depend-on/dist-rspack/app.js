"use strict";
(self["webpackChunkdepend_on"] = self["webpackChunkdepend_on"] || []).push([["387"], {
637: (function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

// EXTERNAL MODULE: ../../node_modules/lodash/lodash.js
var lodash = __webpack_require__(635);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ../../packages/pkg-a/index.js
const r = Math.trunc(Math.random() * 10);

const funa = (a) => {
    return `funa_____${r}_____${a}`;
};

;// CONCATENATED MODULE: ../../packages/pkg-b/index.js
const pkg_b_r = Math.trunc(Math.random() * 10);

const funb = (a) => {
    return `funb_____${pkg_b_r}_____${a}`;
};

;// CONCATENATED MODULE: ../../packages/pkg-c/index.js
const pkg_c_r = Math.trunc(Math.random() * 10);

const func = (a) => {
    return `func_____${pkg_c_r}_____${a}`;
};

;// CONCATENATED MODULE: ./src/app.js





// run
console.log(funa(1), funb(2), func(3));
console.log('lodash random', lodash_default().random());


}),

},function(__webpack_require__) {
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId) }
__webpack_require__.O(0, ["293",], function() {
        return __webpack_exec__(637);
      });
var __webpack_exports__ = __webpack_require__.O();

}
]);