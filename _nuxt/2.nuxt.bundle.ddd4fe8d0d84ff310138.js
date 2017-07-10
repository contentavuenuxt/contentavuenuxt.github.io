webpackJsonp([2],Array(145).concat([
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(226),
  /* template */
  __webpack_require__(245),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 146 */,
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(155);
var isBuffer = __webpack_require__(189);

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
/***/ (function(module, exports) {

// Store the HTTP methods here.
module.exports = {
  get: 'get',
  patch: 'patch',
  post: 'post',
  delete: 'delete'
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(147);
var normalizeHeaderName = __webpack_require__(177);

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
    adapter = __webpack_require__(151);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(151);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(190)))

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);
var settle = __webpack_require__(169);
var buildURL = __webpack_require__(172);
var parseHeaders = __webpack_require__(178);
var isURLSameOrigin = __webpack_require__(176);
var createError = __webpack_require__(154);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(171);

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
      var cookies = __webpack_require__(174);

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
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(168);

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
/* 155 */
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(185);

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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {!function(t,n){function r(t){var n,r,o={};return p(t.included,function(t){var n=t.type+"-"+t.id;o[n]=t}),i(t.data)?n=s(t.data,function(t){return e(t,o),a(t)}):c(t.data)&&(e(t.data,o),n=a(t.data)),r={data:n,jsonapi:t.jsonapi||{}},t.meta&&(r.meta=t.meta),t.errors&&(r.errors=t.errors),r}function e(t,n,r){t.relationships&&(r=r?r.concat([t]):[t]),p(t.relationships,function(e,a){e.data&&(i(e.data)?t.attributes[a]=s(e.data,function(t){return o(t,n,r)}):t.attributes[a]=o(e.data,n,r))})}function o(t,n,r){var o,i;if(o=l(r,{id:t.id,type:t.type}))return t;var u=t.type+"-"+t.id;return(i=n[u])?(e(i,n,r),a(i)):t}function a(t){return j({},{links:t.links},t.attributes,{id:t.id})}function i(t){return"[object Array]"===Object.prototype.toString.call(t)}function u(t){return"[object String]"===Object.prototype.toString.call(t)}function c(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return t===n}function p(t,n){var r;if(i(t))for(r=0;r<t.length;r+=1)n(t[r],r);else if(c(t))for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&n(t[r],r)}function s(t,n){var r=[];return p(t,function(t,e){r.push(n(t,e))}),r}function d(t){var n=!0;return p(t,function(t){t!==!0&&(n=!1)}),n}function l(t,n){var r;return p(t,function(t){var e=s(n,function(n,r){return t[r]===n});d(e)&&(r=t)}),r}function j(){var t=Object(null),n=Array.prototype.slice.call(arguments);return p(n,function(n){p(n,function(n,r){t[r]=n})}),t}var y=t.jsonapi||(t.jsonapi={});y.parse=function(n){var e,o;if(u(n))try{e=t.JSON.parse(n)}catch(a){if("SyntaxError"===a.name)return n;throw a}else{if(!c(n))return n;e=n}return f(e.data)&&f(e.errors)&&f(e.meta)?e:e.jsonapi&&e.jsonapi.parsed?e:(o=r(e),o.jsonapi.parsed=!0,o)}, true?c(module)&&c(module.exports)&&(exports=module.exports=y):t.jsonapi=y}("undefined"==typeof window?this:window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208)(module)))

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(192);
var parse = __webpack_require__(191);
var formats = __webpack_require__(159);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

exports.arrayToObject = function (source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function (target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (Object.prototype.hasOwnProperty.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function (str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D || // -
            c === 0x2E || // .
            c === 0x5F || // _
            c === 0x7E || // ~
            (c >= 0x30 && c <= 0x39) || // 0-9
            (c >= 0x41 && c <= 0x5A) || // a-z
            (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]; // eslint-disable-line max-len
    }

    return out;
};

exports.compact = function (obj, references) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    var refs = references || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0; i < obj.length; ++i) {
            if (obj[i] && typeof obj[i] === 'object') {
                compacted.push(exports.compact(obj[i], refs));
            } else if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        obj[key] = exports.compact(obj[key], refs);
    });

    return obj;
};

exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function (obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = class Base {
  /**
   * Create an instance of the Base class.
   * @param {object} options
   *   The configuration used to create a new instance of Waterwheel.
   * @param {string} options.base
   *   The base URL.
   */
  constructor(options) {
    this.options = Object.assign({
      timeout: 500,
      accessCheck: true,
      validation: true
    }, options);
  }
  /**
   * Set the base url.
   * @param {string} base
   *   The base url.
   */
  setBase(base) {
    this.options.base = base;
  }

  /**
   * Get the base url.
   * @return {string}
   *   The base url.
   */
  getBase() {
    return this.options.base;
  }

};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);
var bind = __webpack_require__(155);
var Axios = __webpack_require__(165);
var defaults = __webpack_require__(149);

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
axios.Cancel = __webpack_require__(152);
axios.CancelToken = __webpack_require__(164);
axios.isCancel = __webpack_require__(153);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(179);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(152);

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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(149);
var utils = __webpack_require__(147);
var InterceptorManager = __webpack_require__(166);
var dispatchRequest = __webpack_require__(167);
var isAbsoluteURL = __webpack_require__(175);
var combineURLs = __webpack_require__(173);

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
/* 166 */
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(147);
var transformData = __webpack_require__(170);
var isCancel = __webpack_require__(153);
var defaults = __webpack_require__(149);

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
/* 168 */
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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(154);

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
/* 170 */
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
/* 171 */
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
/* 172 */
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
/* 173 */
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
/* 174 */
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
/* 175 */
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
/* 176 */
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
/* 177 */
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
/* 178 */
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
/* 179 */
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
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_waterwheel__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_waterwheel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_waterwheel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonapi_parse__);




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
 *    include: 'tags,image',
 *    fields: {
 *       images:title,filename,
 *       recipes:title, description
 *    }
 *  }
 *  const jsonapi = new JSONAPIClient(http://mydomain)
 *  const datas = await jsonapi.get('recipes', queryParams)
 * 
 */



var JSONAPIClient = function () {
  function JSONAPIClient(baseUrl) {
    __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default()(this, JSONAPIClient);

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


  __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default()(JSONAPIClient, [{
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
  }]);

  return JSONAPIClient;
}();

/* harmony default export */ __webpack_exports__["a"] = (JSONAPIClient);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__D8JSONAPIClient__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonapi_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonapi_parse__);





/**
 * Get recipes from JSON API server
 */




var Recipes = function () {
  function Recipes() {
    __WEBPACK_IMPORTED_MODULE_2__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Recipes);

    this.resourceUri = 'recipes';
    this.api = new __WEBPACK_IMPORTED_MODULE_4__D8JSONAPIClient__["a" /* default */]("https://dev-contentacms.pantheonsite.io");
  }

  __WEBPACK_IMPORTED_MODULE_3__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_createClass___default()(Recipes, [{
    key: 'findOneById',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(id) {
        var options;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  include: 'image,category'
                };
                _context.next = 3;
                return this.api.get('recipes', options, id);

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

    /**
     * Promoted recipes sorted by created DESC
     * @param {int} limit 
     */

  }, {
    key: 'findAllPromoted',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
        var options;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
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
                    files: 'filename'
                  },
                  sort: '-created'
                };
                _context2.next = 3;
                return this.api.get('recipes', options);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findAllPromoted() {
        return _ref2.apply(this, arguments);
      }

      return findAllPromoted;
    }()
  }, {
    key: 'findAllCategories',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
        var options;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = {
                  page: {
                    limit: limit
                  }
                };
                _context3.next = 3;
                return this.api.get('categories', options);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findAllCategories() {
        return _ref3.apply(this, arguments);
      }

      return findAllCategories;
    }()
  }, {
    key: 'findAllLatest',
    value: function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
        var options;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = {
                  sort: '-created',
                  page: { limit: limit },
                  include: 'image,image.thumbnail',
                  fields: {
                    recipes: 'title,difficulty,image',
                    images: 'name,thumbnail',
                    files: 'filename'
                  }
                };
                return _context4.abrupt('return', this.api.get('recipes', options));

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findAllLatest() {
        return _ref4.apply(this, arguments);
      }

      return findAllLatest;
    }()
  }, {
    key: 'findAllLatestOld',
    value: function () {
      var _ref5 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
        var options;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = {
                  sort: {
                    sortCreated: {
                      path: 'created',
                      direction: 'DESC'
                    }
                  },
                  page: {
                    limit: limit
                  },
                  include: 'image, image.thumbnail',
                  fields: {
                    recipes: 'title,difficulty,image',
                    images: 'name,thumbnail',
                    files: 'filename'
                  }
                };
                _context5.next = 3;
                return this.api.get(this.resourceUri, options);

              case 3:
                return _context5.abrupt('return', _context5.sent);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findAllLatestOld() {
        return _ref5.apply(this, arguments);
      }

      return findAllLatestOld;
    }()
  }, {
    key: 'findAllByCategoryName',
    value: function () {
      var _ref6 = __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(categoryName) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
        var options;
        return __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = {
                  sort: '-created',
                  include: ['image', 'image.thumbnail'].join(','),
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
                    files: 'filename'
                  },
                  page: {
                    offset: 0,
                    limit: limit
                  }
                };
                _context6.next = 3;
                return this.api.get(this.resourceUri, options);

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function findAllByCategoryName(_x7) {
        return _ref6.apply(this, arguments);
      }

      return findAllByCategoryName;
    }()
  }]);

  return Recipes;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Recipes());

