"use strict";
(self["webpackChunkdepend_on"] = self["webpackChunkdepend_on"] || []).push([["387"], {
672: (function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
/* ESM import */var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635);
/* ESM import */var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var pkg_a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(426);
/* ESM import */var pkg_b__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(744);
/* ESM import */var pkg_c__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(503);





// run
console.log((0,pkg_a__WEBPACK_IMPORTED_MODULE_1__/* .funa */.q)(1), (0,pkg_b__WEBPACK_IMPORTED_MODULE_2__/* .funb */.k)(2), (0,pkg_c__WEBPACK_IMPORTED_MODULE_3__/* .func */.Y)(3));
console.log('lodash random', lodash__WEBPACK_IMPORTED_MODULE_0___default().random());


}),
426: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  q: () => (funa)
});
const r = Math.trunc(Math.random() * 10);

const funa = (a) => {
    return `funa_____${r}_____${a}`;
};


}),
744: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  k: () => (funb)
});
const r = Math.trunc(Math.random() * 10);

const funb = (a) => {
    return `funb_____${r}_____${a}`;
};


}),
503: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Y: () => (func)
});
const r = Math.trunc(Math.random() * 10);

const func = (a) => {
    return `func_____${r}_____${a}`;
};


}),

},function(__webpack_require__) {
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId) }
__webpack_require__.O(0, ["293",], function() {
        return __webpack_exec__(672);
      });
var __webpack_exports__ = __webpack_require__.O();

}
]);