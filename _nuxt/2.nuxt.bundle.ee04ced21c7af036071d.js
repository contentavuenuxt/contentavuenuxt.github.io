webpackJsonp([2],Array(141).concat([
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(213),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(153);
var isBuffer = __webpack_require__(185);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(147);
var normalizeHeaderName = __webpack_require__(172);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(149);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(149);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(187)))

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);
var settle = __webpack_require__(164);
var buildURL = __webpack_require__(167);
var parseHeaders = __webpack_require__(173);
var isURLSameOrigin = __webpack_require__(171);
var createError = __webpack_require__(152);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(166);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(169);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(163);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(181);

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(178),
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);
var bind = __webpack_require__(153);
var Axios = __webpack_require__(160);
var defaults = __webpack_require__(148);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(150);
axios.CancelToken = __webpack_require__(159);
axios.isCancel = __webpack_require__(151);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(174);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(150);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(148);
var utils = __webpack_require__(147);
var InterceptorManager = __webpack_require__(161);
var dispatchRequest = __webpack_require__(162);
var isAbsoluteURL = __webpack_require__(170);
var combineURLs = __webpack_require__(168);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);
var transformData = __webpack_require__(165);
var isCancel = __webpack_require__(151);
var defaults = __webpack_require__(148);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(152);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d8_jsonapi_querystring__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d8_jsonapi_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_d8_jsonapi_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonapi_parse__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonapi_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonapi_parse__);




/**
 * Fetch resources from our JSON API server and format
 * result automatically with "jsonapi-parse", to put
 * "included" objects inside "data" objects; so that
 * they are ready to be consumed by our template
 * 
 * example usage :
 * 
 * const queryParams = {
 *    sort: {
 *      sortCreated: {
 *        direction: 'DESC'
 *        path: 'created',
 *      }
 *    },
 *    include: ['tags'],   
 *  }
 *  const datas = await this.jsonapi.get('/recipes', queryParams)
 * 
 */




var JSONAPIClient = function () {
  function JSONAPIClient(baseUrl) {
    __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default()(this, JSONAPIClient);

    this.baseUrl = baseUrl;
  }

  /**
   * http GET request on JSON-API server
   * 
   * @param {string} entity Uri . eg : "/recipes"
   * @param {object} JSONAPI query parameters as an objct, @see JSONAPIQueryBuilder
   */


  __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default()(JSONAPIClient, [{
    key: 'get',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(uri) {
        var queryParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var queryString, result, url, response, parsedJson;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_d8_jsonapi_querystring__["buildQueryString"])(queryParams);
                result = null;
                url = encodeURI(this.baseUrl) + encodeURI(uri) + '?' + queryString;
                _context.prev = 3;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(url);

              case 6:
                response = _context.sent;
                parsedJson = __WEBPACK_IMPORTED_MODULE_6_jsonapi_parse___default.a.parse(response.data);

                result = parsedJson.data;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](3);

                console.error(_context.t0.message);

              case 14:
                return _context.abrupt('return', result);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11]]);
      }));

      function get(_x2) {
        return _ref.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return JSONAPIClient;
}();

/* harmony default export */ __webpack_exports__["a"] = (JSONAPIClient);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DrupalJSONAPIClient__ = __webpack_require__(175);




/**
 * Get recipes from JSON API server
 */



