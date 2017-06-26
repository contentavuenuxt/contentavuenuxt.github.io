webpackJsonp([1],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(197),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SiteTitle__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SiteTitle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_SiteTitle__);
//
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

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(192),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(194),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav"
  }, [_c('div', {
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
  }, [_vm._v(" Recipes ")])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 194:
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

/***/ 197:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Navigation'), _c('SiteTitle'), _c('nuxt')], 1)
},staticRenderFns: []}

/***/ })

});