webpackJsonp([1],{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(252),
  /* template */
  __webpack_require__(287),
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(208);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(227)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(225),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c0908c52",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_waterwheel__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_waterwheel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_waterwheel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonapi_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);




/**
 * A simple wrapper around waterwheel, mostly to take
 * advantages of jsonapi-parse formatter.
 *  
 * const jsonapi = new JSONAPIClient(http://mydomain)
 * const datas = await jsonapi.get('recipes', queryParams)
 * 
 */




var ContentaClient = function () {
  function ContentaClient(baseUrl) {
    __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default()(this, ContentaClient);

    this.baseUrl = baseUrl;
    this.waterwheel = new __WEBPACK_IMPORTED_MODULE_4_waterwheel___default.a({
      base: this.baseUrl,
      jsonapiPrefix: 'api',
      timeout: 2000,
      accessCheck: false
    }, null, {});
  }

  /**
   * http GET request on JSON-API server with waterwheel
   * 
   * @param {string} entity Uri . eg : "/recipes"
   * @param {object} JSONAPI query parameters as an objct, @see JSONAPIQueryBuilder
   */


  __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default()(ContentaClient, [{
    key: 'get',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(uri) {
        var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.waterwheel.jsonapi.get(uri, queryParams, id);

              case 3:
                response = _context.sent;
                return _context.abrupt('return', __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse___default.a.parse(response).data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0.message);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function get(_x3) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()

    /**
     * return jsonapiParsed result of a d8 subrequests
     * @param {SubRequests} a SubRequests object from "d8-subrequests module"
     */

  }, {
    key: 'subrequests',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(_subrequests) {
        var response, data;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(_subrequests.getUrl());

              case 2:
                response = _context2.sent;
                data = _subrequests.parseResponse(response.data);

                data = data.map(function (object) {
                  return __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse___default.a.parse(object).data;
                });
                return _context2.abrupt('return', data);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function subrequests(_x4) {
        return _ref2.apply(this, arguments);
      }

      return subrequests;
    }()
  }]);

  return ContentaClient;
}();

/* harmony default export */ __webpack_exports__["a"] = (ContentaClient);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ContentaClient__ = __webpack_require__(201);







/**
 * Get recipes from JSON API server
 */



var Recipes = function () {
  function Recipes() {
    __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Recipes);

    this.resourceUri = 'recipes';
    this.contenta = new __WEBPACK_IMPORTED_MODULE_6__ContentaClient__["a" /* default */]("https://dev-contentacms.pantheonsite.io");
    this.subrequestsUri = "https://dev-contentacms.pantheonsite.io" + '/subrequests?_format=json';
  }

  __WEBPACK_IMPORTED_MODULE_5__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default()(Recipes, [{
    key: 'findOneById',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(id) {
        var options;
        return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  include: 'image,category,image.thumbnail'
                };
                _context.next = 3;
                return this.contenta.get('recipes', options, id);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findOneById(_x) {
        return _ref.apply(this, arguments);
      }

      return findOneById;
    }()
  }, {
    key: 'findHomePromotedArticlesAndRecipes',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var promotedRecipes, promotedArticles;
        return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                promotedRecipes = this.contenta.get('recipes', {
                  page: { limit: 3 },
                  filter: {
                    isPromoted: {
                      path: 'isPromoted',
                      value: 1
                    }
                  },
                  include: 'contentType,image,image.thumbnail',
                  fields: {
                    recipes: 'contentType,title,difficulty,image',
                    images: 'name,thumbnail',
                    files: 'filename,url',
                    contentTypes: 'type'
                  },
                  sort: '-created'
                });
                promotedArticles = this.contenta.get('articles', {
                  page: { limit: 3 },
                  filter: {
                    isPromoted: {
                      path: 'isPromoted',
                      value: 1
                    }
                  },
                  include: 'contentType,image,image.thumbnail',
                  fields: {
                    recipes: 'title,difficulty,image',
                    images: 'name,thumbnail',
                    files: 'filename,url',
                    contentTypes: 'type'
                  },
                  sort: '-created'
                });
                return _context2.abrupt('return', __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.all([promotedRecipes, promotedArticles]).then(function (promisesValues) {
                  var data = [].concat(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_toConsumableArray___default()(promisesValues[0]), __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_toConsumableArray___default()(promisesValues[1])).sort(function (item1, item2) {
                    return item1.createdAt > item2.createdAt;
                  }).slice(0, 3);
                  return data;
                }));

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findHomePromotedArticlesAndRecipes() {
        return _ref2.apply(this, arguments);
      }

      return findHomePromotedArticlesAndRecipes;
    }()

    /**
     * Promoted recipes sorted by created DESC
     * @param {int} limit 
     */

  }, {
    key: 'findAllPromoted',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
        var options;
        return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = {
                  page: { limit: limit },
                  filter: {
                    isPromoted: {
                      path: 'isPromoted',
                      value: 1
                    }
                  },
                  include: 'image,image.thumbnail',
                  fields: {
                    recipes: 'title,difficulty,image',
                    images: 'name,thumbnail',
                    files: 'filename,url'
                  },
                  sort: '-created'
                };
                _context3.next = 3;
                return this.contenta.get('recipes', options);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findAllPromoted() {
        return _ref3.apply(this, arguments);
      }

      return findAllPromoted;
    }()
  }, {
    key: 'findAllCategories',
    value: function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
        var options;
        return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = {
                  page: {
                    limit: limit
                  }
                };
                _context4.next = 3;
                return this.contenta.get('categories', options);

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findAllCategories() {
        return _ref4.apply(this, arguments);
      }

      return findAllCategories;
    }()
  }, {
    key: 'findAllLatest',
    value: function () {
      var _ref5 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
        var options;
        return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = {
                  sort: '-created',
                  page: { limit: limit },
                  include: 'image,image.thumbnail',
                  fields: {
                    recipes: 'title,difficulty,image',
                    images: 'name,thumbnail',
                    files: 'filename,url'
                  }
                };
                return _context5.abrupt('return', this.contenta.get('recipes', options));

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findAllLatest() {
        return _ref5.apply(this, arguments);
      }

      return findAllLatest;
    }()
  }, {
    key: 'findAllByCategoryName',
    value: function () {
      var _ref6 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(categoryName) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        var options;
        return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = {
                  sort: '-created',
                  include: 'image,image.thumbnail',
                  filter: {
                    categoryName: {
                      condition: {
                        path: 'category.name',
                        value: categoryName
                      }
                    }
                  },
                  fields: {
                    recipes: 'title,difficulty,image',
                    images: 'name,thumbnail',
                    files: 'filename,url'
                  },
                  page: {
                    offset: 0,
                    limit: limit
                  }
                };
                _context6.next = 3;
                return this.contenta.get(this.resourceUri, options);

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function findAllByCategoryName(_x6) {
        return _ref6.apply(this, arguments);
      }

      return findAllByCategoryName;
    }()
  }]);

  return Recipes;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Recipes());