var Recipes = function () {
  function Recipes() {
    __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Recipes);

    this.resourceUri = '/recipes';
    this.jsonapi = new __WEBPACK_IMPORTED_MODULE_4__DrupalJSONAPIClient__["a" /* default */]("https://dev-contentacms.pantheonsite.io/api");
  }

  __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default()(Recipes, [{
    key: 'findAllCategories',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
        var query;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = {
                  page: {
                    limit: limit
                  }
                };
                _context.next = 3;
                return this.jsonapi.get('/categories', query);

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAllCategories() {
        return _ref.apply(this, arguments);
      }

      return findAllCategories;
    }()
  }, {
    key: 'findAllLatest',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
        var query, datas;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = {
                  sort: {
                    sortCreated: {
                      path: 'created',
                      direction: 'DESC'
                    }
                  },
                  page: {
                    limit: limit
                  },
                  include: ['image', 'image.thumbnail', 'tags']
                };
                _context2.next = 3;
                return this.jsonapi.get(this.resourceUri, query);

              case 3:
                datas = _context2.sent;
                return _context2.abrupt('return', datas);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findAllLatest() {
        return _ref2.apply(this, arguments);
      }

      return findAllLatest;
    }()
  }, {
    key: 'findAllByCategoryName',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(categoryName) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        var query;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = {
                  sortCreated: {
                    path: 'created',
                    direction: 'DESC'
                  },
                  include: ['image', 'image.thumbnail', 'tags'],
                  filter: {
                    categoryName: {
                      condition: {
                        path: 'category.name',
                        value: categoryName
                      }
                    }
                  },
                  page: {
                    offset: 0,
                    limit: limit
                  }
                };
                _context3.next = 3;
                return this.jsonapi.get(this.resourceUri, query);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findAllByCategoryName(_x4) {
        return _ref3.apply(this, arguments);
      }

      return findAllByCategoryName;
    }()
  }]);

  return Recipes;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Recipes());

/***/ }),
/* 177 */
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
    itemsByRow: { type: String, default: 4 },
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
/* 178 */
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
    to: {
      type: String | Array,
      default: '/'
    }
  },
  data: function data() {
    return {
      isLoading: false
    };
  }
});

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BulmaCard__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { BulmaCard: __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard___default.a },
  props: {
    node: {
      type: Object,
      default: {}
    }
  }
});

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ButtonLink__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ButtonLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ButtonLink__);
//
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
  components: { RecipeAsTeaser: __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser___default.a, BulmaGrid: __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid___default.a, ButtonLink: __WEBPACK_IMPORTED_MODULE_2__components_ButtonLink___default.a },
  props: {
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    nodes: { type: Array, default: [] }
  }
});

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(182), __esModule: true };

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(183);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(6).f});

/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * Helper to create a JSON API query string from a nested Object.
 * @see https://www.drupal.org/docs/8/modules/json-api/json-api
 * 
 * USAGE :
 * To create the following query string :
 * "sort[sortCreated][path]=created&sort[sortCreated][direction]=DESC&fields[recipes]=title&include=tags,image&filter[categoryName][condition][path]=category.name&filter[categoryName][condition][value]=Main%20course&page[offset]=0&page[limit]=4"
 *  
 *  import {buildQueryString} from 'DrupalJSONAPIQueryString'
 * 
 *  buildQueryString({
 *    sort: {
 *      sortCreated: {
 *        path: 'created',
 *        direction: 'DESC'
 *      }
 *    },
 *    fields: {
 *      recipes: ['title']
 *    },
 *    include: ['tags', 'image'],
 *    filter: {
 *      categoryName: {
 *        condition: {
 *          path: 'category.name',
 *          value: "Main course"
 *        }
 *      },
 *    },
 *    page: {
 *      offset: 0,
 *      limit: 4
 *    }
 *  })
 * 
 * @param {object} queryParams as an object.
 */

function buildQueryString (object, stackedPath = '', stringsParts = []) {
  Object.keys(object).forEach(key => {
    const propertySyntax = stackedPath ? `[${encodeURI(key)}]` : key
    if (Object.getPrototypeOf(object[key]) === Object.prototype) {
      buildQueryString(object[key], stackedPath + propertySyntax, stringsParts)
    }
    else {
      stringsParts.push(stackedPath + propertySyntax + '=' + encodeURI(object[key]))
    }
  })
  return stringsParts.join("&")
}

