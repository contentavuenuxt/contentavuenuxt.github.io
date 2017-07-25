webpackJsonp([2],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(281),
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(222)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(218),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-74a98cdd",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findOneRecipeByUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return findAllPromotedRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findAllRecipesCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return findAllLatestRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findHomePromotedArticlesAndRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findAllRecipesByCategoryName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ContentaJsonApi__ = __webpack_require__(200);





/**
 * @param {String} uuid
 */
var findOneRecipeByUuid = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(uuid) {
    var query;
    return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = {
              include: 'image,category,image.thumbnail',
              filter: {
                isPublished: {
                  path: 'isPublished',
                  value: 1
                }
              }
            };
            _context.next = 3;
            return api.get('recipes', query, uuid);

          case 3:
            return _context.abrupt('return', _context.sent);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function findOneRecipeByUuid(_x) {
    return _ref.apply(this, arguments);
  };
}();

var findAllPromotedRecipes = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
    var query;
    return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = {
              page: {
                limit: limit
              },
              filter: {
                isPromoted: {
                  path: 'isPromoted',
                  value: 1
                },
                isPublished: {
                  path: 'isPublished',
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
            _context2.next = 3;
            return api.get('recipes', query);

          case 3:
            return _context2.abrupt('return', _context2.sent);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function findAllPromotedRecipes() {
    return _ref2.apply(this, arguments);
  };
}();

var findAllRecipesCategories = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
    var query;
    return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            query = {
              page: {
                limit: limit
              }
            };
            _context3.next = 3;
            return api.get('categories', query);

          case 3:
            return _context3.abrupt('return', _context3.sent);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function findAllRecipesCategories() {
    return _ref3.apply(this, arguments);
  };
}();

var findAllLatestRecipes = function () {
  var _ref4 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
    var query;
    return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = {
              sort: '-created',
              page: {
                limit: limit
              },
              include: 'image,image.thumbnail',
              fields: {
                recipes: 'title,difficulty,image',
                images: 'name,thumbnail',
                files: 'filename,url'
              }
            };
            return _context4.abrupt('return', api.get('recipes', query));

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function findAllLatestRecipes() {
    return _ref4.apply(this, arguments);
  };
}();

var findHomePromotedArticlesAndRecipes = function () {
  var _ref5 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(limit) {
    var promotedRecipes, promotedArticles;
    return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            promotedRecipes = api.get('recipes', {
              page: {
                limit: 3
              },
              filter: {
                isPromoted: {
                  path: 'isPromoted',
                  value: 1
                },
                isPublished: {
                  path: 'isPublished',
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
            promotedArticles = api.get('articles', {
              page: {
                limit: 3
              },
              filter: {
                isPromoted: {
                  path: 'isPromoted',
                  value: 1
                },
                isPublished: {
                  path: 'isPublished',
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
            return _context5.abrupt('return', __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise___default.a.all([promotedRecipes, promotedArticles]).then(function (promisesValues) {
              var data = [].concat(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_toConsumableArray___default()(promisesValues[0]), __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_toConsumableArray___default()(promisesValues[1])).sort(function (item1, item2) {
                return item1.createdAt > item2.createdAt;
              }).slice(0, limit);
              return data;
            }));

          case 3:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function findHomePromotedArticlesAndRecipes(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var findAllRecipesByCategoryName = function () {
  var _ref6 = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(categoryName) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var query;
    return __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            query = {
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
            return api.get('recipes', query);

          case 3:
            return _context6.abrupt('return', _context6.sent);

          case 4:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function findAllRecipesByCategoryName(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Functions to get content from Contenta JSON API
 */

var api = new __WEBPACK_IMPORTED_MODULE_4__ContentaJsonApi__["a" /* default */]("http://live-contentacms.pantheonsite.io");



/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_waterwheel__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_waterwheel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_waterwheel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonapi_parse__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonapi_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonapi_parse__);


/**
 * Client for content JSON API
 * This is actually just a thin wrapper around waterwheel.js.
 * We additionnaly use "jsonapi-parse" package to format
 * reponses : it resolves relationships and included objects nicely.
 * 
 * Example usage : 
 *   const api = new ContentaJsonApi(https://mydomain.fr)
 *   const datas = await api.get('recipes', queryParams)
 */



/* harmony default export */ __webpack_exports__["a"] = (function (ServerBaseUrl) {

  var waterwheel = new __WEBPACK_IMPORTED_MODULE_2_waterwheel___default.a({
    base: ServerBaseUrl,
    jsonapiPrefix: "api",
    timeout: 2000,
    accessCheck: false
  });

  return {
    get: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(uri) {
        var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return waterwheel.jsonapi.get(uri, queryParams, id);

              case 2:
                response = _context.sent;
                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_3_jsonapi_parse___default.a.parse(response).data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x3) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
  };
});

/***/ }),

/***/ 201:
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

/***/ 202:
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BulmaCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Difficulty__ = __webpack_require__(214);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsCard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_RecipeAsCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid__ = __webpack_require__(213);
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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(207), __esModule: true };

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(205);

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

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(209);
module.exports = __webpack_require__(2).Array.from;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6)
  , createDesc      = __webpack_require__(22);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(21)
  , $export        = __webpack_require__(14)
  , toObject       = __webpack_require__(31)
  , call           = __webpack_require__(84)
  , isArrayIter    = __webpack_require__(83)
  , toLength       = __webpack_require__(53)
  , createProperty = __webpack_require__(208)
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

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".columns .card[data-v-24c015f9]{height:100%}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/RecipesAsCards.vue"],"names":[],"mappings":"AACA,gCACE,WAAa,CACd","file":"RecipesAsCards.vue","sourcesContent":["\n.columns .card[data-v-24c015f9] {\n  height: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".thumbnail[data-v-74a98cdd]{max-height:220px;overflow:hidden}.image.is-square[data-v-74a98cdd]{background-color:#f5f5f5}.card[data-v-74a98cdd]:hover{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;top:-10px;-webkit-box-shadow:0 2px 30px;box-shadow:0 2px 30px}.card[data-v-74a98cdd]{height:100%;position:relative;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;top:0}.card .description[data-v-74a98cdd]{font-style:italic}.recipes .card .difficulty[data-v-74a98cdd]{margin-bottom:10px}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/RecipeAsCard.vue"],"names":[],"mappings":"AACA,4BACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,kCACE,wBAA2B,CAC5B,AACD,6BACE,uCAAyC,AACzC,kCAAoC,AACpC,+BAAiC,AACjC,UAAW,AACX,8BAA+B,AACvB,qBAAuB,CAChC,AACD,uBACE,YAAa,AACb,kBAAmB,AACnB,uCAAyC,AACzC,kCAAoC,AACpC,+BAAiC,AACjC,KAAM,CACP,AACD,oCACE,iBAAkB,CACnB,AACD,4CACE,kBAAoB,CACrB","file":"RecipeAsCard.vue","sourcesContent":["\n.thumbnail[data-v-74a98cdd] {\n  max-height: 220px;\n  overflow: hidden;\n}\n.image.is-square[data-v-74a98cdd] {\n  background-color:whitesmoke\n}\n.card[data-v-74a98cdd]:hover {\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  top: -10px;\n  -webkit-box-shadow: 0 2px 30px;\n          box-shadow: 0 2px 30px;\n}\n.card[data-v-74a98cdd] {\n  height: 100%;\n  position: relative;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  top: 0\n}\n.card .description[data-v-74a98cdd] {\n  font-style: italic\n}\n.recipes .card .difficulty[data-v-74a98cdd] {\n  margin-bottom: 10px;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(220),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(219),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(202),
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(221)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(216),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-24c015f9",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 216:
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

/***/ 217:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "difficulty"
  }, [_c('span', {
    class: _vm.classes(_vm.difficulty)
  }, [_vm._v(_vm._s(_vm.difficulty))])])
},staticRenderFns: []}

/***/ }),

/***/ 218:
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

/***/ 219:
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

/***/ 220:
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

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("52690552", content, true);

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("3bc47814", content, true);

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(227)
}
var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(224),
  /* template */
  __webpack_require__(226),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-062de8d9",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 224:
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
    buttonClass: { type: String, default: 'is-primary' },
    to: { type: String | Array, default: '/' }
  },
  data: function data() {
    return {
      isLoading: false
    };
  }
});

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)(true);
// imports


// module
exports.push([module.i, ".button[data-v-062de8d9]{margin-top:4vh}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contentavuenuxt/components/ButtonLink.vue"],"names":[],"mappings":"AACA,yBACG,cAAe,CACjB","file":"ButtonLink.vue","sourcesContent":["\n.button[data-v-062de8d9] {\n   margin-top:4vh;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nuxt-link', {
    staticClass: "button",
    class: [_vm.buttonClass, {
      'is-loading': _vm.isLoading
    }],
    attrs: {
      "to": _vm.to
    },
    nativeOn: {
      "click": function($event) {
        _vm.isLoading = !_vm.isLoading
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(52)("6240fe58", content, true);

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipesAsCards__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipesAsCards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_RecipesAsCards__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RecipeAsPromotedBanner__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RecipeAsPromotedBanner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_RecipeAsPromotedBanner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ButtonLink__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ButtonLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ButtonLink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppSection__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppSection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_AppSection__);
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
  components: { RecipesAsCards: __WEBPACK_IMPORTED_MODULE_0__components_RecipesAsCards___default.a, ButtonLink: __WEBPACK_IMPORTED_MODULE_2__components_ButtonLink___default.a, RecipeAsPromotedBanner: __WEBPACK_IMPORTED_MODULE_1__components_RecipeAsPromotedBanner___default.a, AppSection: __WEBPACK_IMPORTED_MODULE_3__components_AppSection___default.a },
  props: {
    recipePromoted: { type: Object, default: {} },
    recipesLatest: { type: Array, default: function _default() {
        return [];
      } },
    recipesByCategories: { type: Array, default: function _default() {
        return [];
      } }
  }
});

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppSection__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppSection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AppSection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ButtonLink__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ButtonLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ButtonLink__);
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
  components: { ButtonLink: __WEBPACK_IMPORTED_MODULE_1__components_ButtonLink___default.a, AppSection: __WEBPACK_IMPORTED_MODULE_0__components_AppSection___default.a },
  props: {
    recipe: { type: Object, default: {} }
  }
});

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageRecipesIndex__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageRecipesIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_PageRecipesIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ContentService__ = __webpack_require__(199);



