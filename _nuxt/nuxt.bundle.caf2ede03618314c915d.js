webpackJsonp([8],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)(true);
// imports


// module
exports.push([module.i, ".error-page[data-v-68f3aac7]{color:#000;background:#fff;top:0;bottom:0;left:0;right:0;position:absolute;font-family:SF UI Text,Helvetica Neue,Lucida Grande;text-align:center;padding-top:20%}.error-code[data-v-68f3aac7]{display:inline-block;font-size:24px;font-weight:500;vertical-align:top;border-right:1px solid rgba(0,0,0,.298039);margin:0 20px 0 0;padding:10px 23px}.error-wrapper-message[data-v-68f3aac7]{display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle}.error-message[data-v-68f3aac7]{margin:0;padding:0}.error-link[data-v-68f3aac7],.error-message[data-v-68f3aac7]{font-size:14px;font-weight:400}.error-link[data-v-68f3aac7]{color:#00bcd4;text-decoration:none}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/.nuxt/components/nuxt-error.vue"],"names":[],"mappings":"AAAA,6BAA6B,WAAW,gBAAgB,MAAM,SAAS,OAAO,QAAQ,kBAAkB,oDAAoD,kBAAkB,eAAe,CAAC,6BAA6B,qBAAqB,eAAe,gBAAgB,mBAAmB,2CAA2C,kBAAkB,iBAAiB,CAAC,wCAAwC,qBAAqB,gBAAgB,iBAAiB,YAAY,qBAAqB,CAAC,gCAAgC,SAAS,SAAS,CAAC,6DAA6D,eAAe,eAAe,CAAC,6BAA6B,cAAc,oBAAoB,CAAC","file":"nuxt-error.vue","sourcesContent":[".error-page[data-v-68f3aac7]{color:#000;background:#fff;top:0;bottom:0;left:0;right:0;position:absolute;font-family:SF UI Text,Helvetica Neue,Lucida Grande;text-align:center;padding-top:20%}.error-code[data-v-68f3aac7]{display:inline-block;font-size:24px;font-weight:500;vertical-align:top;border-right:1px solid rgba(0,0,0,.298039);margin:0 20px 0 0;padding:10px 23px}.error-wrapper-message[data-v-68f3aac7]{display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle}.error-message[data-v-68f3aac7]{margin:0;padding:0}.error-link[data-v-68f3aac7],.error-message[data-v-68f3aac7]{font-size:14px;font-weight:400}.error-link[data-v-68f3aac7]{color:#00bcd4;text-decoration:none}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)(true);
// imports


// module
exports.push([module.i, ".progress[data-v-710b123b]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:1}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/.nuxt/components/nuxt-loading.vue"],"names":[],"mappings":"AAAA,2BAA2B,eAAe,MAAM,OAAO,QAAQ,WAAW,QAAQ,yCAAyC,oCAAoC,iCAAiC,UAAU,yBAAyB,SAAS,CAAC","file":"nuxt-loading.vue","sourcesContent":[".progress[data-v-710b123b]{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;-o-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:1}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(135),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(137)
}
var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(134),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-710b123b",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(132),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.nuxt.err) ? _c('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _c('nuxt-child')
},staticRenderFns: []}

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "error-page"
  }, [_c('div', [_c('h1', {
    staticClass: "error-code"
  }, [_vm._v(_vm._s(_vm.error.statusCode))]), _c('div', {
    staticClass: "error-wrapper-message"
  }, [_c('h2', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.error.message))])]), (_vm.error.statusCode === 404) ? _c('p', [_c('nuxt-link', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [_c('nuxt-loading', {
    ref: "loading"
  }), (_vm.layout) ? _c(_vm.layout, {
    tag: "component"
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("32b32624", content, true);

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(65)("151b7a09", content, true);

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 139;

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = applyAsyncData;
/* harmony export (immutable) */ __webpack_exports__["g"] = sanitizeComponent;
/* harmony export (immutable) */ __webpack_exports__["b"] = getMatchedComponents;
/* harmony export (immutable) */ __webpack_exports__["i"] = getMatchedComponentsInstances;
/* harmony export (immutable) */ __webpack_exports__["f"] = flatMapComponents;
/* harmony export (immutable) */ __webpack_exports__["a"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["h"] = middlewareSeries;
/* harmony export (immutable) */ __webpack_exports__["d"] = promisify;
/* harmony export (immutable) */ __webpack_exports__["j"] = getLocation;
/* unused harmony export urlJoin */
/* harmony export (immutable) */ __webpack_exports__["c"] = compile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_json_stringify__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_keys__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(1);









var noopData = function noopData() {
  return {};
};

function applyAsyncData(Component) {
  var asyncData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var ComponentData = Component.options.data || noopData;
  Component.options.data = function () {
    var data = ComponentData.call(this);
    return __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends___default()({}, data, asyncData);
  };
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}

function sanitizeComponent(Component) {
  if (!Component.options) {
    Component = __WEBPACK_IMPORTED_MODULE_5_vue__["default"].extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // For debugging purpose
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}

function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context, app) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,
    app: app,
    store: context.store,
    route: context.to ? context.to : context.route,
    payload: context.payload,
    error: context.error,
    base: '/',
    env: { "contentaJSONAPIBaseUrl": "https://dev-contentacms.pantheonsite.io/api" },
    hotReload: context.hotReload || false
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    ctx._redirected = true; // Used in middleware
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof___default()(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function middlewareSeries(promises, context) {
  if (!promises.length || context._redirected) {
    return __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve();
  }
  return promisify(promises[0], context).then(function () {
    return middlewareSeries(promises.slice(1), context);
  });
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!promise || !(promise instanceof __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a) && typeof promise.then !== 'function') {
    promise = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);


var transitionsKeys = ['name', 'mode', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'enterToClass', 'leaveToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled'];

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-child',
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data;

    data.nuxtChild = true;

    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key];
      }
    });
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [h('router-view', data)]);
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(136)
}
var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(133),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-68f3aac7",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_meta__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nuxt_child_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_nuxt_link_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nuxt_error_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nuxt_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_nuxt_error_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nuxt_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__App_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils__ = __webpack_require__(42);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_11__components_nuxt_error_vue___default.a; });








var createApp = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_4__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ssrContext) {
    var store, router, app, next, ctx, plugin0;
    return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__store_js__["a" /* createStore */])();
            router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__router_js__["a" /* createRouter */])();

            if (!(true && ssrContext && ssrContext.url)) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return new __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              router.push(ssrContext.url, resolve, reject);
            });

          case 5:

            if (true) {

              // Replace store state before calling plugins
              if (window.__NUXT__ && window.__NUXT__.state) {
                store.replaceState(window.__NUXT__.state);
              }
            }

            // root instance
            // here we inject the router and store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.
            app = __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_extends___default()({
              router: router,
              store: store,
              _nuxt: {
                defaultTransition: defaultTransition,
                transitions: [defaultTransition],
                setTransitions: function setTransitions(transitions) {
                  if (!Array.isArray(transitions)) {
                    transitions = [transitions];
                  }
                  transitions = transitions.map(function (transition) {
                    if (!transition) {
                      transition = defaultTransition;
                    } else if (typeof transition === 'string') {
                      transition = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
                    } else {
                      transition = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
                    }
                    return transition;
                  });
                  this.$options._nuxt.transitions = transitions;
                  return transitions;
                },

                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  if (typeof err === 'string') {
                    err = { statusCode: 500, message: err };
                  }
                  this.$options._nuxt.dateErr = Date.now();
                  this.$options._nuxt.err = err;
                  return err;
                }
              }
            }, __WEBPACK_IMPORTED_MODULE_13__App_vue___default.a);
            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            };
            ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["a" /* getContext */])({
              isServer: !!ssrContext,
              isClient: !ssrContext,
              route: router.currentRoute,
              next: next,
              store: store,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined
            }, app);

            delete ctx.error;

            // Inject external plugins

            if (false) {
              _context.next = 16;
              break;
            }

            plugin0 = __webpack_require__(73);

            plugin0 = plugin0.default || plugin0;

            if (!(typeof plugin0 === 'function')) {
              _context.next = 16;
              break;
            }

            _context.next = 16;
            return plugin0(ctx);

          case 16:
            if (!(typeof plugin1 === 'function')) {
              _context.next = 19;
              break;
            }

            _context.next = 19;
            return plugin1(ctx);

          case 19:
            return _context.abrupt('return', { app: app, router: router, store: store });

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createApp(_x) {
    return _ref.apply(this, arguments);
  };
}();













