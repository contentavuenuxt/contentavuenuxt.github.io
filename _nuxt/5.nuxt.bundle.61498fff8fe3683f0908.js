webpackJsonp([5],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(223),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppVersion__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppVersion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AppVersion__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { AppVersion: __WEBPACK_IMPORTED_MODULE_0__components_AppVersion___default.a },
  data: function data() {
    return {
      displayMobileMenu: false
    };
  }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navigation__);
//
//
//
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
  components: { Navigation: __WEBPACK_IMPORTED_MODULE_0__components_Navigation___default.a }
});

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(224),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(217),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('span', {
    staticClass: "nav-item"
  }, [_vm._v("\n        UMAMI food magazine\n      ")]), _c('span', {
    staticClass: "nav-item"
  }, [_c('AppVersion')], 1)]), _c('span', {
    staticClass: "nav-toggle",
    on: {
      "click": function($event) {
        _vm.displayMobileMenu = !_vm.displayMobileMenu
      }
    }
  }, [_c('span'), _c('span'), _c('span')]), _c('div', {
    staticClass: "nav-right nav-menu",
    class: {
      'is-active': _vm.displayMobileMenu
    }
  }, [_c('nuxt-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/"
    },
    nativeOn: {
      "click": function($event) {
        _vm.displayMobileMenu = false
      }
    }
  }, [_vm._v(" Home ")]), _c('nuxt-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/recipes"
    },
    nativeOn: {
      "click": function($event) {
        _vm.displayMobileMenu = false
      }
    }
  }, [_vm._v(" Recipes ")])], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Navigation'), _c('nuxt'), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "has-text-centered"
  }, [_vm._v("Icons made by\n    "), _c('a', {
    attrs: {
      "href": "http://www.flaticon.com/authors/pixel-perfect",
      "title": "Pixel perfect"
    }
  }, [_vm._v("Pixel perfect")]), _vm._v(" from\n    "), _c('a', {
    attrs: {
      "href": "http://www.flaticon.com",
      "title": "Flaticon"
    }
  }, [_vm._v("www.flaticon.com")]), _vm._v(" is licensed by\n    "), _c('a', {
    attrs: {
      "href": "http://creativecommons.org/licenses/by/3.0/",
      "title": "Creative Commons BY 3.0",
      "target": "_blank"
    }
  }, [_vm._v("CC 3.0 BY")])])
}]}

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-version"
  }, [_c('small', [_vm._v("0.0.4 ")])])
}]}

/***/ })

});