//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  transition: 'page',
  components: { PageRecipesIndex: __WEBPACK_IMPORTED_MODULE_3__components_PageRecipesIndex___default.a },
  asyncData: function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
      var promises;
      return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              promises = [];

              // get 4 latest recipes

              promises.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_ContentService__["c" /* findAllLatestRecipes */])(4));

              // get 4 recipes for each category
              promises.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_ContentService__["d" /* findAllRecipesCategories */])().then(function (categories) {
                return __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise___default.a.all(categories.map(function (category) {
                  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_ContentService__["a" /* findAllRecipesByCategoryName */])(category.name, 4);
                })).then(function (recipesByCategory) {
                  return categories.map(function (category, index) {
                    category.recipes = recipesByCategory[index];
                    return category;
                  });
                });
              }));

              // get a single promoted recipe
              promises.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__services_ContentService__["e" /* findAllPromotedRecipes */])(1).then(function (r) {
                return r[0];
              }));

              return _context.abrupt('return', __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contentavuenuxt_node_modules_babel_runtime_core_js_promise___default.a.all(promises).then(function (promisesResults) {
                return {
                  recipesLatest: promisesResults[0],
                  recipesByCategories: promisesResults[1],
                  recipePromoted: promisesResults[2]
                };
              }));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function asyncData() {
      return _ref.apply(this, arguments);
    }

    return asyncData;
  }()
});

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(284),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(242),
  /* template */
  __webpack_require__(303),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('PageRecipesIndex', _vm._b({}, 'PageRecipesIndex', {
    recipePromoted: _vm.recipePromoted,
    recipesLatest: _vm.recipesLatest,
    recipesByCategories: _vm.recipesByCategories
  }))
},staticRenderFns: []}

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.recipePromoted) ? _c('RecipeAsPromotedBanner', {
    attrs: {
      "recipe": _vm.recipePromoted
    }
  }) : _vm._e(), _c('div', {
    staticClass: "container"
  }, [(_vm.recipesLatest) ? _c('AppSection', [_c('h3', {
    staticClass: "title is-3 has-text-centered"
  }, [_vm._v(" Latest recipes ")]), _c('RecipesAsCards', {
    attrs: {
      "recipes": _vm.recipesLatest,
      "more-link": "/recipes-latest"
    }
  }), _c('div', {
    staticClass: "has-text-centered"
  }, [_c('ButtonLink', {
    attrs: {
      "to": "/recipes-latest"
    }
  }, [_vm._v("View more")])], 1)], 1) : _vm._e(), _vm._l((_vm.recipesByCategories), function(category, categoryIndex) {
    return (_vm.recipesByCategories) ? _c('AppSection', {
      key: categoryIndex
    }, [_c('h3', {
      staticClass: "title is-3 has-text-centered"
    }, [_vm._v(_vm._s(category.name))]), _c('RecipesAsCards', {
      attrs: {
        "title": "Recipes",
        "recipes": category.recipes
      }
    }), _c('div', {
      staticClass: "has-text-centered"
    }, [_c('ButtonLink', {
      attrs: {
        "to": '/recipes-category/' + category.name
      }
    }, [_vm._v("View more")])], 1)], 1) : _vm._e()
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('AppSection', {
    staticClass: "hero is-primary"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "title is-2"
  }, [_vm._v(" PROMOTED RECIPE ")]), _c('h3', {
    staticClass: "title is-3"
  }, [_vm._v(_vm._s(_vm.recipe.title) + " ")]), _c('ButtonLink', {
    attrs: {
      "button-class": "is-light",
      "to": '/recipes/' + _vm.recipe.id
    }
  }, [_vm._v("View recipe")])], 1), _c('div', {
    staticClass: "column"
  }, [_c('nuxt-link', {
    attrs: {
      "to": '/recipes/' + _vm.recipe.id
    }
  }, [_c('figure', {
    staticClass: "image is-3by2"
  }, [(_vm.recipe.image) ? _c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.recipe.image.thumbnail.url),
      expression: "recipe.image.thumbnail.url"
    }]
  }) : _vm._e()])])], 1)])])])])
},staticRenderFns: []}

/***/ })

});