if (true) {
  // window.onNuxtReady(() => console.log('Ready')) hook
  // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

// Import SSR plugins
var plugin1 = __webpack_require__(74);
plugin1 = plugin1.default || plugin1;

// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_5_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_9__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_9__components_nuxt_child_js__["a" /* default */]);
// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_5_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_10__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_10__components_nuxt_link_js__["a" /* default */]);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_5_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_12__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_12__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_5_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

var defaultTransition = { "name": "page", "mode": "out-in" };



/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator__);


var files = __webpack_require__(68);
var filenames = files.keys();

function getModule(filename) {
  var file = files(filename);
  return file.default ? file.default : file;
}
var middleware = {};

// Generate the middleware
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator___default()(filenames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var filename = _step.value;

    var name = filename.replace(/^\.\//, '').replace(/\.(js|ts)$/, '');
    middleware[name] = getModule(filename);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (middleware);

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 68;

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middleware__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(42);







var _this6 = this;

var render = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
    var _this3 = this;

    var layout, nextCalled, _next, context, Components, isValid, _layout;

    return __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!this._hashChanged) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', next());

          case 2:
            layout = void 0;
            nextCalled = false;

            _next = function _next(path) {
              this.$loading.finish && this.$loading.finish();
              if (nextCalled) return;
              nextCalled = true;
              next(path);
            };

            context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* getContext */])({ to: to, store: store, isClient: true, next: _next.bind(this), error: this.error.bind(this) }, app);
            Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* getMatchedComponents */])(to);

            this._context = context;
            this._dateLastError = this.$options._nuxt.dateErr;
            this._hadError = !!this.$options._nuxt.err;

            if (Components.length) {
              _context.next = 24;
              break;
            }

            _context.next = 13;
            return callMiddleware.call(this, Components, context);

          case 13:
            if (!context._redirected) {
              _context.next = 15;
              break;
            }

            return _context.abrupt('return');

          case 15:
            _context.next = 17;
            return this.loadLayout(typeof __WEBPACK_IMPORTED_MODULE_6__index__["a" /* NuxtError */].layout === 'function' ? __WEBPACK_IMPORTED_MODULE_6__index__["a" /* NuxtError */].layout(context) : __WEBPACK_IMPORTED_MODULE_6__index__["a" /* NuxtError */].layout);

          case 17:
            layout = _context.sent;
            _context.next = 20;
            return callMiddleware.call(this, Components, context, layout);

          case 20:
            if (!context._redirected) {
              _context.next = 22;
              break;
            }

            return _context.abrupt('return');

          case 22:
            this.error({ statusCode: 404, message: 'This page could not be found.' });
            return _context.abrupt('return', next());

          case 24:
            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            });
            this.setTransitions(mapTransitions(Components, to, from));
            _context.prev = 26;
            _context.next = 29;
            return callMiddleware.call(this, Components, context);

          case 29:
            if (!context._redirected) {
              _context.next = 31;
              break;
            }

            return _context.abrupt('return');

          case 31:
            layout = Components[0].options.layout;
            if (typeof layout === 'function') {
              layout = layout(context);
            }
            _context.next = 35;
            return this.loadLayout(layout);

          case 35:
            layout = _context.sent;
            _context.next = 38;
            return callMiddleware.call(this, Components, context, layout);

          case 38:
            if (!context._redirected) {
              _context.next = 40;
              break;
            }

            return _context.abrupt('return');

          case 40:
            // Pass validation?
            isValid = true;

            Components.forEach(function (Component) {
              if (!isValid) return;
              if (typeof Component.options.validate !== 'function') return;
              isValid = Component.options.validate({
                params: to.params || {},
                query: to.query || {}, store: context.store
              });
            });

            if (isValid) {
              _context.next = 45;
              break;
            }

            this.error({ statusCode: 404, message: 'This page could not be found.' });
            return _context.abrupt('return', next());

          case 45:
            _context.next = 47;
            return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component, i) {
              // Check if only children route changed
              Component._path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* compile */])(to.matched[i].path)(to.params);
              if (!_this3._hadError && Component._path === _lastPaths[i] && i + 1 !== Components.length) {
                return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve();
              }
              var promises = [];
              // asyncData method
              if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
                var promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* promisify */])(Component.options.asyncData, context);
                promise.then(function (asyncDataResult) {
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* applyAsyncData */])(Component, asyncDataResult);
                  _this3.$loading.increase && _this3.$loading.increase(30);
                });
                promises.push(promise);
              }
              if (Component.options.fetch) {
                var p = Component.options.fetch(context);
                if (!p || !(p instanceof __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a) && typeof p.then !== 'function') {
                  p = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve(p);
                }
                p.then(function () {
                  return _this3.$loading.increase && _this3.$loading.increase(30);
                });
                promises.push(p);
              }
              return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.all(promises);
            }));

          case 47:
            _lastPaths = Components.map(function (Component, i) {
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* compile */])(to.matched[i].path)(to.params);
            });
            this.$loading.finish && this.$loading.finish();
            // If not redirected
            if (!nextCalled) {
              next();
            }
            _context.next = 59;
            break;

          case 52:
            _context.prev = 52;
            _context.t0 = _context['catch'](26);

            _lastPaths = [];
            _context.t0.statusCode = _context.t0.statusCode || _context.t0.status || _context.t0.response && _context.t0.response.status || 500;
            _layout = __WEBPACK_IMPORTED_MODULE_6__index__["a" /* NuxtError */].layout;

            if (typeof _layout === 'function') {
              _layout = _layout(context);
            }
            this.loadLayout(_layout).then(function () {
              _this3.error(_context.t0);
              next(false);
            });

          case 59:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[26, 52]]);
  }));

  return function render(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Fix components format in matched, it's due to code-splitting of vue-router






var noopData = function noopData() {
  return {};
};
var noopFetch = function noopFetch() {};
var _lastPaths = [];
var _lastComponentsFiles = [];

var app = void 0;
var router = void 0;
var store = void 0;

function mapTransitions(Components, to, from) {
  return Components.map(function (Component) {
    var transition = Component.options.transition;
    if (typeof transition === 'function') {
      return transition(to, from);
    }
    return transition;
  });
}

function loadAsyncComponents(to, from, next) {
  var _this = this;

  var resolveComponents = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["f" /* flatMapComponents */])(to, function (Component, _, match, key) {
    if (typeof Component === 'function' && !Component.options) {
      return new __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var _resolve = function _resolve(Component) {
          Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["g" /* sanitizeComponent */])(Component);
          match.components[key] = Component;
          resolve(Component);
        };
        Component().then(_resolve).catch(reject);
      });
    }
    Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["g" /* sanitizeComponent */])(Component);
    match.components[key] = Component;
    return match.components[key];
  });
  var fromPath = from.fullPath.split('#')[0];
  var toPath = to.fullPath.split('#')[0];
  this._hashChanged = fromPath === toPath;
  if (!this._hashChanged) {
    this.$loading.start && this.$loading.start();
  }
  __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.all(resolveComponents).then(function () {
    return next();
  }).catch(function (err) {
    var statusCode = err.statusCode || err.status || err.response && err.response.status || 500;
    _this.error({ statusCode: statusCode, message: err.message });
    next(false);
  });
}

