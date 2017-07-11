webpackJsonp([5],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(253),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppVersion__ = __webpack_require__(236);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { AppVersion: __WEBPACK_IMPORTED_MODULE_0__components_AppVersion___default.a },
  data: function data() {
    return {
      displayMobileMenu: false
    };
  }
});

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

var packageJson = __webpack_require__(260);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return { packageJson: packageJson };
  }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AppNavigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppFooter__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_AppFooter__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { AppNavigation: __WEBPACK_IMPORTED_MODULE_0__components_AppNavigation___default.a, AppFooter: __WEBPACK_IMPORTED_MODULE_1__components_AppFooter___default.a }
});

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(true);
// imports


// module
exports.push([module.i, ".nuxt-link-exact-active[data-v-1433635e]{color:#363636}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/components/AppNavigation.vue"],"names":[],"mappings":"AACA,yCACE,aAAc,CACf","file":"AppNavigation.vue","sourcesContent":["\n.nuxt-link-exact-active[data-v-1433635e] {\n  color:#363636;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(255),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(257)
}
var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(242),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1433635e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(216),
  /* template */
  __webpack_require__(254),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 242:
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

/***/ 253:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('AppNavigation'), _c('nuxt'), _c('AppFooter')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-version"
  }, [_c('small', [_vm._v(" " + _vm._s(_vm.packageJson.version) + " ")])])
},staticRenderFns: []}

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "has-text-centered"
  }, [_vm._v("\n      Icons made by\n      "), _c('a', {
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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("2f84756a", content, true);

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = {
	"name": "contenta_vue_nuxt",
	"version": "0.1.3",
	"description": "Nuxt.js client for Contenta CMS",
	"author": "yann <yann.boisselier@gmail.com>",
	"private": true,
	"dependencies": {
		"@nuxtjs/pwa": "latest",
		"axios": "^0.16.2",
		"d8-jsonapi-querystring": "0.0.7",
		"d8-subrequests": "0.0.4",
		"dev-debug": "node --debug node_modules/.bin/nuxt",
		"jsonapi-parse": "^1.2.0",
		"lodash": "^4.17.4",
		"nuxt": "latest",
		"vue-lazyload": "^1.0.5",
		"waterwheel": "^1.3.3"
	},
	"scripts": {
		"dev": "node_modules/.bin/nuxt",
		"build": "node_modules/.bin/nuxt build",
		"analyse": "node_modules/.bin/nuxt build --analyse",
		"start": "node_modules/.bin/nuxt start",
		"generate": "node_modules/.bin/nuxt generate",
		"lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
		"test": "karma start test/unit/karma.conf.js",
		"precommit": "npm run lint",
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
		"karma-webpack": "^2.0.3",
		"push-dir": "^0.4.1"
	}
};

/***/ })

});