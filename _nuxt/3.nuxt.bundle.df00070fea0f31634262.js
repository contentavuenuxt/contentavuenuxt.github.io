webpackJsonp([3],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(197),
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  data: function data() {
    return {
      displayMobileMenu: false
    };
  }
});

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SiteTitle__ = __webpack_require__(208);
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

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(211),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(214),
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
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "nav"
  }, [_vm._m(0), _c('span', {
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
  })])
}]}

/***/ }),

/***/ 214:
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

/***/ 217:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Navigation'), _c('nuxt')], 1)
},staticRenderFns: []}

/***/ })

});