function callMiddleware(Components, context, layout) {
  var _this2 = this;

  // if layout is undefined, only call global middleware
  var midd = [];
  var unknownMiddleware = false;
  if (typeof layout !== 'undefined') {
    midd = []; // exclude global middleware if layout defined (already called before)
    if (layout.middleware) {
      midd = midd.concat(layout.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }
  midd = midd.map(function (name) {
    if (typeof __WEBPACK_IMPORTED_MODULE_5__middleware__["a" /* default */][name] !== 'function') {
      unknownMiddleware = true;
      _this2.error({ statusCode: 500, message: 'Unknown middleware ' + name });
    }
    return __WEBPACK_IMPORTED_MODULE_5__middleware__["a" /* default */][name];
  });
  if (unknownMiddleware) return;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["h" /* middlewareSeries */])(midd, context);
}

function normalizeComponents(to, ___) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["f" /* flatMapComponents */])(to, function (Component, _, match, key) {
    if ((typeof Component === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof___default()(Component)) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = __WEBPACK_IMPORTED_MODULE_4_vue__["default"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }
    return Component;
  });
}

// When navigating on a different route but the same component is used, Vue.js
// will not update the instance data, so we have to update $data ourselves
function fixPrepatch(to, ___) {
  var _this4 = this;

  if (this._hashChanged) return;
  __WEBPACK_IMPORTED_MODULE_4_vue__["default"].nextTick(function () {
    var instances = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["i" /* getMatchedComponentsInstances */])(to);
    _lastComponentsFiles = instances.map(function (instance, i) {
      if (!instance) return '';
      if (_lastPaths[i] === instance.constructor._path && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);
        for (var key in newData) {
          __WEBPACK_IMPORTED_MODULE_4_vue__["default"].set(instance.$data, key, newData[key]);
        }
      }
      return instance.constructor.options.__file;
    });
    // hide error component if no error
    if (_this4._hadError && _this4._dateLastError === _this4.$options._nuxt.dateErr) {
      _this4.error();
    }
    // Set layout
    var layout = _this4.$options._nuxt.err ? __WEBPACK_IMPORTED_MODULE_6__index__["a" /* NuxtError */].layout : to.matched[0].components.default.options.layout;
    if (typeof layout === 'function') {
      layout = layout(_this4._context);
    }
    _this4.setLayout(layout);
    // hot reloading
    setTimeout(function () {
      return hotReloadAPI(_this4);
    }, 100);
  });
}