module.exports.buildQueryString = buildQueryString


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {!function(t,n){function r(t){var n,r,o={};return p(t.included,function(t){var n=t.type+"-"+t.id;o[n]=t}),i(t.data)?n=s(t.data,function(t){return e(t,o),a(t)}):c(t.data)&&(e(t.data,o),n=a(t.data)),r={data:n,jsonapi:t.jsonapi||{}},t.meta&&(r.meta=t.meta),t.errors&&(r.errors=t.errors),r}function e(t,n,r){t.relationships&&(r=r?r.concat([t]):[t]),p(t.relationships,function(e,a){e.data&&(i(e.data)?t.attributes[a]=s(e.data,function(t){return o(t,n,r)}):t.attributes[a]=o(e.data,n,r))})}function o(t,n,r){var o,i;if(o=l(r,{id:t.id,type:t.type}))return t;var u=t.type+"-"+t.id;return(i=n[u])?(e(i,n,r),a(i)):t}function a(t){return j({},{links:t.links},t.attributes,{id:t.id})}function i(t){return"[object Array]"===Object.prototype.toString.call(t)}function u(t){return"[object String]"===Object.prototype.toString.call(t)}function c(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return t===n}function p(t,n){var r;if(i(t))for(r=0;r<t.length;r+=1)n(t[r],r);else if(c(t))for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&n(t[r],r)}function s(t,n){var r=[];return p(t,function(t,e){r.push(n(t,e))}),r}function d(t){var n=!0;return p(t,function(t){t!==!0&&(n=!1)}),n}function l(t,n){var r;return p(t,function(t){var e=s(n,function(n,r){return t[r]===n});d(e)&&(r=t)}),r}function j(){var t=Object(null),n=Array.prototype.slice.call(arguments);return p(n,function(n){p(n,function(n,r){t[r]=n})}),t}var y=t.jsonapi||(t.jsonapi={});y.parse=function(n){var e,o;if(u(n))try{e=t.JSON.parse(n)}catch(a){if("SyntaxError"===a.name)return n;throw a}else{if(!c(n))return n;e=n}return f(e.data)&&f(e.errors)&&f(e.meta)?e:e.jsonapi&&e.jsonapi.parsed?e:(o=r(e),o.jsonapi.parsed=!0,o)}, true?c(module)&&c(module.exports)&&(exports=module.exports=y):t.jsonapi=y}("undefined"==typeof window?this:window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(197)(module)))

/***/ }),
/* 187 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(193),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(177),
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
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(196),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(195),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 192 */
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
/* 193 */
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
/* 194 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nuxt-link', {
    staticClass: "button more-link is-primary",
    class: {
      'is-loading': _vm.isLoading
    },
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
/* 195 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nodes"
  }, [_c('BulmaGrid', {
    attrs: {
      "items": _vm.nodes,
      "itemsByRow": "4"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('RecipeAsTeaser', {
          attrs: {
            "node": props.item
          }
        })]
      }
    }])
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('BulmaCard', [(_vm.node.image) ? _c('div', {
    staticClass: "thumbnail",
    slot: "image"
  }, [(_vm.node.image) ? _c('img', {
    attrs: {
      "src": _vm.node.image.thumbnail.filename
    }
  }) : _vm._e()]) : _vm._e(), _c('div', {
    slot: "content"
  }, [_c('div', {
    staticClass: "difficulty"
  }, [_vm._v("\n      difficulty : " + _vm._s(_vm.node.difficulty) + "\n    ")]), _c('h3', [_vm._v(_vm._s(_vm.node.title))])])])
},staticRenderFns: []}

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Recipes__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_RecipesAsCards__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_RecipesAsCards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_RecipesAsCards__);


//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  transition: 'page',
  components: { RecipesAsCards: __WEBPACK_IMPORTED_MODULE_3__components_RecipesAsCards___default.a },
  asyncData: function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
      var params = _ref.params;
      var recipes;
      return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_2__services_Recipes__["a" /* default */].findAllByCategoryName(params.category, 20);

            case 2:
              recipes = _context.sent;
              return _context.abrupt('return', {
                recipes: recipes,
                categoryName: params.category
              });

            case 4:
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
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('RecipesAsCards', {
    attrs: {
      "title": _vm.categoryName,
      "nodes": _vm.recipes
    }
  })], 1)
},staticRenderFns: []}

/***/ })
]));