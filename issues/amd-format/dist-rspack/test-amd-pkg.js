(self["webpackChunkamd_format"] = self["webpackChunkamd_format"] || []).push([["952"], {
938(module, exports, __webpack_require__) {
/* module decorator */ module = __webpack_require__.nmd(module);
(() => {
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
    'object' == 'object' &&
    module &&
    !module.nodeType &&
    module;

  var _ = {
    foo: () => 'foo',
  };

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (
    typeof define == 'function' &&
    typeof define.amd == 'object' &&
    define.amd
  ) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function () {
      return _;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  } else {
    // Export to the global object.
    root._ = _;
  }
})();


},

}]);