// Special hot reload with asyncData(context)
function hotReloadAPI(_app) {
  if (true) return;
  var $components = [];
  var $nuxt = _app.$nuxt;
  while ($nuxt && $nuxt.$children && $nuxt.$children.length) {
    $nuxt.$children.forEach(function (child, i) {
      if (child.$vnode.data.nuxtChild) {
        var hasAlready = false;
        $components.forEach(function (component) {
          if (component.$options.__file === child.$options.__file) {
            hasAlready = true;
          }
        });
        if (!hasAlready) {
          $components.push(child);
        }
      }
      $nuxt = child;
    });
  }
  $components.forEach(addHotReload.bind(_app));
}

function addHotReload($component, depth) {
  var _this5 = this;

  if ($component.$vnode.data._hasHotReload) return;
  $component.$vnode.data._hasHotReload = true;
  var _forceUpdate = $component.$forceUpdate.bind($component.$parent);
  $component.$vnode.context.$forceUpdate = function () {
    var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* getMatchedComponents */])(router.currentRoute);
    var Component = Components[depth];
    if (!Component) return _forceUpdate();
    if ((typeof Component === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_typeof___default()(Component)) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = __WEBPACK_IMPORTED_MODULE_4_vue__["default"].extend(Component);
      Component._Ctor = Component;
    }
    _this5.error();
    var promises = [];
    var next = function next(path) {
      this.$loading.finish && this.$loading.finish();
      router.push(path);
    };
    var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* getContext */])({ route: router.currentRoute, store: store, isClient: true, hotReload: true, next: next.bind(_this5), error: _this5.error }, app);
    _this5.$loading.start && _this5.$loading.start();
    callMiddleware.call(_this5, Components, context).then(function () {
      // If layout changed
      if (depth !== 0) return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve();
      var layout = Component.options.layout || 'default';
      if (typeof layout === 'function') {
        layout = layout(context);
      }
      if (_this5.layoutName === layout) return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve();
      var promise = _this5.loadLayout(layout);
      promise.then(function () {
        _this5.setLayout(layout);
        __WEBPACK_IMPORTED_MODULE_4_vue__["default"].nextTick(function () {
          return hotReloadAPI(_this5);
        });
      });
      return promise;
    }).then(function () {
      return callMiddleware.call(_this5, Components, context, _this5.layout);
    }).then(function () {
      // Call asyncData(context)
      var pAsyncData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* promisify */])(Component.options.asyncData || noopData, context);
      pAsyncData.then(function (asyncDataResult) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* applyAsyncData */])(Component, asyncDataResult);
        _this5.$loading.increase && _this5.$loading.increase(30);
      });
      promises.push(pAsyncData);
      // Call fetch()
      Component.options.fetch = Component.options.fetch || noopFetch;
      var pFetch = Component.options.fetch(context);
      if (!pFetch || !(pFetch instanceof __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a) && typeof pFetch.then !== 'function') {
        pFetch = __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve(pFetch);
      }
      pFetch.then(function () {
        return _this5.$loading.increase && _this5.$loading.increase(30);
      });
      promises.push(pFetch);
      return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.all(promises);
    }).then(function () {
      _this5.$loading.finish && _this5.$loading.finish();
      _forceUpdate();
      setTimeout(function () {
        return hotReloadAPI(_this5);
      }, 100);
    });
  };
}

