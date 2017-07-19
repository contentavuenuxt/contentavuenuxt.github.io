webpackJsonp([5],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(248),
  /* template */
  __webpack_require__(302),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppVersion__ = __webpack_require__(270);
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { AppVersion: __WEBPACK_IMPORTED_MODULE_0__components_AppVersion___default.a },
  methods: {
    setMenuMobileIsOpened: function setMenuMobileIsOpened() {
      this.$store.commit('setMenuMobileIsOpened', !this.$store.state.menuMobileIsOpened);
    }
  }
});

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return { packageJson: __WEBPACK_IMPORTED_MODULE_0__package_json___default.a };
  }
});

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AppNavigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppFooter__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_AppFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppTopBar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppTopBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_AppTopBar__);
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
  components: { AppNavigation: __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation___default.a, AppFooter: __WEBPACK_IMPORTED_MODULE_1__components_AppFooter___default.a, AppFooterSocket: __WEBPACK_IMPORTED_MODULE_2__components_AppFooterSocket___default.a, AppTopBar: __WEBPACK_IMPORTED_MODULE_3__components_AppTopBar___default.a }
});

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".socket[data-v-0e92dff2]{padding:2rem 0;background:#f5f5f5}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/AppFooterSocket.vue"],"names":[],"mappings":"AACA,yBACE,eAAe,AACf,kBAAuB,CACxB","file":"AppFooterSocket.vue","sourcesContent":["\n.socket[data-v-0e92dff2] {\n  padding:2rem 0;\n  background: whitesmoke;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".nuxt-link-exact-active[data-v-45081dd0]{color:#363636}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/AppNavigation.vue"],"names":[],"mappings":"AACA,yCACE,aAAc,CACf","file":"AppNavigation.vue","sourcesContent":["\n.nuxt-link-exact-active[data-v-45081dd0] {\n  color:#363636;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".app-top-bar[data-v-4f1002fc]{padding:.5rem 0;background:#f5f5f5}.level-item[data-v-4f1002fc]{padding:0 .75rem}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/AppTopBar.vue"],"names":[],"mappings":"AACA,8BACE,gBAAkB,AAClB,kBAAsB,CACvB,AACD,6BACE,gBAAqB,CACtB","file":"AppTopBar.vue","sourcesContent":["\n.app-top-bar[data-v-4f1002fc] {\n  padding: 0.5rem 0;\n  background: whitesmoke\n}\n.level-item[data-v-4f1002fc] {\n  padding: 0rem 0.75rem\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".footer[data-v-705d971f]{background:#eee}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/AppFooter.vue"],"names":[],"mappings":"AACA,yBACE,eAAgB,CACjB","file":"AppFooter.vue","sourcesContent":["\n.footer[data-v-705d971f] {\n  background: #EEE\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(316)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(299),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-705d971f",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(311)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(285),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0e92dff2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(312)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(234),
  /* template */
  __webpack_require__(291),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-45081dd0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(313)
}
var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(293),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4f1002fc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(235),
  /* template */
  __webpack_require__(310),
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
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "socket"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('p', [_c('strong', [_vm._v("Umami magazine & Umami publications")]), _vm._v(" is a fictionnal magazine and publisher for illustrative purposes only.\n    ")]), _c('div', [_vm._v("\n      Icons made by\n      "), _c('a', {
    attrs: {
      "href": "http://www.flaticon.com/authors/pixel-perfect",
      "title": "Pixel perfect"
    }
  }, [_vm._v("Pixel perfect")]), _vm._v(" from\n      "), _c('a', {
    attrs: {
      "href": "http://www.flaticon.com",
      "title": "Flaticon"
    }
  }, [_vm._v("www.flaticon.com")]), _vm._v(" is licensed by\n      "), _c('a', {
    attrs: {
      "href": "http://creativecommons.org/licenses/by/3.0/",
      "title": "Creative Commons BY 3.0",
      "target": "_blank"
    }
  }, [_vm._v("CC 3.0 BY")])])])])
}]}

/***/ }),

/***/ 291:
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
  }, [_vm._v("\n        UMAMI food magazine "), _c('br'), _c('AppVersion')], 1)]), _c('span', {
    staticClass: "nav-toggle",
    on: {
      "click": _vm.setMenuMobileIsOpened
    }
  }, [_c('span'), _c('span'), _c('span')]), _c('div', {
    staticClass: "nav-right nav-menu",
    class: {
      'is-active': this.$store.state.menuMobileIsOpened
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
  }, [_vm._v(" Recipes ")]), _c('a', {
    staticClass: "nav-item",
    attrs: {
      "href": "https://github.com/contentacms/contenta_vue_nuxt"
    }
  }, [_vm._v(" Github ")]), _c('a', {
    staticClass: "nav-item",
    attrs: {
      "href": "http://www.contentacms.org/"
    }
  }, [_vm._v(" ContentaCMS website ")])], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-top-bar is-hidden-mobile"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('nav', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-left"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_vm._v("\n          Search\n        ")])]), _c('div', {
    staticClass: "level-right"
  }, [_c('div', {
    staticClass: "level-item"
  }, [_vm._v("Login")])])])])])
}]}

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_vm._v("\n        Umami publication example footer content\n      ")]), _c('div', {
    staticClass: "column"
  }, [_c('ul', [_c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Get in touch")])], 1), _c('li', [_vm._v("About the Umami Drupal Theme")])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('AppNavigation'), _c('nuxt'), _c('AppFooterSocket')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('small', {
    staticClass: "app-version"
  }, [_vm._v(" " + _vm._s(_vm.packageJson.version) + " ")])])
},staticRenderFns: []}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("60d3e77d", content, true);

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("42846a63", content, true);

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("623351be", content, true);

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(261);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("50e25a22", content, true);

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = {
	"name": "contenta_vue_nuxt",
	"version": "0.6.6",
	"description": "Nuxt.js client for Contenta CMS",
	"author": "yann <yann@yineo.fr>",
	"private": true,
	"dependencies": {
		"axios": "0.16.2",
		"d8-subrequests": "0.0.5",
		"jsonapi-parse": "1.2.0",
		"nuxt": "1.0.0-alpha.5",
		"vue-lazyload": "1.0.6",
		"waterwheel": "1.3.5"
	},
	"scripts": {
		"dev": "node_modules/.bin/nuxt",
		"build": "node_modules/.bin/nuxt build",
		"analyse": "node_modules/.bin/nuxt build --analyse",
		"start": "node_modules/.bin/nuxt start",
		"generate": "node_modules/.bin/nuxt generate",
		"lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
		"test": "karma start test/unit/karma.conf.js",
		"precommit": "npm run test",
		"deploy": "./deploy-to-github-pages.sh"
	},
	"devDependencies": {
		"babel-eslint": "^7.1.1",
		"cross-env": "^4.0.0",
		"eslint": "^3.15.0",
		"eslint-config-standard": "^6.2.1",
		"eslint-loader": "^1.6.1",
		"eslint-plugin-html": "^2.0.0",
		"eslint-plugin-promise": "^3.4.1",
		"eslint-plugin-standard": "^2.0.1",
		"jasmine-core": "^2.6.4",
		"karma": "^1.7.0",
		"karma-chrome-launcher": "^2.2.0",
		"karma-jasmine": "^1.1.0",
		"karma-webpack": "^2.0.4",
		"push-dir": "^0.4.1"
	}
};

/***/ })

});