/***/ }),
/* 182 */
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
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard__ = __webpack_require__(193);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { BulmaCard: __WEBPACK_IMPORTED_MODULE_0__components_BulmaCard___default.a },
  props: {
    recipe: { type: Object, default: function _default() {
        return [];
      } }
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
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid__ = __webpack_require__(194);
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
  components: { RecipeAsTeaser: __WEBPACK_IMPORTED_MODULE_0__components_RecipeAsTeaser___default.a, BulmaGrid: __WEBPACK_IMPORTED_MODULE_1__components_BulmaGrid___default.a },
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', {defineProperty: __webpack_require__(6).f});

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(true);
// imports


// module
exports.push([module.i, ".columns .card[data-v-7612271a]{height:100%}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/components/RecipesAsCards.vue"],"names":[],"mappings":"AACA,gCACE,WAAa,CACd","file":"RecipesAsCards.vue","sourcesContent":["\n.columns .card[data-v-7612271a] {\n  height: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 189 */
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
/* 190 */
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
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(161);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos));
            val = options.decoder(part.slice(pos + 1));
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function parseObjectRecursive(chain, val, options) {
    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj;
    if (root === '[]') {
        obj = [];
        obj = obj.concat(parseObject(chain, val, options));
    } else {
        obj = options.plainObjects ? Object.create(null) : {};
        var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);
        if (
            !isNaN(index) &&
            root !== cleanRoot &&
            String(index) === cleanRoot &&
            index >= 0 &&
            (options.parseArrays && index <= options.arrayLimit)
        ) {
            obj = [];
            obj[index] = parseObject(chain, val, options);
        } else {
            obj[cleanRoot] = parseObject(chain, val, options);
        }
    }

    return obj;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts || {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(161);
var formats = __webpack_require__(159);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix);
            return [formatter(keyValue) + '=' + formatter(encoder(obj))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts || {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats.default;
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    return keys.join(delimiter);
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  null,
  /* template */
  __webpack_require__(198),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(182),
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
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(200),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(201)
}
var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(199),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7612271a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 197 */
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
/* 198 */
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
/* 199 */
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
        return [_c('RecipeAsTeaser', {
          attrs: {
            "recipe": props.item
          }
        })]
      }
    }])
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nuxt-link', {
    attrs: {
      "to": '/recipes/' + _vm.recipe.id
    }
  }, [_c('BulmaCard', [(_vm.recipe.image) ? _c('div', {
    staticClass: "thumbnail",
    slot: "image"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.recipe.image.thumbnail.filename),
      expression: "recipe.image.thumbnail.filename"
    }]
  })]) : _vm._e(), _c('div', {
    staticClass: "has-text-centered",
    slot: "content"
  }, [_c('div', {
    staticClass: "difficulty"
  }, [_c('small', [_c('span', {
    class: _vm.classes(_vm.recipe.difficulty)
  }, [_vm._v("  " + _vm._s(_vm.recipe.difficulty))])])]), _c('div', {
    staticClass: "description"
  }, [_c('h3', {
    staticClass: "title is-6"
  }, [_vm._v(_vm._s(_vm.recipe.title))])])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("e38c527a", content, true);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

const methods = __webpack_require__(148);

module.exports = class Entity {
  /**
   * Construct a new Entity
   * @param {object} options
   *   The configuration used to create this entity.
   * @param {string} options.base
   *   The base URL
   * @param {object} options.methods
   *   The paths representing each CRUD action.
   * @param {string} options.methods.get
   *   GET Action
   * @param {string} options.methods.patch
   *   PATCH Action
   * @param {string} options.methods.post
   *   POST Action
   * @param {string} options.methods.delete
   *   DELETE Action
   * @param {string} options.more
   *   A path partial repreenting the location of field data about the expected bundle.
   * @param {number} [options.timeout=500]
   *   How long Axios should wait before canceling a request.
   * @param {string} options.bundle
   *   The bundle that this entity is included in.
   * @param {string} options.entity
   *   The name of the actual entity.
   * @param {object} options.metadata
   *   An object with field-level meta data.
   * @param {array} options.metadata.requiredFields
   *   An array of field names required when creating an entity.
   * @param {object} options.metadata.properties
   *   An object describing all the fields on a bundle and their properties.
   * @param {object} request
   *   A shared requestor class instance.
   */
  constructor(options, request) {
    this.options = options;
    this.request = request;
  }

  /**
   * Get a content entity in Drupal through REST (GET).
   * @param {number|string} identifier
   *   The ID of name of the entity being requested.
   * @param {string} [format=json]
   *   The format for the requested content.
   * @returns {Promise}
   *   A Promise that when fulfilled returns a response containing the content entity.
   * @TODO: Add fields argument for selectivity: entityType, entityId, format, fields, base, creds
   */
  get(identifier, format = 'json') {
    return !this.options.methods.hasOwnProperty(methods.get) ?
      Promise.reject(`The method, ${methods.get}, is not available.`) :
      this.request.issueRequest(methods.get, `${this.options.methods.get.path.replace(this.options.methods.get.path.match(/\{.*?\}/), identifier)}?_format=${format}`, '');
  }

  /**
   * Update or set a content entity in Drupal through REST (PATCH).
   * @param {number|string} identifier
   *   The ID of name of the entity being requested.
   * @param {object} body
   *   An object containing the request body to be sent.
   * @param {string} [format=application/json]
   *   The format for the requested content.
   * @returns {Promise} A Promise that when fulfilled returns a response containing the content entity in JSON (as of 8.2).
   */
  patch(identifier, body = {}, format = 'application/json') {
    return !this.options.methods.hasOwnProperty(methods.patch) ?
      Promise.reject(`The method, ${methods.patch}, is not available.`) :
      this.request.getXCSRFToken()
        .then((csrfToken) => this.request.issueRequest(methods.patch, `${this.options.methods.patch.path.replace(this.options.methods.patch.path.match(/\{.*?\}/), identifier)}`, csrfToken, {'Content-Type': format}, body));
  }

  /**
   * Create a content entity in Drupal through REST (POST).
   * @param {object} body
   *   An object containing the request body to be sent.
   * @param {string} [format=application/json]
   *   The format of the content being posted.
   * @param {bool} skipFieldValidation
   *   A shortcut to skip field validation.
   * @returns {Promise}
   *   A Promise that when fulfilled returns a response containing the content entity in JSON (as of 8.2).
   */
  post(body, format = 'application/json', skipFieldValidation) {
    if (!this.options.methods.hasOwnProperty(methods.post)) {
      return Promise.reject(`The method, ${methods.post}, is not available.`);
    }
    if (skipFieldValidation) {
      // Check to see if the required fields match the passed fields.
      const checkedFields = this.checkRequiredFields(body);
      if (checkedFields.length) {
        return Promise.reject(`The following fields, ${checkedFields.join(', ')}, are required.`);
      }
    }

    return this.request.getXCSRFToken()
      .then((csrfToken) => this.request.issueRequest(methods.post, this.options.methods.post.path, csrfToken, {'Content-Type': format}, body));
  }

  /**
   * Delete a content entity in Drupal through REST (DELETE).
   * @param {number|string} identifier
   *   The ID of name of the entity being requested.
   * @returns {Promise}
   *   A Promise that when fulfilled returns a response containing the content entity in JSON (as of 8.2).
   */
  delete(identifier) {
    return !this.options.methods.hasOwnProperty(methods.delete) ?
      Promise.reject(`The method, ${methods.delete}, is not available.`) :
      this.request.getXCSRFToken()
        .then((csrfToken) => this.request.issueRequest(methods.delete, `${this.options.methods.delete.path.replace(this.options.methods.delete.path.match(/\{.*?\}/), identifier)}`, csrfToken));
  }

  /**
   * Checks to see if the required fields are present when submitting a POST request.
   * @param {object} body
   *   The post body data.
   * @returns {array}
   *   An array of keys.
   */
  checkRequiredFields(body) {
    const availableBodyKeys = Object.keys(body);
    return this.options.metadata.requiredFields.filter(key => !availableBodyKeys.includes(key));
  }

  /**
   * Set a field on a specific entity
   * @param  {string|number} identifier
   *   The entity we are setting the field on.
   * @param  {object[]|object} fields
   *   The field name we are setting the data on.
   * @param  {object} additionalValues
   *   Any additional values to be appended to the post body.
   * @return  {Promise}
   *   The resolved promise.
   */
  setFields(identifier, fields) {
    const availableFieldKeys = Object.keys(this.options.metadata.properties);
    const nonMatchedFields = Object.keys(fields)
      .map(fieldKey => {
        if (!availableFieldKeys.includes(fieldKey)) {
          return fieldKey;
        }
        return false;
      }).filter(Boolean);

    if (nonMatchedFields.length){
      return Promise.reject(new Error(`The ${nonMatchedFields.length > 1 ? 'fields' : 'field'}, ${nonMatchedFields.join(', ')}, ${nonMatchedFields.length > 1 ? 'are' : 'is'} not included within the bundle, ${this.options.bundle}.`));
    }
    let postBody = {};

    Object.keys(fields).forEach(fieldNameToSet => {
      const fieldSpec = this.options.metadata.properties[fieldNameToSet];

      // This assumes we are always going to be wrapping the response in an array.
      postBody[fieldNameToSet] = [];

      const fieldValueWrapper = {};
      Object.keys(fieldSpec.items.properties).forEach(prop => {
        if (fields[fieldNameToSet].hasOwnProperty(prop)){
          fieldValueWrapper[prop] = fields[fieldNameToSet][prop];
        }
      });

      postBody[fieldNameToSet].push(fieldValueWrapper);
    });

    postBody.type = [{
      target_id: this.options.bundle,
      target_type: `${this.options.entity}_type`
    }];
    return this.patch(identifier, postBody);
  }
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

const methods = __webpack_require__(148);
const axios = __webpack_require__(150);
const qs = __webpack_require__(160);

module.exports = class OAuth {
  constructor(basePath, OAuthOptions) {
    this.basePath = basePath;
    this.tokenInformation = Object.assign({}, OAuthOptions);
    this.tokenInformation.grant_type = 'password'; // eslint-disable-line camelcase
  }
  /**
   * Get an OAuth Token.
   * @return {promise}
   *   The resolved promise of fetching the oauth token.
   */
  getToken() {
    const currentTime = new Date().getTime();
    // Resolve if token already exists and is fresh
    if (this.tokenInformation.access_token && (
      this.hasOwnProperty('tokenExpireTime') &&
      this.tokenExpireTime > currentTime
    )) {
      return Promise.resolve();
    }
    // If token is already being fetched, use that one.
    else if (this.bearerPromise) {
      return this.bearerPromise;
    }
    // If token has already been fetched switch grant_type to refresh_token.
    else if (this.tokenInformation.access_token) {
      this.tokenInformation.grant_type = 'refresh_token'; // eslint-disable-line camelcase
    }

    this.bearerPromise = axios({
      method: methods.post,
      url: `${this.basePath}/oauth/token`,
      data: qs.stringify(this.tokenInformation)
    })
    .then(response => {
      delete this.bearerPromise;
      let t = new Date();
      t.setSeconds(+t.getSeconds() + response.data.expires_in);
      this.tokenExpireTime = t.getTime();
      Object.assign(this.tokenInformation, response.data);
      return response.data;
    })
    .catch(e => {
      delete this.bearerPromise;
      return Promise.reject(e);
    });

    return this.bearerPromise;
  }
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__(162);
const methods = __webpack_require__(148);

module.exports = class Request extends Base {
  /**
   * Create an instance of the Request class.
   * @param {object} options
   *   The configuration used to create a new instance of Waterwheel.
   * @param {string} options.base
   *   The base URL.
   * @param {object} oauth
   *   The OAuth options.
   */
  constructor(options, oauth) {
    super(options);
    this.oauth = oauth;
    this.axios = __webpack_require__(150);
  }

  /**
   * Issue a generic XMLHttpRequest.
   * @param {string} method
   *  The HTTP method to be used in the request.
   * @param {string} url
   *  The URL against which to issue the request.
   * @param {string} XCSRFToken
   *  An X-CSRF-Token from Drupals REST API.
   * @param {object} additionalHeaders
   *  An object containing additional request header key-value pairs.
   * @param {object} body
   *  An object containing the request body to be sent.
   * @param {string} baseOverride
   *   Override the base URL in special scenarios.
   * @returns {Promise}
   *  A Promise that when fulfilled returns a response from the request.
   */
  issueRequest(method, url, XCSRFToken, additionalHeaders, body, baseOverride) {
    return (this.options.accessCheck && this.options.validation ?
      this.oauth.getToken() :
      Promise.resolve()
    )
    .then(() => {
      const options = {
        method: method,
        timeout: this.options.timeout,
        url: `${baseOverride || this.options.base}/${url.charAt(0) === '/' ? url.slice(1) : url}`,
        headers: {
          'X-CSRF-Token': XCSRFToken
        }
      };

      if (this.options.accessCheck && this.options.validation) {
        options.headers.Authorization = `Bearer ${this.oauth.tokenInformation.access_token}`;
      }

      // If this is a GET request,
      // or we didn't pass a token drop the X-CSRF-Token header.
      if (method === methods.get || !XCSRFToken) {
        delete options.headers['X-CSRF-Token'];
      }

      // If we have additionalHeaders, set them.
      // @TODO: This is NOT the safest way, so be careful.
      if (additionalHeaders && Object.keys(additionalHeaders).length !== 0) {
        Object.keys(additionalHeaders).forEach(key => {
          options.headers[key] = additionalHeaders[key];
        });
      }

      if (body) {
        options.data = body;
      }

      return this.axios(options)
        .then(res => Promise.resolve(res.data))
        .catch(err => {
          const error = new Error();
          if (err.message && err.message.indexOf('timeout') !== -1) {
            error.message = 'Timeout';
            error.status = 408;
          }
          else {
            error.message = err.response ? err.response.data.message : 'Unknown error.';
            error.status = err.response ? err.response.status : 500;
          }

          return Promise.reject(error);
        });
    });
  }
  /**
   * Get an X-CSRF-Token from Drupal's REST module.
   * @return {Promise}
   *  A Promise that when fulfilled returns a response containing the X-CSRF-Token.
   */
  getXCSRFToken() {
    if (this.csrfToken) {
      return Promise.resolve(this.csrfToken);
    }
    return new Promise((resolve, reject) => {
      this.axios({method: 'get', url: `${this.options.base}/rest/session/token`})
        .then(res => {
          this.csrfToken = res.data;
          return resolve(res.data);
        })
        .catch(err => reject(err));
    });
  }
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

const methods = __webpack_require__(148);

const qs = __webpack_require__(160);

module.exports = class JSONAPI {
  constructor(options, request) {
    this.request = request;
    this.jsonapiPrefix = options.jsonapiPrefix || 'jsonapi';
  }

  /**
   * GET jsonapi
   *
   * @param {string} resource
   *   The relative path to fetch from the API.
   * @param {object} params
   *   GET arguments to send with the request.
   * @param {string} id
   *   An ID of an individual item to request.
   * @return {promise}
   *   Resolves when the request is fulfilled, rejects if there's an error.
 */
  get(resource, params, id = false) {
    const format = 'api_json';
    const url = `/${this.jsonapiPrefix}/${resource}${id ? `/${id}` : ''}?_format=${format}${Object.keys(params).length ? `&${qs.stringify(params, {indices: false})}` : ''}`;
    return this.request.issueRequest(methods.get, url);
  }

  /**
   * POST jsonapi
   *
   * @param {string} resource
   *   The relative path to fetch from the API.
   * @param  {object} body
   *   JSON data sent to Drupal
   * @return {promise}
   *   Resolves when the request is fulfilled, rejects if there's an error.
   */
  post(resource, body) {
    const format = 'api_json';
    return this.request.issueRequest(
      methods.post,
      `/${this.jsonapiPrefix}/${resource}?_format=${format}`,
      '',
      {
        'Content-Type': 'application/vnd.api+json'
      },
      body
    );
  }

  /**
   * PATCH jsonapi
   *
   * @param {string} resource
   *   The relative path to fetch from the API.
   * @param  {object} body
   *   JSON data sent to Drupal
   * @return {promise}
   *   Resolves when the request is fulfilled, rejects if there's an error.
   */
  patch(resource, body) {
    const format = 'api_json';
    return this.request.issueRequest(
      methods.patch,
      `/${this.jsonapiPrefix}/${resource}?_format=${format}`,
      '',
      {
        'Content-Type': 'application/vnd.api+json'
      },
      body
    );
  }

  /**
   * DELETE jsonapi
   *
   * @param {string} resource
   *   The relative path to fetch from the API.
   * @param {string} id
   *   An ID of an individual item to delete.
   * @return {promise}
   *   Resolves when the request is fulfilled, rejects if there's an error.
 */
  delete(resource, id) {
    const format = 'api_json';
    const url = `/${this.jsonapiPrefix}/${resource}/${id}?_format=${format}`;
    return this.request.issueRequest(
      methods.delete,
      url,
      '',
      {
        'Content-Type': 'application/vnd.api+json'
      }
    );
  }

};


/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = class Swagger {
  constructor(swaggerJSON) {
    this.swagger = swaggerJSON;
    this.entities = {};
  }

  collectEntities() {
    Object.keys(this.swagger.paths).forEach(path => {
      Object.keys(this.swagger.paths[path]).forEach(method => {
        const entity = this.swagger.paths[path][method].tags[0];
        const match = new RegExp(`${entity}\:(.*)`);
        const definitions = Object.keys(this.swagger.definitions).filter(element => match.test(element));
        (definitions.length ? definitions : [entity]).forEach(bundle => {

          const bundleData = this.swagger.definitions[bundle].hasOwnProperty('allOf') ?
            this.swagger.definitions[bundle].allOf[1] :
            this.swagger.definitions[bundle];

          if (this.swagger.definitions[bundle].hasOwnProperty('allOf')) {
            bundleData.properties = Object.assign(
              bundleData.properties,
              this.swagger.definitions[this.swagger.definitions[bundle].allOf[0].$ref.split('/').pop()].properties
            );
          }

          // Only create an Object if we don't have one previously.
          if (!this.entities.hasOwnProperty(bundle)) {
            this.entities[bundle] = {};
          }

          // Create the methods key if this is the first time.
          this.entities[bundle].methods = this.entities[bundle].methods ? this.entities[bundle].methods : {};
          // Setup method information.
          this.entities[bundle].methods[method] = {
            path: path,
            parameters: this.swagger.paths[path][method].parameters
          };

          // Setup bundle properties.
          this.entities[bundle].properties = this.entities[bundle].properties ?
            this.entities[bundle].properties :
            bundleData.properties;

          // Setup required fields.
          this.entities[bundle].requiredFields = this.entities[bundle].requiredFields ?
            this.entities[bundle].requiredFields :
            bundleData.required;

        });
      });
    });

    return this.entities;
  }
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

const Base = __webpack_require__(162);

const Request = __webpack_require__(204);
const Entity = __webpack_require__(202);
const JSONAPI = __webpack_require__(205);
const Swagger = __webpack_require__(206);
const OAuth = __webpack_require__(203);

const methods = __webpack_require__(148);

module.exports = class Waterwheel extends Base {
  /**
   * Create an instance of the Waterwheel class.
   * @param {object} options
   *   The configuration used to create a new instance of Waterwheel.
   * @param {string} options.base
   *   The base URL.
   * @param {object} options.oauth
   *   The credentials used with each request.
   * @param {string} options.oauth.grant_type
   *   The type of grant you are requesting.
   * @param {string} options.oauth.client_id
   *   The ID of the OAuth Client.
   * @param {string} options.oauth.client_secret
   *   The secret set when the Client was created.
   * @param {string} options.oauth.username
   *   The resource owner username.
   * @param {string} options.oauth.password
   *   The resource owner password.
   * @param {string} options.oauth.scope
   *   The scope of the access request.
   * @param {string} options.timeout
   *   How long AXIOS should wait before bailing on a request.
   * @param {string} options.jsonapiPrefix
   *   If you have overridden the JSON API prefix, specify it here and Waterwheel
   *   will use this over the default of 'jsonapi'.
   * @param {boolean} options.validation
   *   Should the request use oauth validation or expect anonymous access.
   */
  constructor(options) {
    super(options);
    this.api = {};

    this.oauth = new OAuth(this.options.base, this.options.oauth);
    this.request = new Request(options, this.oauth);

    this.jsonapi = new JSONAPI(options, this.request);

    if (this.options.resources && Object.keys(this.options.resources).length) {
      this.parseSwagger(this.options.resources, this.request);
    }
  }

  /**
   * Parse a Swagger compatible document and create Waterwheel entities.
   * @param {object} swaggerResources
   *   A JSON object representing your API in Swagger format.
   * @param {object} request
   *   A shared requestor class instance.
   * @param {object} credentials
   *   A credentials object for making requests.
   */
  parseSwagger(swaggerResources, request) {
    let swagger = new Swagger(swaggerResources).collectEntities();

    Object.keys(swagger).forEach(entity => {
      let methods = {};
      Object.keys(swagger[entity].methods).forEach(method => {
        methods[method.toUpperCase()] = {
          path: swagger[entity].methods[method].path
        };
      });
      this.api[entity] = new Entity({
        base: this.options.base,
        methods: methods,
        bundle: entity.indexOf(':') > -1 ? entity.split(':')[1] : entity,
        entity: entity.indexOf(':') > -1 ? entity.split(':')[0] : entity,
        metadata: {
          requiredFields: swagger[entity].requiredFields,
          properties: swagger[entity].properties
        }
      }, request);
    });
  }

  /**
   * Return an array of resources currently active in Waterwheel.
   * @return {array}
   *   The resources currently active in Waterwheel.
   */
  getAvailableResources(){
    // Sort everything for readability.
    return Object.keys(this.api).sort();
  }

  /**
   * Populate Waterwheel.api with available resources from a Swagger endpoint.
   * @param {string} resourcesLocation
   *   The full HTTP path for your swagger resources.
   * @return {Promise}
   *   A completed promise after the requested resources were added.
   */
  populateResources(resourcesLocation) {
    return this.request.issueRequest(methods.get, resourcesLocation, false, {}, false, false)
      .then(res => {
        this.parseSwagger(res, this.request);
      });
  }

  /**
   * Fetch embedded resources from HAL+JSON documents
   * @param  {object} entityJSON
   *   An object, usually returned from Drupal, containing _embedded information
   * @param {string|array} [includedFields]
   *  If specified, a series of embedded resources to fetch.
   * @return {Promise}
   *   If no _embedded key is found, a rejection is returned, else a resolved
   *   promise with all the embedded resources requests completed.
   */
  fetchEmbedded(entityJSON, includedFields) {
    if (!entityJSON || !entityJSON.hasOwnProperty('_embedded')) {
      return Promise.reject('This is probably not HAL+JSON');
    }

    const fieldsToFilterBy = includedFields ?
      (Array.isArray(includedFields) ? includedFields : [includedFields]) : false;

    const embeddedResources = entityJSON._embedded;
    const embeddedResourcesKeys = Object.keys(embeddedResources);

    let links = [];

    (fieldsToFilterBy ?
      embeddedResourcesKeys.filter(key => fieldsToFilterBy.indexOf(key.split('/').pop()) !== -1) :
      embeddedResourcesKeys
    ).forEach(key => {
      embeddedResources[key].forEach(ref => {
        links.push(ref._links.self.href.split(this.options.base)[1]);
      });
    });

    // Create a Set from the possibly-duplicate links array.
    // Get an array from that set.
    links = Array.from(new Set(links));

    // Promise.all accepts an array of promises to resolve. The first item
    // in this array is the original entity, adjacent to the embedded ones.
    return Promise.all([Promise.resolve(entityJSON)].concat(links.map(link => this.request.issueRequest(methods.get, link))));
  }

};


/***/ }),
/* 208 */
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
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clock.3d323af.svg";

/***/ }),
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    recipe: { type: Object, default: {} }
  }
});

