webpackJsonp([6],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(244),
  /* template */
  __webpack_require__(300),
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
  __webpack_require__(197)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(196),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7ebe5011",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, "section[data-v-7ebe5011]{margin-bottom:10vh}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/AppSection.vue"],"names":[],"mappings":"AACA,yBACE,kBAAoB,CACrB","file":"AppSection.vue","sourcesContent":["\nsection[data-v-7ebe5011] {\n  margin-bottom: 10vh;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("91793158", content, true);

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ContactForm__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ContactForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ContactForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppSection__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppSection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_AppSection__);
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
  components: { ContactForm: __WEBPACK_IMPORTED_MODULE_0__components_ContactForm___default.a, AppSection: __WEBPACK_IMPORTED_MODULE_1__components_AppSection___default.a }
});

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PageContact__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PageContact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_PageContact__);
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { PageContact: __WEBPACK_IMPORTED_MODULE_0__components_PageContact___default.a }
});

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(291),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(285),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('AppSection', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h1', {
    staticClass: "has-text-centered"
  }, [_vm._v("Get in touch")]), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-half is-offset-one-quarter"
  }, [_c('ContactForm')], 1)])])])])
},staticRenderFns: []}

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', [_c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Your name ")]), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input"
  })])]), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Your email adress ")]), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input"
  })])]), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v(" Telephone ")]), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input"
  })])]), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v(" Subject ")]), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input"
  })])]), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v(" Email ")]), _c('div', {
    staticClass: "control"
  }, [_c('textarea', {
    staticClass: "textarea"
  })])]), _c('div', {
    staticClass: "has-text-centered"
  }, [_c('div', {
    staticClass: "button is-primary"
  }, [_vm._v("\n      Envoyer\n    ")])])])
}]}

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('PageContact')
},staticRenderFns: []}

/***/ })

});