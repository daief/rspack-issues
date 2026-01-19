(self["webpackChunkamd_format"] = self["webpackChunkamd_format"] || []).push([[259],{

/***/ 938:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;(() => {
  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

  /** Detect free variable `self`. */
  var freeSelf =
    typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =
     true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule =
    freeExports &&
    "object" == 'object' &&
    module &&
    !module.nodeType &&
    module;

  var _ = {
    foo: () => 'foo',
  };

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (
    true
  ) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else // removed by dead control flow
{}
})();


/***/ })

}]);