/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Applications_MAMP_htdocs_contenta_vue_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Recipes__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_RecipeAsDetail__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_RecipeAsDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_RecipeAsDetail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_RecipesAsCards__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_RecipesAsCards___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_RecipesAsCards__);


//
//
//
//
//
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
  transition: 'page',
  components: { RecipeAsDetail: __WEBPACK_IMPORTED_MODULE_3__components_RecipeAsDetail___default.a, RecipesAsCards: __WEBPACK_IMPORTED_MODULE_4__components_RecipesAsCards___default.a },
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
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(true);
// imports


// module
exports.push([module.i, ".icons[data-v-6b1c7ed8]{width:40px}", "", {"version":3,"sources":["/Applications/MAMP/htdocs/contenta_vue/components/RecipeAsDetail.vue"],"names":[],"mappings":"AACA,wBACE,UAAY,CACb","file":"RecipeAsDetail.vue","sourcesContent":["\n.icons[data-v-6b1c7ed8] {\n  width: 40px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/difficulty.67f1bc4.svg";

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/serves.e88d7ff.svg";

/***/ }),
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(259)
}
var Component = __webpack_require__(17)(
  /* script */
  __webpack_require__(220),
  /* template */
  __webpack_require__(250),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6b1c7ed8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
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
  }, [_c('section', [_c('RecipesAsCards', {
    attrs: {
      "recipes": _vm.recipesByCategory
    }
  })], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "hero is-primary"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title is-1"
  }, [_vm._v(" " + _vm._s(_vm.recipe.title) + " ")])])])]), _c('div', {
    staticClass: "container"
  }, [_c('section', [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.recipe.image.name),
      expression: "recipe.image.name"
    }]
  })]), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column has-text-centered"
  }, [_vm._m(0), _vm._v("\n              Preparation Time : " + _vm._s(_vm.recipe.preparationTime) + "\n            ")]), _c('div', {
    staticClass: "column has-text-centered"
  }, [_vm._m(1), _vm._v("\n              Cooking time : " + _vm._s(_vm.recipe.totalTime) + "\n            ")])]), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column has-text-centered"
  }, [_vm._m(2), _vm._v("\n              Serves : " + _vm._s(_vm.recipe.numberOfServices) + "\n            ")]), _c('div', {
    staticClass: "column has-text-centered"
  }, [_vm._m(3), _vm._v("\n              Difficulty : " + _vm._s(_vm.recipe.Difficulty) + "\n            ")])])])])]), _c('section', [_c('h2', {
    staticClass: "title is-2"
  }, [_vm._v(" What you'll need and how to make this dish")]), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div'), _c('h2', {
    staticClass: "title is-2"
  }, [_vm._v(" Ingredients ")]), _c('ul', {
    staticClass: "ingredients"
  }, _vm._l((_vm.recipe.ingredients), function(ingredient, index) {
    return _c('li', {
      key: index
    }, [_vm._v("\n              " + _vm._s(ingredient) + "\n            ")])
  }))]), _c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "title is-2"
  }, [_vm._v(" Method ")]), _c('p', [_vm._v("\n          " + _vm._s(_vm.recipe.instructions) + "\n          ")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(214)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(214)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(232)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": __webpack_require__(231)
    }
  })])
}]}

/***/ }),
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(230);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("3ca5d05a", content, true);

/***/ })
]));