/***/ }),

/***/ 203:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    itemsByRow: { type: String, default: "4" },
    items: { type: Array, default: [] }
  },
  computed: {
    columnClasses: function columnClasses() {
      return 'column is-' + 12 / this.itemsByRow;
    },
    columns: function columns() {
      var columnIndex = 0;
      var columns = {};
      for (var itemIndex in this.items) {
        if (itemIndex % this.itemsByRow === 0) {
          columns[++columnIndex] = [];
        }
        columns[columnIndex].push(this.items[itemIndex]);
      }
      return columns;
    }
  }
});

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    difficulty: { type: String, default: '' }
  },
  methods: {
    classes: function classes(difficulty) {
      return {
        'tag is-primary': difficulty == 'easy',
        'tag is-warning': difficulty == 'middle',
        'tag is-danger': difficulty == 'hard'
      };
    }
  }
});

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BulmaCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Difficulty__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Difficulty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Difficulty__);
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
  components: { BulmaCard: __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard___default.a, Difficulty: __WEBPACK_IMPORTED_MODULE_1__components_Difficulty___default.a },
  props: {
    recipe: { type: Object, default: function _default() {
        return [];
      } }
  }
});

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsCard__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_RecipeAsCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid__);
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
  components: { RecipeAsCard: __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsCard___default.a, BulmaGrid: __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid___default.a },
  props: {
    cardsByRow: { type: String, default: "4" },
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    recipes: { type: Array, default: function _default() {
        return [];
      } }
  }
});

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(210), __esModule: true };

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(211), __esModule: true };

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(207);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(213);
module.exports = __webpack_require__(2).Array.from;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(214);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6)
  , createDesc      = __webpack_require__(22);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(21)
  , $export        = __webpack_require__(14)
  , toObject       = __webpack_require__(31)
  , call           = __webpack_require__(84)
  , isArrayIter    = __webpack_require__(83)
  , toLength       = __webpack_require__(53)
  , createProperty = __webpack_require__(212)
  , getIterFn      = __webpack_require__(54);