// Load vue app
var NUXT = window.__NUXT__ || {};
if (!NUXT) {
  throw new Error('[nuxt.js] cannot find the global variable __NUXT__, make sure the server is working.');
}
// Get matched components
var resolveComponents = function resolveComponents(router) {
  var path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["j" /* getLocation */])(router.options.base);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["f" /* flatMapComponents */])(router.match(path), function (Component, _, match, key, index) {
    if (typeof Component === 'function' && !Component.options) {
      return new __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var _resolve = function _resolve(Component) {
          Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["g" /* sanitizeComponent */])(Component);
          if (NUXT.serverRendered) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["e" /* applyAsyncData */])(Component, NUXT.data[index]);
          }
          match.components[key] = Component;
          resolve(Component);
        };
        Component().then(_resolve).catch(reject);
      });
    }
    Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["g" /* sanitizeComponent */])(Component);
    match.components[key] = Component;
    return Component;
  });
};

function nuxtReady(app) {
  window._nuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(app);
    }
  });
  // Special JSDOM
  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(app);
  }
  // Add router hooks
  router.afterEach(function (to, from) {
    app.$nuxt.$emit('routeChanged', to, from);
  });
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__index__["b" /* createApp */])().then(function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(__app) {
    var Components, _app, layout, mountApp;

    return __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = __app.app;
            router = __app.router;
            store = __app.store;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.all(resolveComponents(router));

          case 5:
            Components = _context2.sent;
            _app = new __WEBPACK_IMPORTED_MODULE_4_vue__["default"](app);
            layout = NUXT.layout || 'default';
            _context2.next = 10;
            return _app.loadLayout(layout);

          case 10:
            _app.setLayout(layout);

            mountApp = function mountApp() {
              _app.$mount('#__nuxt');
              __WEBPACK_IMPORTED_MODULE_4_vue__["default"].nextTick(function () {
                // Hot reloading
                hotReloadAPI(_app);
                // Call window.onNuxtReady callbacks
                nuxtReady(_app);
              });
            };

            _app.setTransitions = _app.$options._nuxt.setTransitions.bind(_app);
            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, router.currentRoute));
              _lastPaths = router.currentRoute.matched.map(function (route) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* compile */])(route.path)(router.currentRoute.params);
              });
              _lastComponentsFiles = Components.map(function (Component) {
                return Component.options.__file;
              });
            }
            _app.error = _app.$options._nuxt.error.bind(_app);
            _app.$loading = {}; // to avoid error while _app.$nuxt does not exist
            if (NUXT.error) _app.error(NUXT.error);
            // Add router hooks
            router.beforeEach(loadAsyncComponents.bind(_app));
            router.beforeEach(render.bind(_app));
            router.afterEach(normalizeComponents);
            router.afterEach(fixPrepatch.bind(_app));

            if (!NUXT.serverRendered) {
              _context2.next = 24;
              break;
            }

            mountApp();
            return _context2.abrupt('return');

          case 24:
            render.call(_app, router.currentRoute, router.currentRoute, function (path) {
              if (path) {
                var mounted = false;
                router.afterEach(function () {
                  if (mounted) return;
                  mounted = true;
                  mountApp();
                });
                router.push(path);
                return;
              }
              normalizeComponents(router.currentRoute, router.currentRoute);
              fixPrepatch.call(_app, router.currentRoute, router.currentRoute);
              mountApp();
            });

          case 25:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this6);
  }));

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}()).catch(function (err) {
  console.error('[nuxt.js] Cannot load components', err); // eslint-disable-line no-console
});

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(45);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var _6a025582 = function _6a025582() {
  return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 142));
};

