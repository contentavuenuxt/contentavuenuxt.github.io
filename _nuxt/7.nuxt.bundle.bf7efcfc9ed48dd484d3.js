webpackJsonp([7],{

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(255),
  /* template */
  __webpack_require__(296),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(199)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(198),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-90f118ea",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "section[data-v-90f118ea]{margin-bottom:10vh}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/components/AppSection.vue"],"names":[],"mappings":"AACA,yBACE,kBAAoB,CACrB","file":"AppSection.vue","sourcesContent":["\nsection[data-v-90f118ea] {\n  margin-bottom: 10vh;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("e9dc3d4a", content, true);

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppSection__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppSection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AppSection__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { AppSection: __WEBPACK_IMPORTED_MODULE_0__components_AppSection___default.a }
});

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PageServerUnreachable__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PageServerUnreachable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_PageServerUnreachable__);
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageServerUnreachable: __WEBPACK_IMPORTED_MODULE_0__components_PageServerUnreachable___default.a }
});

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/server-unreachable.49499d2.gif";

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(245),
  /* template */
  __webpack_require__(294),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "has-text-centered container"
  }, [_c('appSection', [_c('h1', {
    staticClass: "title is-4"
  }, [_vm._v("Sorry, our API server is unreachable for now ")]), _c('img', {
    attrs: {
      "src": __webpack_require__(265)
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('PageServerUnreachable')
},staticRenderFns: []}

/***/ })

});