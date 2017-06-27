webpackJsonp([3],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(189),
  /* template */
  __webpack_require__(209),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SiteTitle__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SiteTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_SiteTitle__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Navigation: __WEBPACK_IMPORTED_MODULE_0__components_Navigation___default.a, SiteTitle: __WEBPACK_IMPORTED_MODULE_1__components_SiteTitle___default.a }
});

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Navigation.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(210)
}
var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(204),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-200edfca",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(206),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "nav"
  }, [_vm._m(0), _c('div', {
    staticClass: "nav-right nav-menu"
  }, [_c('nuxt-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" Home ")]), _c('nuxt-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/recipes"
    }
  }, [_vm._v(" Recipes ")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav-left"
  }, [_c('span', {
    staticClass: "nav-item"
  }, [_vm._v("\n        UMAMI food magazine\n      ")])])
}]}

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title is-1"
  }, [_vm._v("UMAMI, food magazine")])])
}]}

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Navigation'), _c('nuxt')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(50)("213410c6", content, true);

/***/ })

});