$export($export.S + $export.F * !__webpack_require__(85)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperty: __webpack_require__(6).f});

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".columns .card[data-v-7612271a]{height:100%}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/components/RecipesAsCards.vue"],"names":[],"mappings":"AACA,gCACE,WAAa,CACd","file":"RecipesAsCards.vue","sourcesContent":["\n.columns .card[data-v-7612271a] {\n  height: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".thumbnail[data-v-c0908c52]{max-height:220px;overflow:hidden}.image.is-square[data-v-c0908c52]{background-color:#f5f5f5}.card[data-v-c0908c52]:hover{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;top:-10px;-webkit-box-shadow:0 2px 30px;box-shadow:0 2px 30px}.card[data-v-c0908c52]{height:100%;position:relative;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;top:0}.card .description[data-v-c0908c52]{font-style:italic}.recipes .card .difficulty[data-v-c0908c52]{margin-bottom:10px}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/components/RecipeAsCard.vue"],"names":[],"mappings":"AACA,4BACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,kCACE,wBAA2B,CAC5B,AACD,6BACE,uCAAyC,AACzC,kCAAoC,AACpC,+BAAiC,AACjC,UAAW,AACX,8BAA+B,AACvB,qBAAuB,CAChC,AACD,uBACE,YAAa,AACb,kBAAmB,AACnB,uCAAyC,AACzC,kCAAoC,AACpC,+BAAiC,AACjC,KAAM,CACP,AACD,oCACE,iBAAkB,CACnB,AACD,4CACE,kBAAoB,CACrB","file":"RecipeAsCard.vue","sourcesContent":["\n.thumbnail[data-v-c0908c52] {\n  max-height: 220px;\n  overflow: hidden;\n}\n.image.is-square[data-v-c0908c52] {\n  background-color:whitesmoke\n}\n.card[data-v-c0908c52]:hover {\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  top: -10px;\n  -webkit-box-shadow: 0 2px 30px;\n          box-shadow: 0 2px 30px;\n}\n.card[data-v-c0908c52] {\n  height: 100%;\n  position: relative;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  top: 0\n}\n.card .description[data-v-c0908c52] {\n  font-style: italic\n}\n.recipes .card .difficulty[data-v-c0908c52] {\n  margin-bottom: 10px;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(222),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(221),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(204),
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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(226)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(223),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7612271a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.columns), function(column, rowIndex) {
    return _c('div', {
      key: rowIndex,
      staticClass: "columns"
    }, _vm._l((column), function(item, index) {
      return _c('div', {
        key: index,
        class: _vm.columnClasses
      }, [_vm._t("default", null, {
        item: item
      })], 2)
    }))
  }))
},staticRenderFns: []}

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-image"
  }, [_vm._t("image")], 2), _c('div', {
    staticClass: "card-content"
  }, [_vm._t("content")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recipes"
  }, [_c('BulmaGrid', {
    attrs: {
      "items": _vm.recipes,
      "itemsByRow": _vm.cardsByRow
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('RecipeAsCard', {
          attrs: {
            "recipe": props.item
          }
        })]
      }
    }])
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "difficulty"
  }, [_c('span', {
    class: _vm.classes(_vm.difficulty)
  }, [_vm._v(_vm._s(_vm.difficulty))])])
},staticRenderFns: []}

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nuxt-link', {
    attrs: {
      "to": '/recipes/' + _vm.recipe.id
    }
  }, [_c('BulmaCard', [(_vm.recipe.image) ? _c('div', {
    slot: "image"
  }, [_c('figure', {
    staticClass: "image is-3by2"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.recipe.image.thumbnail.url),
      expression: "recipe.image.thumbnail.url"
    }],
    staticClass: "lazy-img-fadein"
  })])]) : _vm._e(), _c('div', {
    staticClass: "has-text-centered",
    slot: "content"
  }, [_c('Difficulty', {
    staticClass: "difficulty",
    attrs: {
      "difficulty": _vm.recipe.difficulty
    }
  }), _c('div', {
    staticClass: "description"
  }, [_c('h3', {
    staticClass: "title is-5"
  }, [_vm._v(_vm._s(_vm.recipe.title))])])], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("e38c527a", content, true);

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("80cbe0f0", content, true);

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clock.54e3f46.svg";

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsDetail__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_RecipeAsDetail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RecipesAsCards__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RecipesAsCards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_RecipesAsCards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppSection__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AppSection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_AppSection__);
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
  components: { RecipeAsDetail: __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsDetail___default.a, RecipesAsCards: __WEBPACK_IMPORTED_MODULE_1__components_RecipesAsCards___default.a, AppSection: __WEBPACK_IMPORTED_MODULE_2__components_AppSection___default.a },
  props: {
    recipe: { type: Object, default: {} },
    recipesByCategory: { type: Array, default: [] }
  }
});

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
  components: { AppSection: __WEBPACK_IMPORTED_MODULE_0__components_AppSection___default.a },
  props: {
    recipe: { type: Object, default: {} }
  }
});

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Recipes__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageRecipesId__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageRecipesId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_PageRecipesId__);