var _5a2e1498 = function _5a2e1498() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 147));
};

var _2cc21bf2 = function _2cc21bf2() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 145));
};

var _4f3246ae = function _4f3246ae() {
  return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 144));
};

var _1ecaa598 = function _1ecaa598() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 143));
};

var _42e85d00 = function _42e85d00() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 146));
};

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition;
  } else {
    var position = {};
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 };
    } else if (to.matched.some(function (r) {
      return r.components.default.options.scrollToTop;
    })) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 };
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash };
    }
    return position;
  }
};

function createRouter() {
  return new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior: scrollBehavior,
    routes: [{
      path: "/",
      component: _6a025582,
      name: "index"
    }, {
      path: "/recipes",
      component: _5a2e1498,
      name: "recipes"
    }, {
      path: "/recipes-latest",
      component: _2cc21bf2,
      name: "recipes-latest"
    }, {
      path: "/recipes-category",
      component: _4f3246ae,
      name: "recipes-category"
    }, {
      path: "/recipes-category/:category",
      component: _1ecaa598,
      name: "recipes-category-category"
    }, {
      path: "/recipes/:id",
      component: _42e85d00,
      name: "recipes-id"
    }]
  });
}

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(46);





__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuex__["default"]);

// Recursive find files in ~/store
var files = __webpack_require__(139);
var filenames = files.keys();

// Store
var storeData = {};

// Check if store/index.js exists
var indexFilename = filenames.find(function (filename) {
  return filename.includes('./index.');
});
if (indexFilename) {
  storeData = getModule(indexFilename);
}

// If store is not an exported method = modules store
if (typeof storeData !== 'function') {

  // Store modules
  if (!storeData.modules) {
    storeData.modules = {};
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_get_iterator___default()(filenames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var filename = _step.value;

      var name = filename.replace(/^\.\//, '').replace(/\.(js|ts)$/, '');
      if (name === 'index') continue;

      var namePath = name.split(/\//);
      var module = getModuleNamespace(storeData, namePath);

      name = namePath.pop();
      module[name] = getModule(filename);
      module[name].namespaced = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// createStore
var createStore = storeData instanceof Function ? storeData : function () {
  return new __WEBPACK_IMPORTED_MODULE_3_vuex__["default"].Store(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_object_assign___default()({}, storeData, {
    state: storeData.state instanceof Function ? storeData.state() : {}
  }));
};

// Dynamically require module
function getModule(filename) {
  var file = files(filename);
  var module = file.default || file;
  if (module.commit) {
    throw new Error('[nuxt] store/' + filename.replace('./', '') + ' should export a method which returns a Vuex instance.');
  }
  if (module.state && typeof module.state !== 'function') {
    throw new Error('[nuxt] state should be a function in store/' + filename.replace('./', ''));
  }
  return module;
}

function getModuleNamespace(storeData, namePath) {
  if (namePath.length === 1) {
    return storeData.modules;
  }
  var namespace = namePath.shift();
  storeData.modules[namespace] = storeData.modules[namespace] || {};
  storeData.modules[namespace].namespaced = true;
  storeData.modules[namespace].modules = storeData.modules[namespace].modules || {};
  return getModuleNamespace(storeData.modules[namespace], namePath);
}

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

window.onNuxtReady(function () {
  if (!'serviceWorker' in navigator) {
    console.warn('serviceWorker is not supported');
    return;
  }

  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  });
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_lazyload__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_lazyload__);



// or with options
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_lazyload___default.a, {
  loading: '/images/loading.gif',
  attempt: 1
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue__);

//
//
//
//
//
//
//



var layouts = {

  "_default": function _default() {
    return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 141));
  }

};

/* harmony default export */ __webpack_exports__["default"] = ({
  head: { "link": [{ "rel": "stylesheet", "type": "text/css", "href": "/css/bulma.css" }, { "rel": "stylesheet", "type": "text/css", "href": "/css/app.css" }, { "rel": "manifest", "href": "/_nuxt/manifest.ec0cab88.json" }, { "rel": "shortcut icon", "href": "/_nuxt/icons/icon_16.9qid3ZBUcQn.png" }, { "rel": "apple-touch-icon", "href": "/_nuxt/icons/icon_16.9qid3ZBUcQn.png" }], "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1, minimal-ui" }, { "name": "mobile-web-app-capable", "content": "yes" }, { "name": "apple-mobile-web-app-status-bar-style", "content": "default" }, { "hid": "description", "name": "description", "content": "Nuxt.js project" }, { "name": "theme-color", "content": "#3B8070" }, { "property": "og:type", "content": "website" }, { "property": "og:title", "content": "contenta_vue" }, { "property": "og:description", "content": "Nuxt.js project" }], "style": [], "script": [], "title": "contenta_vue", "htmlAttrs": { "lang": "en" } },
  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },

  mounted: function mounted() {
    this.$loading = this.$refs.loading;
    this.$nuxt.$loading = this.$loading;
  },


  methods: {
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      this.layout = layouts[_layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      var _this = this;

      if (!layout || !layouts['_' + layout]) layout = 'default';
      var _layout = '_' + layout;
      if (typeof layouts[_layout] !== 'function') {
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_core_js_promise___default.a.resolve(layouts[_layout]);
      }
      return layouts[_layout]().then(function (Component) {
        layouts[_layout] = Component;
        return layouts[_layout];
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
        console.error(e);
      });
    }
  },
  components: {
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_1__components_nuxt_loading_vue___default.a
  }
});

/***/ }),

/***/ 76:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nuxt-error',
  props: ['error'],
  head: function head() {
    return {
      title: this.error.message || 'An error occured'
    };
  }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
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
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#3B8070',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue__);
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // Bind $nuxt.setLayout(layout) to $root.setLayout
    this.setLayout = this.$root.setLayout.bind(this.$root);
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.$root.error;
  },
  mounted: function mounted() {
    if (this.$root.$loading && this.$root.$loading.start) {
      this.$loading = this.$root.$loading;
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue___default.a
  }
});

/***/ })

},[69]);