//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  transition: 'page',
  components: { PageRecipesId: __WEBPACK_IMPORTED_MODULE_3__components_PageRecipesId___default.a },
  asyncData: function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
      var params = _ref.params;
      var recipe, recipesByCategory;
      return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_2__services_Recipes__["a" /* default */].findOneById(params.id);

            case 2:
              recipe = _context.sent;
              _context.next = 5;
              return __WEBPACK_IMPORTED_MODULE_2__services_Recipes__["a" /* default */].findAllByCategoryName(recipe.category.name, 4);

            case 5:
              recipesByCategory = _context.sent;
              return _context.abrupt('return', { recipe: recipe, recipesByCategory: recipesByCategory });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function asyncData(_x) {
      return _ref2.apply(this, arguments);
    }

    return asyncData;
  }()
});

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".icons[data-v-6b1c7ed8]{width:50px}.what-you-need[data-v-6b1c7ed8]{margin-bottom:10vh}.method[data-v-6b1c7ed8]{padding:1.25rem 2.5rem 1.25rem 1.5rem}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/components/RecipeAsDetail.vue"],"names":[],"mappings":"AACA,wBACE,UAAY,CACb,AACD,gCACE,kBAAmB,CACpB,AACD,yBACE,qCAAuC,CACxC","file":"RecipeAsDetail.vue","sourcesContent":["\n.icons[data-v-6b1c7ed8] {\n  width: 50px;\n}\n.what-you-need[data-v-6b1c7ed8] {\n  margin-bottom:10vh;\n}\n.method[data-v-6b1c7ed8] {\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/difficulty.dc0d19c.svg";

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/serves.ee57ed0.svg";

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(282),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(309)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(245),
  /* template */
  __webpack_require__(295),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6b1c7ed8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('RecipeAsDetail', {
    attrs: {
      "recipe": _vm.recipe
    }
  }), _c('h3', {
    staticClass: "title is-3 has-text-centered"
  }, [_vm._v("More recipes from category\n    "), _c('strong', [_vm._v(_vm._s(_vm.recipe.category.name))])]), _c('div', {
    staticClass: "container"
  }, [_c('AppSection', [_c('RecipesAsCards', {
    attrs: {
      "recipes": _vm.recipesByCategory
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('PageRecipesId', _vm._b({}, 'PageRecipesId', {
    recipesByCategory: _vm.recipesByCategory,
    recipe: _vm.recipe
  }))
},staticRenderFns: []}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('AppSection', {
    staticClass: "hero is-primary"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title is-1"
  }, [_vm._v(" " + _vm._s(_vm.recipe.title) + " ")])])])]), _c('div', {
    staticClass: "container"
  }, [_c('AppSection', [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('figure', {
    staticClass: "image is-3by2"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.recipe.image.thumbnail.url),
      expression: "recipe.image.thumbnail.url"
    }]
  })])]), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column has-text-centered"
  }, [_c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(233)
    }
  })]), _vm._v("\n              Preparation Time :\n              "), _c('strong', [_vm._v(_vm._s(_vm.recipe.preparationTime) + " min ")])]), _c('div', {
    staticClass: "column has-text-centered"
  }, [_c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(233)
    }
  })]), _vm._v("\n              Cooking time :\n              "), _c('strong', [_vm._v(" " + _vm._s(_vm.recipe.totalTime) + " min")])])]), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column has-text-centered"
  }, [_c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(262)
    }
  })]), _vm._v("\n              Serves :\n              "), _c('strong', [_vm._v(_vm._s(_vm.recipe.numberOfServices) + " persons ")])]), _c('div', {
    staticClass: "column has-text-centered"
  }, [_c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(261)
    }
  })]), _vm._v("\n              Difficulty :\n              "), _c('strong', [_vm._v(_vm._s(_vm.recipe.Difficulty))])])])])])]), _c('AppSection', [_c('h2', {
    staticClass: "title is-2 has-text-centered what-you-need"
  }, [_vm._v(" What you'll need and how to make this dish")])]), _c('AppSection', {
    staticClass: "instructions"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "content notification"
  }, [_c('h3', {
    staticClass: "has-text-centered"
  }, [_vm._v(" Ingredients ")]), _c('ul', {
    staticClass: "ingredients"
  }, _vm._l((_vm.recipe.ingredients), function(ingredient, index) {
    return _c('li', {
      key: index
    }, [_vm._v("\n                " + _vm._s(ingredient) + "\n              ")])
  }))])]), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "content method"
  }, [_c('h3', {
    staticClass: "title has-text-centered"
  }, [_vm._v(" Method ")]), _c('p', [_vm._v("\n              " + _vm._s(_vm.recipe.instructions) + "\n            ")])])])])])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("3ca5d05a", content, true);

/***/ })

});