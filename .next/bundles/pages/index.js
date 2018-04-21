module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypesExact = __webpack_require__("./node_modules/prop-types-exact/build/index.js");

var _propTypesExact2 = _interopRequireDefault(_propTypesExact);

var _router = __webpack_require__("./node_modules/next/dist/lib/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this, props].concat(rest)));

    _this.linkClicked = _this.linkClicked.bind(_this);
    _this.formatUrls(props);
    return _this;
  }

  (0, _createClass3.default)(Link, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: 'linkClicked',
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;


      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;

      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;

      e.preventDefault();

      //  avoid scroll for urls with anchor refs
      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      }

      // replace state instead of push if prop is present
      var replace = this.props.replace;

      var changeMethod = replace ? 'replace' : 'push';

      // straight up redirect
      _router2.default[changeMethod](href, as, { shallow: shallow }).then(function (success) {
        if (!success) return;
        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: 'prefetch',
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return;

      // Prefetch the JSON page if asked (only in the client)
      var pathname = window.location.pathname;

      var href = (0, _url.resolve)(pathname, this.href);
      _router2.default.prefetch(href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify2.default)(this.props.href) !== (0, _stringify2.default)(prevProps.href)) {
        this.prefetch();
      }
    }

    // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: 'formatUrls',
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof3.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof3.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react2.default.createElement(
          'a',
          null,
          children
        );
      }

      // This will return the first child, if multiple are provided it will throw an error
      var child = _react.Children.only(children);
      var props = {
        onClick: this.linkClicked

        // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user
      };if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react2.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = (0, _propTypesExact2.default)({
  href: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  prefetch: _propTypes2.default.bool,
  replace: _propTypes2.default.bool,
  shallow: _propTypes2.default.bool,
  passHref: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, function (props, propName) {
    var value = props[propName];

    if (typeof value === 'string') {
      warnLink('Warning: You\'re using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>');
    }

    return null;
  }]).isRequired
});
exports.default = Link;


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);

  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-materialize/lib/Autocomplete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__("./node_modules/react-materialize/lib/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _idgen = __webpack_require__("./node_modules/react-materialize/lib/idgen.js");

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }] */


var Autocomplete = function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.state = {
      value: props.value || ''
    };

    _this.renderIcon = _this.renderIcon.bind(_this);
    _this.renderDropdown = _this.renderDropdown.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(Autocomplete, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (value !== undefined) {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon, iconClassName) {
      return _react2.default.createElement(
        _Icon2.default,
        { className: iconClassName },
        icon
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(data, minLength, limit) {
      var _this2 = this;

      var value = this.state.value;


      if (minLength && minLength > value.length || !value) {
        return null;
      }

      var matches = Object.keys(data).filter(function (key) {
        var index = key.toUpperCase().indexOf(value.toUpperCase());
        return index !== -1 && value.length < key.length;
      });
      if (limit) matches = matches.slice(0, limit);
      if (matches.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'ul',
        { className: 'autocomplete-content dropdown-content' },
        matches.map(function (key, idx) {
          var index = key.toUpperCase().indexOf(value.toUpperCase());
          return _react2.default.createElement(
            'li',
            {
              key: key + '_' + idx,
              onClick: _this2._onAutocomplete.bind(_this2, key)
            },
            data[key] ? _react2.default.createElement('img', { src: data[key], className: 'right circle' }) : null,
            _react2.default.createElement(
              'span',
              null,
              index !== 0 ? key.substring(0, index) : '',
              _react2.default.createElement(
                'span',
                { className: 'highlight' },
                value
              ),
              key.length !== index + value.length ? key.substring(index + value.length) : ''
            )
          );
        })
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange(evt) {
      var onChange = this.props.onChange;

      var value = evt.target.value;
      if (onChange) {
        onChange(evt, value);
      }

      this.setState({ value: value });
    }
  }, {
    key: '_onAutocomplete',
    value: function _onAutocomplete(value, evt) {
      var _props = this.props,
          onChange = _props.onChange,
          onAutocomplete = _props.onAutocomplete;

      if (onAutocomplete) {
        onAutocomplete(value);
      }
      if (onChange) {
        onChange(evt, value);
      }

      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          title = _props2.title,
          data = _props2.data,
          icon = _props2.icon,
          iconClassName = _props2.iconClassName,
          s = _props2.s,
          m = _props2.m,
          l = _props2.l,
          offset = _props2.offset,
          minLength = _props2.minLength,
          placeholder = _props2.placeholder,
          limit = _props2.limit,
          value = _props2.value,
          onChange = _props2.onChange,
          onAutocomplete = _props2.onAutocomplete,
          props = _objectWithoutProperties(_props2, ['id', 'className', 'title', 'data', 'icon', 'iconClassName', 's', 'm', 'l', 'offset', 'minLength', 'placeholder', 'limit', 'value', 'onChange', 'onAutocomplete']);

      var _id = id || 'autocomplete-' + (0, _idgen2.default)();
      var sizes = { s: s, m: m, l: l };
      var classes = {
        col: true
      };
      _constants2.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });

      return _react2.default.createElement(
        'div',
        _extends({
          offset: offset,
          className: (0, _classnames2.default)('input-field', className, classes)
        }, props),
        icon && this.renderIcon(icon, iconClassName),
        _react2.default.createElement('input', {
          placeholder: placeholder,
          className: 'autocomplete',
          id: _id,
          onChange: this._onChange,
          type: 'text',
          value: this.state.value
        }),
        _react2.default.createElement(
          'label',
          { htmlFor: _id },
          title
        ),
        this.renderDropdown(data, minLength, limit)
      );
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
  /**
   * Uniquely identifies <input> generated by this component
   * Used by corresponding <label> for attribute
   */
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  /*
   * The title of the autocomplete component.
   */
  title: _propTypes2.default.string,
  /*
   * An object with the keys of the items to match in autocomplete
   * The values are either null or a location to an image
   */
  data: _propTypes2.default.object.isRequired,
  /*
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  s: _propTypes2.default.number,
  m: _propTypes2.default.number,
  l: _propTypes2.default.number,
  offset: _propTypes2.default.string,
  /*
   * Determine input length before dropdown
   */
  minLength: _propTypes2.default.number,
  /**
   * The max amount of results that can be shown at once. Default: Infinity
   * */
  limit: _propTypes2.default.number,
  /**
   * Placeholder for input element
   * */
  placeholder: _propTypes2.default.string,
  /**
   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
   * Function signature: (event, value) => ()
   */
  onChange: _propTypes2.default.func,
  /**
   * Called when auto-completed item is selected.
   * Function signature: (value) => ()
   */
  onAutocomplete: _propTypes2.default.func,
  /**
   * The value of the input
   */
  value: _propTypes2.default.string
};

exports.default = Autocomplete;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Badge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = function Badge(_ref) {
  var className = _ref.className,
      newIcon = _ref.newIcon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'newIcon', 'children']);

  var classes = {
    badge: true,
    new: newIcon
  };

  return _react2.default.createElement(
    'span',
    _extends({}, props, { className: (0, _classnames2.default)(classes, className) }),
    children
  );
};

Badge.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Add the <b>new</b> class name
   */
  newIcon: _propTypes2.default.bool
};

exports.default = Badge;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Breadcrumb.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = __webpack_require__("./node_modules/react-materialize/lib/Col.js");

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function Breadcrumb(_ref) {
  var cols = _ref.cols,
      children = _ref.children;
  return _react2.default.createElement(
    'nav',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'nav-wrapper' },
      _react2.default.createElement(
        _Col2.default,
        { s: cols },
        _react2.default.Children.map(children, function (item) {
          return _react2.default.cloneElement(item, { className: 'breadcrumb' });
        })
      )
    )
  );
};

Breadcrumb.propTypes = {
  children: _propTypes2.default.node,
  cols: _propTypes2.default.number
};

Breadcrumb.defaultProps = {
  cols: 12
};

exports.default = Breadcrumb;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__("./node_modules/react-materialize/lib/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _idgen = __webpack_require__("./node_modules/react-materialize/lib/idgen.js");

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.renderIcon = _this.renderIcon.bind(_this);
    _this.renderFab = _this.renderFab.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          node = _props.node,
          fab = _props.fab,
          fabClickOnly = _props.fabClickOnly,
          modal = _props.modal,
          flat = _props.flat,
          floating = _props.floating,
          large = _props.large,
          disabled = _props.disabled,
          waves = _props.waves,
          other = _objectWithoutProperties(_props, ['className', 'node', 'fab', 'fabClickOnly', 'modal', 'flat', 'floating', 'large', 'disabled', 'waves']);

      var toggle = fabClickOnly ? 'click-to-toggle' : '';
      var C = node;
      var classes = {
        btn: true,
        disabled: disabled,
        'waves-effect': waves
      };

      if (_constants2.default.WAVES.indexOf(waves) > -1) {
        classes['waves-' + waves] = true;
      }

      var styles = { flat: flat, floating: floating, large: large };
      _constants2.default.STYLES.forEach(function (style) {
        classes['btn-' + style] = styles[style];
      });

      if (modal) {
        classes['modal-action'] = true;
        classes['modal-' + modal] = true;
      }
      if (fab) {
        return this.renderFab((0, _classnames2.default)(classes, className), fab, toggle);
      } else {
        return _react2.default.createElement(
          C,
          _extends({}, other, {
            disabled: !!disabled,
            onClick: this.props.onClick,
            className: (0, _classnames2.default)(classes, className)
          }),
          this.renderIcon(),
          this.props.children
        );
      }
    }
  }, {
    key: 'renderFab',
    value: function renderFab(className, orientation, clickOnly) {
      var classes = (0, _classnames2.default)(orientation, clickOnly);
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('fixed-action-btn', classes) },
        _react2.default.createElement(
          'a',
          { className: className },
          this.renderIcon()
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.createElement(
              'li',
              { key: (0, _idgen2.default)() },
              child
            );
          })
        )
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var icon = this.props.icon;

      if (!icon) return;

      return _react2.default.createElement(
        _Icon2.default,
        null,
        icon
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  /**
   * Enable other styles
   */
  flat: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  floating: _propTypes2.default.bool,
  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   * @default vertical. This will disable any onClick function from being called on the main button.
   */
  fab: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  /**
   * The icon to display, if specified it will create a button with the material icon.
   */
  icon: _propTypes2.default.string,
  modal: _propTypes2.default.oneOf(['close', 'confirm']),
  node: _propTypes2.default.node,
  /**
   * Will be disabled when fab is set.
   */
  onClick: _propTypes2.default.func,
  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: _propTypes2.default.string,
  waves: _propTypes2.default.oneOf(['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal']),
  /**
   * FAB Click-Only
   * Turns a FAB from a hover-toggle to a click-toggle
   */
  fabClickOnly: _propTypes2.default.bool
};

Button.defaultProps = {
  node: 'button'
};

exports.default = Button;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Card.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderTitle = function renderTitle(title, reveal) {
  return _react2.default.createElement(
    'span',
    {
      className: (0, _classnames2.default)('card-title', 'grey-text', 'text-darken-4', {
        activator: reveal
      })
    },
    title,
    reveal && _react2.default.createElement(
      _Icon2.default,
      { right: true },
      'more_vert'
    )
  );
};

var renderReveal = function renderReveal(title, reveal) {
  return _react2.default.createElement(
    'div',
    { className: 'card-reveal' },
    _react2.default.createElement(
      'span',
      { className: 'card-title grey-text text-darken-4' },
      title,
      _react2.default.createElement(
        _Icon2.default,
        { right: true },
        'close'
      )
    ),
    reveal
  );
};

var renderAction = function renderAction(actions) {
  return _react2.default.createElement(
    'div',
    { className: 'card-action' },
    actions
  );
};

var Card = function Card(_ref) {
  var title = _ref.title,
      header = _ref.header,
      className = _ref.className,
      textClassName = _ref.textClassName,
      actions = _ref.actions,
      reveal = _ref.reveal,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['title', 'header', 'className', 'textClassName', 'actions', 'reveal', 'children']);

  var classes = { card: true };

  return _react2.default.createElement(
    'div',
    _extends({}, props, { className: (0, _classnames2.default)(className, classes) }),
    header,
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('card-content', textClassName) },
      title && renderTitle(title, reveal),
      _react2.default.createElement(
        'div',
        null,
        children
      )
    ),
    renderReveal(title, reveal),
    actions && renderAction(actions)
  );
};

Card.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  title: _propTypes2.default.string,
  textClassName: _propTypes2.default.string,
  reveal: _propTypes2.default.element,
  header: _propTypes2.default.element,
  // The buttons to be displayed at the action area
  actions: _propTypes2.default.arrayOf(_propTypes2.default.element)
};

exports.default = Card;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CardPanel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardPanel = function CardPanel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'children']);

  var classes = {
    'card-panel': true
  };

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _classnames2.default)(classes, className) }, props),
    children
  );
};

CardPanel.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = CardPanel;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CardTitle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__("./node_modules/react-materialize/lib/constants.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardTitle = function (_Component) {
  _inherits(CardTitle, _Component);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          reveal = _props.reveal,
          waves = _props.waves,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['image', 'reveal', 'waves', 'children']);

      var classes = {
        'card-image': true
      };
      if (waves) {
        classes['waves-effect'] = true;
        classes['waves-' + waves] = true;
        classes['waves-block'] = true;
      }
      var imgClasses = { activator: reveal };
      var titleClasses = {
        'card-title': true
      };
      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(classes) }, props),
        _react2.default.createElement('img', { className: (0, _classnames2.default)(imgClasses), src: image }),
        _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)(titleClasses) },
          children
        )
      );
    }
  }]);

  return CardTitle;
}(_react.Component);

CardTitle.propTypes = {
  children: _propTypes2.default.node,
  // Whether the image serves as activator for the reveal
  reveal: _propTypes2.default.bool,
  // the waves effect
  waves: _propTypes2.default.oneOf(_constants2.default.WAVES),
  // The path to the image
  image: _propTypes2.default.string.isRequired
};

exports.default = CardTitle;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Carousel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.renderFixedItem = _this.renderFixedItem.bind(_this);
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$options = this.props.options,
          options = _props$options === undefined ? {} : _props$options;


      if (typeof $ !== 'undefined') {
        $(this._carousel).carousel(options);
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems(child, idx) {
      if (typeof child === 'string') {
        return _react2.default.createElement(
          'a',
          { className: 'carousel-item' },
          _react2.default.createElement('img', { src: child })
        );
      }
      return _react2.default.cloneElement(child, {
        className: (0, _classnames2.default)(child.props.className, 'carousel-item')
      });
    }
  }, {
    key: 'renderFixedItem',
    value: function renderFixedItem() {
      var fixedItem = this.props.fixedItem;

      return fixedItem && _react2.default.createElement(
        'div',
        { className: 'carousel-fixed-item center' },
        fixedItem
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          carouselId = _props.carouselId,
          images = _props.images,
          _props$options2 = _props.options,
          options = _props$options2 === undefined ? {} : _props$options2;

      var elemsToRender = children || images || [];

      return elemsToRender && _react2.default.createElement(
        'div',
        {
          id: carouselId,
          ref: function ref(el) {
            _this2._carousel = el;
          },
          className: (0, _classnames2.default)('carousel', { 'carousel-slider': options.fullWidth }, className)
        },
        this.renderFixedItem(),
        _react2.default.Children.map(elemsToRender, this.renderItems)
      );
    }
  }]);

  return Carousel;
}(_react2.default.Component);

Carousel.propTypes = {
  /*
  * Children to render as slider elements
  */
  children: _propTypes2.default.any,
  /*
  * Array of image url's
  */
  images: _propTypes2.default.arrayOf(_propTypes2.default.string),
  /*
  * Fixed element on slider
  */
  fixedItem: _propTypes2.default.node,
  /*
  * Additional classNames for carousel wrapper
  */
  className: _propTypes2.default.string,
  /*
  * Carousel ID for jQuery manipulating
  */
  carouselId: _propTypes2.default.string,
  /*
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
  */
  options: _propTypes2.default.shape({
    /*
    * Transition duration in milliseconds. (Default: 200)
    */
    duration: _propTypes2.default.number,
    /*
    * Perspective zoom. If 0, all items are the same size. (Default: -100)
    */
    dist: _propTypes2.default.number,
    /*
    * Set the spacing of the center item. (Default: 0)
    */
    shift: _propTypes2.default.number,
    /*
    * Set the padding between non center items. (Default: 0)
    */
    padding: _propTypes2.default.number,
    /*
    * Make the carousel a full width slider like the second example. (Default: false)
    */
    fullWidth: _propTypes2.default.bool,
    /*
    * Set to true to show indicators. (Default: false)
    */
    indicators: _propTypes2.default.bool,
    /*
     * Don't wrap around and cycle through items. (Default: false)
    */
    noWrap: _propTypes2.default.bool
  })
};

exports.default = Carousel;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Chip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chip = function Chip(_ref) {
  var children = _ref.children,
      close = _ref.close;

  return _react2.default.createElement(
    'div',
    { className: 'chip' },
    children,
    close ? _react2.default.createElement(
      'i',
      { className: 'close material-icons' },
      'close'
    ) : null
  );
};

Chip.propTypes = {
  children: _propTypes2.default.node,
  /**
   * Shows a close icon
   */
  close: _propTypes2.default.bool
};

Chip.defaultProps = {
  close: false
};

exports.default = Chip;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Col.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__("./node_modules/react-materialize/lib/constants.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Col = function Col(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      C = _ref$node === undefined ? 'div' : _ref$node,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      offset = _ref.offset,
      other = _objectWithoutProperties(_ref, ['children', 'className', 'node', 's', 'm', 'l', 'offset']);

  var sizes = { s: s, m: m, l: l };
  var classes = { col: true };
  _constants2.default.SIZES.forEach(function (size) {
    classes[size + sizes[size]] = sizes[size];
  });

  if (offset) {
    offset.split(' ').forEach(function (off) {
      classes['offset-' + off] = true;
    });
  }

  return _react2.default.createElement(
    C,
    _extends({}, other, { className: (0, _classnames2.default)(classes, className) }),
    children
  );
};

Col.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  /**
   * Columns for large size screens
   */
  l: _propTypes2.default.number,
  /**
   * Columns for middle size screens
   */
  m: _propTypes2.default.number,
  /**
   * The node to be used for the column
   * @default div
   */
  node: _propTypes2.default.node,
  /**
   * To offset, simply add s2 to the class where s signifies the screen
   * class-prefix (s = small, m = medium, l = large) and the number after
   * is the number of columns you want to offset by.
   */
  offset: _propTypes2.default.string,
  /**
   * Columns for small size screens
   */
  s: _propTypes2.default.number
};

exports.default = Col;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Collapsible.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapsible = function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible(props) {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));

    _this.state = {
      activeKey: props.defaultActiveKey
    };

    _this.renderItem = _this.renderItem.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  _createClass(Collapsible, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this._collapsible).collapsible();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          accordion = _props.accordion,
          popout = _props.popout,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['accordion', 'popout', 'className', 'children']);

      delete props.defaultActiveKey;

      var classes = {
        collapsible: true,
        popout: popout
      };
      var collapsible = accordion ? 'accordion' : 'expandable';

      return _react2.default.createElement(
        'ul',
        _extends({
          ref: function ref(node) {
            _this2._collapsible = node;
          },
          className: (0, _classnames2.default)(className, classes),
          'data-collapsible': collapsible
        }, props),
        _react2.default.Children.map(children, this.renderItem)
      );
    }
  }, {
    key: 'renderItem',
    value: function renderItem(child, key) {
      if (!child) return null;
      var props = {
        onSelect: this.handleSelect
      };

      // Extend with props if child is a react component
      if (typeof child.type === 'function') {
        Object.assign(props, {
          expanded: this.state.activeKey === key || child.props.expanded,
          eventKey: key
        });
      }

      return _react2.default.cloneElement(child, props);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(key) {
      var onSelect = this.props.onSelect;


      if (onSelect) {
        onSelect(key);
      }

      if (this.state.activeKey === key) {
        key = null;
      }

      if (this.props.accordion) {
        this.setState({ activeKey: key });
      }
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default false
   */
  accordion: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
   * Enable popout style
   */
  popout: _propTypes2.default.bool,
  /**
   * The default CollapsibleItem that should be expanded. This value should match the specified
   * item's eventKey value. Ignored if accordion is false.
   */
  defaultActiveKey: _propTypes2.default.any,
  onSelect: _propTypes2.default.func
};

Collapsible.defaultProps = {
  accordion: false
};

exports.default = Collapsible;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CollapsibleItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CollapsibleItem = function CollapsibleItem(_ref) {
  var className = _ref.className,
      eventKey = _ref.eventKey,
      expanded = _ref.expanded,
      header = _ref.header,
      children = _ref.children,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      Node = _ref.node,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ['className', 'eventKey', 'expanded', 'header', 'children', 'icon', 'iconClassName', 'node', 'onSelect']);

  return _react2.default.createElement(
    'li',
    _extends({ className: (0, _classnames2.default)(className, { active: expanded }) }, props),
    _react2.default.createElement(
      Node,
      {
        className: (0, _classnames2.default)('collapsible-header', { active: expanded }),
        onClick: function onClick() {
          return onSelect(eventKey);
        }
      },
      icon && _react2.default.createElement(
        _Icon2.default,
        { className: iconClassName },
        icon
      ),
      header
    ),
    _react2.default.createElement(
      'div',
      { className: 'collapsible-body' },
      children
    )
  );
};

CollapsibleItem.propTypes = {
  header: _propTypes2.default.any.isRequired,
  icon: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onSelect: _propTypes2.default.func,
  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: _propTypes2.default.bool,
  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: _propTypes2.default.any,
  className: _propTypes2.default.string,
  /**
   * The node type of the header
   * @default a
   */
  node: _propTypes2.default.node,
  /**
   * The scroll behavior for scrollIntoView
   */
  scroll: _propTypes2.default.oneOf(['auto', 'instant', 'smooth'])
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};

exports.default = CollapsibleItem;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_Component) {
  _inherits(Collection, _Component);

  function Collection(props) {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props));

    _this.renderHeader = _this.renderHeader.bind(_this);
    return _this;
  }

  _createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          header = _props.header;


      var classes = {
        collection: true,
        'with-header': !!header
      };
      var C = 'ul';
      _react2.default.Children.forEach(children, function (child) {
        if (child.props.href) {
          C = 'div';
        }
      });
      return _react2.default.createElement(
        C,
        { className: (0, _classnames2.default)(classes) },
        header ? this.renderHeader() : null,
        children
      );
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var header = void 0;
      if (this.props.header) {
        if (_react2.default.isValidElement(this.props.header)) {
          header = this.props.header;
        } else {
          header = _react2.default.createElement(
            'h4',
            null,
            this.props.header
          );
        }
        return _react2.default.createElement(
          'li',
          { className: 'collection-header' },
          header
        );
      }
    }
  }]);

  return Collection;
}(_react.Component);

Collection.propTypes = {
  children: _propTypes2.default.node,
  header: _propTypes2.default.node
};

exports.default = Collection;

/***/ }),

/***/ "./node_modules/react-materialize/lib/CollectionItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionItem = function (_Component) {
  _inherits(CollectionItem, _Component);

  function CollectionItem() {
    _classCallCheck(this, CollectionItem);

    return _possibleConstructorReturn(this, (CollectionItem.__proto__ || Object.getPrototypeOf(CollectionItem)).apply(this, arguments));
  }

  _createClass(CollectionItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          other = _objectWithoutProperties(_props, ['active', 'children', 'className']);

      var classes = {
        'collection-item': true,
        active: active
      };

      var C = this.props.href ? 'a' : 'li';

      return _react2.default.createElement(
        C,
        _extends({}, other, { className: (0, _classnames2.default)(className, classes) }),
        children
      );
    }
  }]);

  return CollectionItem;
}(_react.Component);

CollectionItem.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  href: _propTypes2.default.string
};

exports.default = CollectionItem;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Container.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    props.children
  );
};

Container.propTypes = {
  children: _propTypes2.default.node
};

exports.default = Container;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Divider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider() {
  return _react2.default.createElement("div", { className: "divider" });
};
exports.default = Divider;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Dropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _idgen = __webpack_require__("./node_modules/react-materialize/lib/idgen.js");

var _idgen2 = _interopRequireDefault(_idgen);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = {
  'dropdown-content': true
};

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.idx = 'dropdown_' + (0, _idgen2.default)();
    _this.renderTrigger = _this.renderTrigger.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = this.props.options || {};
      $(this._trigger).dropdown(options);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(this._trigger).off();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['children', 'className']);

      delete props.trigger;
      delete props.options;

      return _react2.default.createElement(
        'span',
        null,
        this.renderTrigger(),
        _react2.default.createElement(
          'ul',
          _extends({}, props, { className: (0, _classnames2.default)(classes, className), id: this.idx }),
          children
        )
      );
    }
  }, {
    key: 'renderTrigger',
    value: function renderTrigger() {
      var _this2 = this;

      var trigger = this.props.trigger;


      return _react2.default.cloneElement(trigger, {
        ref: function ref(t) {
          return _this2._trigger = '[data-activates=' + _this2.idx + ']';
        },
        className: (0, _classnames2.default)(trigger.props.className, 'dropdown-button'),
        'data-activates': this.idx
      });
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  /**
   * The node to trigger the dropdown
   */
  trigger: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,

  /**
   * Options hash for the dropdown
   * more info: http://materializecss.com/dropdown.html#options
   */
  options: _propTypes2.default.shape({
    inDuration: _propTypes2.default.number,
    outDuration: _propTypes2.default.number,
    constrainWidth: _propTypes2.default.bool,
    hover: _propTypes2.default.bool,
    gutter: _propTypes2.default.number,
    belowOrigin: _propTypes2.default.bool,
    alignment: _propTypes2.default.oneOf(['left', 'right'])
  })
};

exports.default = Dropdown;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Row = __webpack_require__("./node_modules/react-materialize/lib/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__("./node_modules/react-materialize/lib/Col.js");

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          copyrights = _props.copyrights,
          links = _props.links,
          moreLinks = _props.moreLinks,
          props = _objectWithoutProperties(_props, ['children', 'className', 'copyrights', 'links', 'moreLinks']);

      var classes = {
        'page-footer': true
      };

      return _react2.default.createElement(
        'footer',
        _extends({ className: (0, _classnames2.default)(classes, className) }, props),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              _Col2.default,
              { l: 6, s: 12 },
              children
            ),
            _react2.default.createElement(
              _Col2.default,
              { l: 4, s: 12, offset: 'l2' },
              links
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-copyright' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            copyrights,
            moreLinks
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

Footer.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  copyrights: _propTypes2.default.string,
  links: _propTypes2.default.node,
  moreLinks: _propTypes2.default.node
};

exports.default = Footer;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Icon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__("./node_modules/react-materialize/lib/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  var classes = {
    'material-icons': true
  };
  _constants2.default.PLACEMENTS.forEach(function (p) {
    classes[p] = props[p];
  });

  _constants2.default.ICON_SIZES.forEach(function (s) {
    classes[s] = props[s];
  });

  return _react2.default.createElement(
    'i',
    { className: (0, _classnames2.default)(classes, props.className) },
    props.children
  );
};

Icon.propTypes = {
  /*
   * Classname passed to i tag
   */
  className: _propTypes2.default.string,
  /*
   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
   */
  children: _propTypes2.default.string,
  /*
   * Placement for icon if used beside a text ↓
   */
  left: _propTypes2.default.bool,
  center: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  /*
   * Sizes for icons ↓
   */
  tiny: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  medium: _propTypes2.default.bool,
  large: _propTypes2.default.bool
};

exports.default = Icon;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Input.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _idgen = __webpack_require__("./node_modules/react-materialize/lib/idgen.js");

var _idgen2 = _interopRequireDefault(_idgen);

var _constants = __webpack_require__("./node_modules/react-materialize/lib/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      value: props.value || props.defaultValue,
      checked: !!props.checked
    };

    _this._onChange = _this._onChange.bind(_this);
    _this.getMultipleValues = _this.getMultipleValues.bind(_this);
    _this.isSelect = _this.isSelect.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).material_select();
        $(this.selectInput).on('change', this._onChange);
      }
      if (this.isDatePicker) {
        $(this.dateInput).pickadate(this.props.options);
        $(this.dateInput).on('change', this._onChange);
      }
      if (this.isTimePicker) {
        $(this.timeInput).pickatime(this.props.options);
        $(this.timeInput).on('change', this._onChange);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isMaterialSelect() && !this.props.multiple) {
        $(this.selectInput).material_select();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.isMaterialSelect()) {
        this.setState({
          value: nextProps.defaultValue
        }, function () {
          return $(_this2.selectInput).material_select();
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).off('change', this._onChange);
      }
    }
  }, {
    key: 'getMultipleValues',
    value: function getMultipleValues(_ref) {
      var options = _ref.options;

      if (!options) {
        return;
      }

      return Array.from(options).filter(function (opt) {
        return opt.selected;
      }).map(function (opt) {
        return opt.value;
      });
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
      var onChange = this.props.onChange;

      var types = {
        checkbox: e.target.checked,
        radio: e.target.checked,
        'select-multiple': this.getMultipleValues(e.target),
        default: e.target.value
      };
      var value = types.hasOwnProperty(e.target.type) ? types[e.target.type] : types['default'];
      if (onChange) {
        onChange(e, value);
      }

      this.setState({ value: value, checked: e.target.checked });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          browserDefault = _props.browserDefault,
          children = _props.children,
          className = _props.className,
          labelClassName = _props.labelClassName,
          defaultValue = _props.defaultValue,
          error = _props.error,
          label = _props.label,
          multiple = _props.multiple,
          placeholder = _props.placeholder,
          success = _props.success,
          s = _props.s,
          m = _props.m,
          l = _props.l,
          type = _props.type,
          validate = _props.validate,
          onLabel = _props.onLabel,
          offLabel = _props.offLabel,
          inline = _props.inline,
          other = _objectWithoutProperties(_props, ['browserDefault', 'children', 'className', 'labelClassName', 'defaultValue', 'error', 'label', 'multiple', 'placeholder', 'success', 's', 'm', 'l', 'type', 'validate', 'onLabel', 'offLabel', 'inline']);

      var sizes = { s: s, m: m, l: l };
      this._id = this._id || this.props.id || 'input_' + (0, _idgen2.default)();
      var classes = {
        col: true,
        inline: type !== 'checkbox' && type !== 'radio' && inline,
        'input-field': type !== 'checkbox' && type !== 'radio'
      };
      _constants2.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });
      var inputClasses = {
        validate: validate,
        invalid: error,
        valid: success,
        'browser-default': browserDefault && this.isSelect()
      };
      var C = void 0,
          inputType = void 0;
      switch (type) {
        case 'textarea':
          C = 'textarea';
          inputClasses['materialize-textarea'] = true;
          break;
        case 'switch':
          C = 'input';
          inputType = 'checkbox';
          break;
        default:
          C = 'input';
          inputType = type || 'text';
      }
      var labelClasses = {
        active: this.state.value || this.isSelect() || placeholder
      };

      var htmlLabel = label || inputType === 'radio' ? _react2.default.createElement(
        'label',
        {
          className: (0, _classnames2.default)(labelClasses, labelClassName),
          'data-success': success,
          'data-error': error,
          htmlFor: this._id
        },
        label
      ) : null;

      if (this.isSelect()) {
        var options = placeholder && !defaultValue ? [_react2.default.createElement(
          'option',
          { disabled: true, key: (0, _idgen2.default)() },
          placeholder
        )] : [];
        options = options.concat(_react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { key: child.props.value });
        }));

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          this.renderIcon(),
          htmlLabel,
          _react2.default.createElement(
            'select',
            _extends({}, other, {
              multiple: multiple,
              id: this._id,
              className: (0, _classnames2.default)(className, inputClasses),
              ref: function ref(_ref2) {
                return _this3.selectInput = _ref2;
              },
              defaultValue: defaultValue
            }),
            options
          )
        );
      } else if (type === 'date') {
        this.isDatePicker = true;
        delete other.options;

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          this.renderIcon(),
          _react2.default.createElement(C, _extends({}, other, {
            className: (0, _classnames2.default)(className, inputClasses),
            defaultValue: defaultValue,
            id: this._id,
            ref: function ref(_ref3) {
              return _this3.dateInput = _ref3;
            },
            placeholder: placeholder,
            type: 'date'
          })),
          htmlLabel
        );
      } else if (type === 'time') {
        this.isTimePicker = true;
        delete other.options;

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          this.renderIcon(),
          _react2.default.createElement(C, _extends({}, other, {
            className: (0, _classnames2.default)(className, inputClasses),
            defaultValue: defaultValue,
            id: this._id,
            ref: function ref(_ref4) {
              return _this3.timeInput = _ref4;
            },
            placeholder: placeholder
          })),
          htmlLabel
        );
      } else if (type === 'switch') {
        return _react2.default.createElement(
          'div',
          { className: 'switch' },
          _react2.default.createElement(
            'label',
            null,
            offLabel || 'Off',
            _react2.default.createElement('input', _extends({}, other, { onChange: this._onChange, type: 'checkbox' })),
            _react2.default.createElement('span', { className: 'lever' }),
            onLabel || 'On'
          )
        );
      } else {
        var _defaultValue = inputType !== 'checkbox' && inputType !== 'radio' ? this.state.value : _defaultValue;

        if (inputType === 'checkbox' || inputType === 'radio') {
          return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(classes) },
            this.renderIcon(),
            _react2.default.createElement(C, _extends({}, other, {
              className: (0, _classnames2.default)(className, inputClasses),
              ref: function ref(_ref5) {
                return _this3.input = _ref5;
              },
              id: this._id,
              checked: this.state.checked,
              onChange: this._onChange,
              placeholder: placeholder,
              type: inputType
            })),
            htmlLabel
          );
        }

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          this.renderIcon(),
          _react2.default.createElement(C, _extends({}, other, {
            className: (0, _classnames2.default)(className, inputClasses),
            ref: function ref(_ref6) {
              return _this3.input = _ref6;
            },
            defaultValue: _defaultValue,
            id: this._id,
            onChange: this._onChange,
            placeholder: placeholder,
            type: inputType
          })),
          htmlLabel
        );
      }
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var _props2 = this.props,
          icon = _props2.icon,
          children = _props2.children;

      if (icon) {
        return _react2.default.createElement(
          _Icon2.default,
          { className: 'prefix' },
          icon
        );
      } else {
        var _icon = null;
        if (_react2.default.Children.count(children) === 1 && !Array.isArray(children)) {
          _icon = _react2.default.Children.only(children);
        }
        return _icon === null ? null : _react2.default.cloneElement(_icon, { className: 'prefix' });
      }
    }
  }, {
    key: 'isSelect',
    value: function isSelect() {
      return this.props.type === 'select';
    }
  }, {
    key: 'isMaterialSelect',
    value: function isMaterialSelect() {
      return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  s: _propTypes2.default.number,
  m: _propTypes2.default.number,
  l: _propTypes2.default.number,
  inline: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  labelClassName: _propTypes2.default.string,
  label: _propTypes2.default.node,
  error: _propTypes2.default.string,
  success: _propTypes2.default.string,
  /**
   * Input field type, e.g. select, checkbox, radio, text, tel, email
   * @default 'text'
   */
  type: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  placeholder: _propTypes2.default.string,
  id: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  name: _propTypes2.default.string,
  validate: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool,
  browserDefault: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  onLabel: _propTypes2.default.string,
  offLabel: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.any,
  /**
   * Value used to set a initial value
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
};

Input.defaultProps = { type: 'text', checked: false };

exports.default = Input;

/***/ }),

/***/ "./node_modules/react-materialize/lib/MediaBox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaBox = function (_Component) {
  _inherits(MediaBox, _Component);

  function MediaBox() {
    _classCallCheck(this, MediaBox);

    return _possibleConstructorReturn(this, (MediaBox.__proto__ || Object.getPrototypeOf(MediaBox)).apply(this, arguments));
  }

  _createClass(MediaBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.materialboxed').materialbox();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          className = _props.className,
          caption = _props.caption,
          props = _objectWithoutProperties(_props, ['src', 'className', 'caption']);

      return _react2.default.createElement('img', _extends({
        className: (0, _classnames2.default)('materialboxed', className),
        'data-caption': caption,
        src: src
      }, props));
    }
  }]);

  return MediaBox;
}(_react.Component);

MediaBox.propTypes = {
  className: _propTypes2.default.string,
  /**
   * The caption shown below the image when opened
   */
  caption: _propTypes2.default.string,
  /**
   * The path to the image
   */
  src: _propTypes2.default.string.isRequired
};

exports.default = MediaBox;

/***/ }),

/***/ "./node_modules/react-materialize/lib/MenuItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This should be used within any component that has a menu like interface
var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          breadcrumbItem = _props.breadcrumbItem,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['href', 'breadcrumbItem', 'children', 'className']);

      var classes = {
        breadcrumb: breadcrumbItem
      };
      return _react2.default.createElement(
        'a',
        _extends({ href: href }, props, { className: (0, _classnames2.default)(classes, className) }),
        children
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  // internal
  breadcrumbItem: _propTypes2.default.bool,
  /**
   * The link for the anchor
   */
  href: _propTypes2.default.string
};

exports.default = MenuItem;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _idgen = __webpack_require__("./node_modules/react-materialize/lib/idgen.js");

var _idgen2 = _interopRequireDefault(_idgen);

var _Button = __webpack_require__("./node_modules/react-materialize/lib/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.modalID = props.id || 'modal_' + (0, _idgen2.default)();
    _this.showModal = _this.showModal.bind(_this);
    _this.createRoot();
    return _this;
  }

  _createClass(Modal, [{
    key: 'createRoot',
    value: function createRoot() {
      this.modalRoot = document.createElement('div');
      document.body.appendChild(this.modalRoot);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          trigger = _props.trigger,
          modalOptions = _props.modalOptions,
          open = _props.open;


      if (!trigger) {
        $('#' + this.modalID).modal(modalOptions);
      }

      if (open) this.showModal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalRoot);
      this.modalRoot = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if the modal is not open yet
      if (!this.props.open && nextProps.open) {
        this.showModal();
        // open could be undefined
      } else if (nextProps.open === false) {
        this.hideModal();
      }
    }
  }, {
    key: 'renderModalPortal',
    value: function renderModalPortal() {
      var _props2 = this.props,
          actions = _props2.actions,
          bottomSheet = _props2.bottomSheet,
          children = _props2.children,
          fixedFooter = _props2.fixedFooter,
          header = _props2.header,
          other = _objectWithoutProperties(_props2, ['actions', 'bottomSheet', 'children', 'fixedFooter', 'header']);

      delete other.modalOptions;
      delete other.trigger;

      var classes = (0, _classnames2.default)({
        modal: true,
        'modal-fixed-footer': fixedFooter,
        'bottom-sheet': bottomSheet
      });

      return this.modalRoot ? _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        _extends({}, other, { className: classes, id: this.modalID }),
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h4',
            null,
            header
          ),
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.Children.toArray(actions)
        )
      ), this.modalRoot) : null;
    }
  }, {
    key: 'showModal',
    value: function showModal(e) {
      if (e) e.preventDefault();
      var _props$modalOptions = this.props.modalOptions,
          modalOptions = _props$modalOptions === undefined ? {} : _props$modalOptions;

      $('#' + this.modalID).modal(modalOptions);
      $('#' + this.modalID).modal('open');
    }
  }, {
    key: 'hideModal',
    value: function hideModal(e) {
      if (e) e.preventDefault();
      $('#' + this.modalID).modal('close');
    }
  }, {
    key: 'render',
    value: function render() {
      var trigger = this.props.trigger;


      return _react2.default.createElement(
        'div',
        null,
        trigger && _react2.default.cloneElement(trigger, { onClick: this.showModal }),
        this.renderModalPortal()
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * ModalOptions
   * Object with options for modal
   */
  modalOptions: _propTypes2.default.shape({
    /*
     * Modal can be dismissed by clicking outside of the modal
     */
    dismissible: _propTypes2.default.bool,
    /*
     * Opacity of modal background ( from 0 to 1 )
     */
    opacity: _propTypes2.default.number,
    /*
     * Transition in duration
     */
    inDuration: _propTypes2.default.number,
    /*
     * Transition out duration
     */
    outDuration: _propTypes2.default.number,
    /*
     * Starting top style attribute
     */
    startingTop: _propTypes2.default.string,
    /*
     * Ending top style attribute
     */
    endingTop: _propTypes2.default.string,
    /*
     * Callback for Modal open. Modal and trigger parameters available.
     */
    ready: _propTypes2.default.func,
    /*
     *  Callback for Modal close
     */
    complete: _propTypes2.default.func
  }),
  /**
   * Modal is opened on mount
   */
  open: _propTypes2.default.bool,
  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: _propTypes2.default.bool,
  /**
   * Component children
   */
  children: _propTypes2.default.node,
  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: _propTypes2.default.bool,
  /**
   * Text to shown in the header of the modal
   */
  header: _propTypes2.default.string,
  /**
   * The button to trigger the display of the modal
   */
  trigger: _propTypes2.default.node,
  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: _propTypes2.default.node,
  /**
   * The ID to trigger the modal opening/closing
   */
  id: _propTypes2.default.string
};

Modal.defaultProps = {
  modalOptions: {},
  fixedFooter: false,
  bottomSheet: false,
  actions: [_react2.default.createElement(
    _Button2.default,
    { waves: 'light', modal: 'close', flat: true },
    'Close'
  )]
};

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-materialize/lib/NavItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavItem = function NavItem(_ref) {
  var divider = _ref.divider,
      children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? '' : _ref$href,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['divider', 'children', 'href', 'onClick']);

  if (divider) return _react2.default.createElement('li', { className: 'divider' });
  var a = onClick ? _react2.default.createElement(
    'a',
    { onClick: onClick },
    children
  ) : _react2.default.createElement(
    'a',
    { href: href },
    children
  );
  return _react2.default.createElement(
    'li',
    props,
    a
  );
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  divider: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: _propTypes2.default.func
};

exports.default = NavItem;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Navbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Col = __webpack_require__("./node_modules/react-materialize/lib/Col.js");

var _Col2 = _interopRequireDefault(_Col);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.renderSideNav = _this.renderSideNav.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof $ !== 'undefined') {
        $('.button-collapse').sideNav(this.props.options);
      }
    }
  }, {
    key: 'renderSideNav',
    value: function renderSideNav() {
      return _react2.default.createElement(
        'ul',
        { id: 'nav-mobile', className: 'side-nav' },
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          brand = _props.brand,
          className = _props.className,
          fixed = _props.fixed,
          left = _props.left,
          right = _props.right,
          href = _props.href,
          other = _objectWithoutProperties(_props, ['brand', 'className', 'fixed', 'left', 'right', 'href']);

      delete other.options;

      var classes = {
        right: right,
        'hide-on-med-and-down': true
      };

      var brandClasses = {
        'brand-logo': true,
        right: left
      };

      var content = _react2.default.createElement(
        'nav',
        _extends({}, other, { className: className }),
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper' },
          _react2.default.createElement(
            _Col2.default,
            { s: 12 },
            _react2.default.createElement(
              'a',
              { href: href, className: (0, _classnames2.default)(brandClasses) },
              brand
            ),
            _react2.default.createElement(
              'ul',
              { className: (0, _classnames2.default)(className, classes) },
              this.props.children
            ),
            this.renderSideNav(),
            _react2.default.createElement(
              'a',
              { className: 'button-collapse', href: '#', 'data-activates': 'nav-mobile' },
              _react2.default.createElement(
                _Icon2.default,
                null,
                'view_headline'
              )
            )
          )
        )
      );

      if (fixed) {
        content = _react2.default.createElement(
          'div',
          { className: 'navbar-fixed' },
          content
        );
      }

      return content;
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  brand: _propTypes2.default.node,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  left: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  /**
   * Makes the navbar fixed
   */
  fixed: _propTypes2.default.bool,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes2.default.shape({
    menuWidth: _propTypes2.default.number,
    edge: _propTypes2.default.oneOf(['left', 'right']),
    closeOnClick: _propTypes2.default.bool,
    draggable: _propTypes2.default.bool
  })
};

Navbar.defaultProps = {
  href: '/',
  options: {}
};

exports.default = Navbar;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Pagination.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _PaginationButton = __webpack_require__("./node_modules/react-materialize/lib/PaginationButton.js");

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    var activePage = props.activePage,
        items = props.items;


    _this.state = {
      activePage: activePage > 0 && activePage <= items ? activePage : 1
    };

    _this.renderButtons = _this.renderButtons.bind(_this);
    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activePage !== this.props.activePage) {
        this.setState({ activePage: nextProps.activePage });
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(i) {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          onSelect = _props.onSelect;


      return function () {
        if (i > 0 && i <= items) {
          if (onSelect) {
            onSelect(i);
          }
          _this2.setState({ activePage: i });
        }
      };
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _props2 = this.props,
          items = _props2.items,
          children = _props2.children,
          _props2$maxButtons = _props2.maxButtons,
          maxButtons = _props2$maxButtons === undefined ? items : _props2$maxButtons;
      var activePage = this.state.activePage;


      if (children) return children;

      var buttonsCount = Math.min(maxButtons, items);

      var maxPos = items - buttonsCount;
      var halfButtons = parseInt(buttonsCount / 2, 10);

      var hiddenPagesBefore = activePage - halfButtons;
      if (hiddenPagesBefore > maxPos) {
        hiddenPagesBefore = maxPos + 1;
      }

      var from = Math.max(hiddenPagesBefore, 1);
      var to = Math.min(items, from + maxButtons - 1);

      var buttons = [_react2.default.createElement(
        _PaginationButton2.default,
        {
          disabled: activePage === 1,
          key: 'pagination-0',
          onSelect: this._onClick(activePage - 1)
        },
        _react2.default.createElement(
          _Icon2.default,
          null,
          'chevron_left'
        )
      )];

      for (var i = from; i <= to; i++) {
        buttons.push(_react2.default.createElement(
          _PaginationButton2.default,
          {
            active: i === activePage,
            key: 'pagination-' + i,
            onSelect: this._onClick(i)
          },
          i
        ));
      }

      buttons.push(_react2.default.createElement(
        _PaginationButton2.default,
        {
          key: 'pagination-' + (items + 1),
          disabled: activePage === items,
          onSelect: this._onClick(activePage + 1)
        },
        _react2.default.createElement(
          _Icon2.default,
          null,
          'chevron_right'
        )
      ));

      return buttons;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: (0, _classnames2.default)('pagination', this.props.className) },
        this.renderButtons()
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: _propTypes2.default.number.isRequired,
  /**
   * The initial activePage
   */
  activePage: _propTypes2.default.number,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  maxButtons: _propTypes2.default.number,
  onSelect: _propTypes2.default.func
};

Pagination.defaultProps = {
  activePage: 1,
  items: 10
};

exports.default = Pagination;

/***/ }),

/***/ "./node_modules/react-materialize/lib/PaginationButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationButton = function PaginationButton(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === undefined ? false : _ref$active,
      children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      href = _ref.href,
      onSelect = _ref.onSelect;

  var classes = {
    'waves-effect': true,
    disabled: disabled,
    active: active
  };

  var linkProps = href ? { href: href } : null;

  return _react2.default.createElement(
    'li',
    { className: (0, _classnames2.default)(classes, className), onClick: onSelect },
    _react2.default.createElement(
      'a',
      linkProps,
      children
    )
  );
};

PaginationButton.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  onSelect: _propTypes2.default.func
};

exports.default = PaginationButton;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Parallax.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parallax = function (_Component) {
  _inherits(Parallax, _Component);

  function Parallax() {
    _classCallCheck(this, Parallax);

    return _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).apply(this, arguments));
  }

  _createClass(Parallax, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.parallax').parallax();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          imageSrc = _props.imageSrc;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('parallax-container', className) },
        _react2.default.createElement(
          'div',
          { className: 'parallax' },
          _react2.default.createElement('img', { src: imageSrc })
        )
      );
    }
  }]);

  return Parallax;
}(_react.Component);

Parallax.propTypes = {
  className: _propTypes2.default.string,
  /**
   * The image path which will be used for the background of the parallax
   */
  imageSrc: _propTypes2.default.string
};
exports.default = Parallax;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Preloader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = __webpack_require__("./node_modules/react-materialize/lib/Spinner.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = ['blue', 'red', 'yellow', 'green'];

var Preloader = function (_Component) {
  _inherits(Preloader, _Component);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: 'render',
    value: function render() {
      var classes = {
        'preloader-wrapper': true,
        active: this.props.active
      };

      if (this.props.size) {
        classes[this.props.size] = true;
      }

      var spinners = void 0;
      if (this.props.flashing) {
        spinners = [];
        colors.map(function (color) {
          spinners.push(_react2.default.createElement(_Spinner2.default, { color: color, only: false, key: color }));
        });
      } else {
        spinners = _react2.default.createElement(_Spinner2.default, { color: this.props.color });
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(this.props.className, classes) },
        spinners
      );
    }
  }]);

  return Preloader;
}(_react.Component);

Preloader.propTypes = {
  className: _propTypes2.default.string,
  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: _propTypes2.default.oneOf(['big', 'small', 'medium']),
  /**
   * Whether to spin
   * @default true
   */
  active: _propTypes2.default.bool,
  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: _propTypes2.default.oneOf(['blue', 'red', 'yellow', 'green']),
  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: _propTypes2.default.bool
};

Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue'
};

exports.default = Preloader;

/***/ }),

/***/ "./node_modules/react-materialize/lib/ProgressBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      className = _ref.className;

  var style = void 0;
  var classes = {
    indeterminate: progress === undefined,
    determinate: !!progress
  };
  if (progress) {
    style = {
      width: progress + '%'
    };
  }

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('progress lighten-5', className) },
    _react2.default.createElement('div', { className: (0, _classnames2.default)(classes, className), style: style })
  );
};

ProgressBar.propTypes = {
  className: _propTypes2.default.string,
  /**
   * A number between 0..100 that indicates the current progress,
   * when provided, a determinate bar with the progress is displayed,
   * otherwise a indeterminate bar is shown
   */
  progress: _propTypes2.default.number
};

exports.default = ProgressBar;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      Node = _ref$node === undefined ? 'div' : _ref$node,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'node']);

  return _react2.default.createElement(
    Node,
    _extends({ className: (0, _classnames2.default)('row', className) }, props),
    children
  );
};

Row.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  node: _propTypes2.default.node
};

exports.default = Row;

/***/ }),

/***/ "./node_modules/react-materialize/lib/SearchForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = function SearchForm() {
  return _react2.default.createElement(
    'form',
    null,
    _react2.default.createElement(
      'div',
      { className: 'input-field' },
      _react2.default.createElement('input', { id: 'search', type: 'search', required: true }),
      _react2.default.createElement(
        'label',
        { htmlFor: 'search' },
        _react2.default.createElement(
          _Icon2.default,
          null,
          'search'
        )
      ),
      _react2.default.createElement(
        _Icon2.default,
        null,
        'close'
      )
    )
  );
};

exports.default = SearchForm;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Section.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(props) {
  return _react2.default.createElement(
    'div',
    { className: 'section' },
    props.children
  );
};

Section.propTypes = {
  children: _propTypes2.default.node
};

exports.default = Section;

/***/ }),

/***/ "./node_modules/react-materialize/lib/SideNav.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _idgen = __webpack_require__("./node_modules/react-materialize/lib/idgen.js");

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNav = function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav(props) {
    _classCallCheck(this, SideNav);

    var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));

    _this.id = props.id || 'sidenav_' + (0, _idgen2.default)();
    return _this;
  }

  _createClass(SideNav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$options = this.props.options,
          options = _props$options === undefined ? {} : _props$options;

      $(this._trigger).sideNav(options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          trigger = _props.trigger,
          fixed = _props.fixed,
          props = _objectWithoutProperties(_props, ['className', 'children', 'trigger', 'fixed']);

      delete props.id;
      delete props.options;
      var classNames = (0, _classnames2.default)('side-nav', { fixed: fixed || !trigger }, className);

      return _react2.default.createElement(
        'span',
        null,
        this.renderTrigger(),
        _react2.default.createElement(
          'ul',
          _extends({ id: this.id, className: classNames }, props),
          children
        )
      );
    }
  }, {
    key: 'renderTrigger',
    value: function renderTrigger() {
      var _this2 = this;

      var _props2 = this.props,
          trigger = _props2.trigger,
          fixed = _props2.fixed;

      if (!trigger) {
        return;
      }
      var triggerView = fixed ? 'hide-on-large-only' : 'show-on-large';
      var classNames = (0, _classnames2.default)(trigger.props.className, triggerView);
      return _react2.default.cloneElement(trigger, {
        ref: function ref(t) {
          return _this2._trigger = '[data-activates=' + _this2.id + ']';
        },
        'data-activates': this.id,
        className: classNames
      });
    }
  }]);

  return SideNav;
}(_react.Component);

SideNav.propTypes = {
  /**
   * Adds fixed class to side-nav
   */
  fixed: _propTypes2.default.bool,
  /**
   * sidenav id. If none is passed, an id will be generated.
   */
  id: _propTypes2.default.string,
  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: _propTypes2.default.node,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes2.default.shape({
    menuWidth: _propTypes2.default.number,
    edge: _propTypes2.default.oneOf(['left', 'right']),
    closeOnClick: _propTypes2.default.bool,
    draggable: _propTypes2.default.bool
  }),
  /**
   * Additional classes added to 'side-nav'
   */
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = SideNav;

/***/ }),

/***/ "./node_modules/react-materialize/lib/SideNavItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _UserView = __webpack_require__("./node_modules/react-materialize/lib/UserView.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNavItem = function (_Component) {
  _inherits(SideNavItem, _Component);

  function SideNavItem() {
    _classCallCheck(this, SideNavItem);

    return _possibleConstructorReturn(this, (SideNavItem.__proto__ || Object.getPrototypeOf(SideNavItem)).apply(this, arguments));
  }

  _createClass(SideNavItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          divider = _props.divider,
          subheader = _props.subheader,
          userView = _props.userView,
          icon = _props.icon,
          _props$href = _props.href,
          href = _props$href === undefined ? '#!' : _props$href,
          waves = _props.waves,
          _props$user = _props.user,
          user = _props$user === undefined ? {} : _props$user,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['divider', 'subheader', 'userView', 'icon', 'href', 'waves', 'user', 'children']);

      var itemClasses = {
        divider: divider
      };
      var linkClasses = {
        subheader: subheader,
        'waves-effect': waves
      };

      return _react2.default.createElement(
        'li',
        _extends({ className: (0, _classnames2.default)(itemClasses) }, props),
        userView && user && _react2.default.createElement(_UserView.UserView, user),
        !userView && _react2.default.createElement(
          'a',
          { className: (0, _classnames2.default)(linkClasses), href: href },
          icon && _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            icon
          ),
          children
        )
      );
    }
  }]);

  return SideNavItem;
}(_react.Component);

SideNavItem.propTypes = {
  children: _propTypes2.default.node,
  divider: _propTypes2.default.bool,
  subheader: _propTypes2.default.bool,
  userView: _propTypes2.default.bool,
  waves: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  user: _propTypes2.default.shape(_UserView.UserShape)
};

exports.default = SideNavItem;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Slide.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__("./node_modules/react-materialize/lib/constants.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide(props) {
    _classCallCheck(this, Slide);

    var _this = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, props));

    _this.renderCaption = _this.renderCaption.bind(_this);
    return _this;
  }

  _createClass(Slide, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('img', { src: this.props.src }),
        this.renderCaption()
      );
    }
  }, {
    key: 'renderCaption',
    value: function renderCaption() {
      var _props = this.props,
          title = _props.title,
          className = _props.className,
          placement = _props.placement,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['title', 'className', 'placement', 'children']);

      delete props.placement;

      var classes = _defineProperty({
        caption: true
      }, placement + '-align', placement);

      if (typeof title !== 'undefined' || typeof children !== 'undefined') {
        return _react2.default.createElement(
          'div',
          _extends({ className: (0, _classnames2.default)(classes) }, props),
          _react2.default.createElement(
            'h3',
            null,
            title
          ),
          _react2.default.createElement(
            'h5',
            { className: className },
            children
          )
        );
      } else return null;
    }
  }]);

  return Slide;
}(_react.Component);

Slide.propTypes = {
  /**
   * Aliment of the caption
   * @default 'center'
   */
  placement: _propTypes2.default.oneOf(_constants2.default.PLACEMENTS),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
   * The tagline of the caption
   */
  title: _propTypes2.default.string,
  /**
   * The path of the background image
   */
  src: _propTypes2.default.string.isRequired
};

Slide.defaultProps = {
  placement: 'center'
};

exports.default = Slide;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Slider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          fullscreen = _props.fullscreen,
          indicators = _props.indicators,
          interval = _props.interval,
          transition = _props.transition;


      $('.slider').slider({
        full_width: fullscreen,
        indicators: indicators,
        interval: interval,
        transition: transition
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          fullscreen = _props2.fullscreen,
          children = _props2.children,
          className = _props2.className;

      var classes = {
        fullscreen: fullscreen,
        slider: true
      };

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(classes, className) },
        _react2.default.createElement(
          'ul',
          { className: 'slides' },
          children
        )
      );
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  fullscreen: _propTypes2.default.bool,
  /**
   * Set to false to hide slide indicators
   * @default true
   */
  indicators: _propTypes2.default.bool,
  /**
   * The interval between transitions in ms
   * @default 6000
   */
  interval: _propTypes2.default.number,
  /**
   * The duration of the transation animation in ms
   * @default 500
   */
  transition: _propTypes2.default.number
};

Slider.defaultProps = {
  fullscreen: false,
  indicators: true,
  interval: 6000
};

exports.default = Slider;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Spinner.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var color = _ref.color,
      only = _ref.only;

  var spinnerClasses = {
    'spinner-layer': true
  };
  if (only) {
    spinnerClasses['spinner-' + color + '-only'] = true;
  } else {
    spinnerClasses['spinner-' + color] = true;
  }
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(spinnerClasses) },
    _react2.default.createElement(
      'div',
      { className: 'circle-clipper left' },
      _react2.default.createElement('div', { className: 'circle' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'gap-patch' },
      _react2.default.createElement('div', { className: 'circle' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'circle-clipper right' },
      _react2.default.createElement('div', { className: 'circle' })
    )
  );
};

Spinner.defaultProps = {
  only: true
};

Spinner.propTypes = {
  color: _propTypes2.default.string,
  only: _propTypes2.default.bool
};

exports.default = Spinner;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is just a holder for the props and children for tab, thus
// there is no logic here.
var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Tab;
}(_react2.default.Component);

Tab.propTypes = {
  /**
   * The title shown in the tabs list
   */
  title: _propTypes2.default.node.isRequired,
  /**
   * The width of the Tab
   */
  tabWidth: _propTypes2.default.number,
  /**
   * Pre-select the tab
   * @default false
   */
  active: _propTypes2.default.bool,
  /**
   * Disable the tab
   * @default false
   */
  disabled: _propTypes2.default.bool
};

Tab.defaultProps = {
  active: false,
  disabled: false
};

exports.default = Tab;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          bordered = _props.bordered,
          centered = _props.centered,
          children = _props.children,
          className = _props.className,
          hoverable = _props.hoverable,
          responsive = _props.responsive,
          striped = _props.striped,
          props = _objectWithoutProperties(_props, ['bordered', 'centered', 'children', 'className', 'hoverable', 'responsive', 'striped']);

      var classes = {
        centered: centered,
        highlight: hoverable,
        'responsive-table': responsive,
        striped: striped,
        bordered: bordered
      };

      return _react2.default.createElement(
        'table',
        _extends({ className: (0, _classnames2.default)(classes, className) }, props),
        children
      );
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  /**
   * Center align all the text in the table
   * @default false
   */
  centered: _propTypes2.default.bool,
  /**
   * Highlight the row that's hovered
   * @default false
   */
  hoverable: _propTypes2.default.bool,
  /**
   * Enable response to make the table horizontally scrollable on smaller screens
   * @default false
   */
  responsive: _propTypes2.default.bool,
  /**
   * striped style
   * @default false
   */
  striped: _propTypes2.default.bool,
  /**
   * Add border to each row
   * @default false
   */
  bordered: _propTypes2.default.bool
};

exports.default = Table;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Tabs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _idgen = __webpack_require__("./node_modules/react-materialize/lib/idgen.js");

var _idgen2 = _interopRequireDefault(_idgen);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Row = __webpack_require__("./node_modules/react-materialize/lib/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__("./node_modules/react-materialize/lib/Col.js");

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$tabOptions = this.props.tabOptions,
          tabOptions = _props$tabOptions === undefined ? {} : _props$tabOptions;


      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: '_onSelect',
    value: function _onSelect(idx, e) {
      var onChange = this.props.onChange;


      if (onChange) onChange(idx, e);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$tabOptions = nextProps.tabOptions,
          tabOptions = _nextProps$tabOptions === undefined ? {} : _nextProps$tabOptions;


      if (typeof $ !== 'undefined') {
        $(this._tabsEl).tabs(tabOptions);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          defaultValue = _props.defaultValue;


      var scope = '' + (0, _idgen2.default)();

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          { s: 12 },
          _react2.default.createElement(
            'ul',
            { className: (0, _classnames2.default)('tabs', className), ref: function ref(el) {
                return _this2._tabsEl = el;
              } },
            _react2.default.Children.map(children, function (child, id) {
              var _classes;

              var idx = '' + scope + id;
              var _child$props = child.props,
                  active = _child$props.active,
                  className = _child$props.className,
                  disabled = _child$props.disabled,
                  tabWidth = _child$props.tabWidth,
                  title = _child$props.title;


              var classes = (_classes = {}, _defineProperty(_classes, 's' + tabWidth, tabWidth), _defineProperty(_classes, 'tab', true), _defineProperty(_classes, 'disabled', disabled), _defineProperty(_classes, 'col', true), _classes);

              return _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)(classes, className), key: idx },
                _react2.default.createElement(
                  'a',
                  _extends({
                    href: '#tab_' + idx,
                    className: active || defaultValue === idx ? 'active' : ''
                  }, disabled ? {} : { onClick: _this2._onSelect.bind(_this2, idx) }),
                  title
                )
              );
            })
          )
        ),
        _react2.default.Children.map(children, function (child, id) {
          var idx = '' + scope + id;
          return _react2.default.createElement(
            _Col2.default,
            {
              id: 'tab_' + idx,
              s: 12,
              key: 'tab' + idx,
              style: {
                display: child.props.active || defaultValue === idx ? 'block' : 'none'
              }
            },
            child.props.children
          );
        })
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  /*
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  tabOptions: _propTypes2.default.shape({
    onShow: _propTypes2.default.func,
    swipeable: _propTypes2.default.bool,
    responsiveThreshold: _propTypes2.default.number
  })
};

exports.default = Tabs;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Tag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Chip = __webpack_require__("./node_modules/react-materialize/lib/Chip.js");

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _Chip2.default,
    { close: true },
    children
  );
};

Tag.propTypes = {
  children: _propTypes2.default.node
};

exports.default = Tag;

/***/ }),

/***/ "./node_modules/react-materialize/lib/Toast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__("./node_modules/react-materialize/lib/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_Component) {
  _inherits(Toast, _Component);

  function Toast(props) {
    _classCallCheck(this, Toast);

    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Toast, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rounded = _props.rounded;

      var classes = { toast: true, rounded: rounded };

      return _react2.default.createElement(
        _Button2.default,
        { onClick: this.onClick, className: (0, _classnames2.default)(classes) },
        children
      );
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      Materialize.toast(this.props.toast, 1000);
    }
  }]);

  return Toast;
}(_react.Component);

Toast.propTypes = {
  toast: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  rounded: _propTypes2.default.bool
};

exports.default = Toast;

/***/ }),

/***/ "./node_modules/react-materialize/lib/UserView.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserView = exports.UserShape = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserShape = exports.UserShape = {
  background: _propTypes2.default.string,
  image: _propTypes2.default.string,
  name: _propTypes2.default.string,
  email: _propTypes2.default.string
};

var UserView = exports.UserView = function (_Component) {
  _inherits(UserView, _Component);

  function UserView() {
    _classCallCheck(this, UserView);

    return _possibleConstructorReturn(this, (UserView.__proto__ || Object.getPrototypeOf(UserView)).apply(this, arguments));
  }

  _createClass(UserView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          background = _props.background,
          image = _props.image,
          name = _props.name,
          email = _props.email;

      return _react2.default.createElement(
        'div',
        { className: 'userView' },
        background && _react2.default.createElement(
          'div',
          { className: 'background' },
          _react2.default.createElement('img', { src: background })
        ),
        image && _react2.default.createElement(
          'a',
          { href: '#!user' },
          _react2.default.createElement('img', { className: 'circle', src: image })
        ),
        name && _react2.default.createElement(
          'a',
          { href: '#!name' },
          _react2.default.createElement(
            'span',
            { className: 'white-text name' },
            name
          )
        ),
        email && _react2.default.createElement(
          'a',
          { href: '#!email' },
          _react2.default.createElement(
            'span',
            { className: 'white-text email' },
            email
          )
        )
      );
    }
  }]);

  return UserView;
}(_react.Component);

UserView.propTypes = UserShape;

exports.default = UserView;

/***/ }),

/***/ "./node_modules/react-materialize/lib/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  STYLES: ['large', 'floating', 'flat'],
  WAVES: ['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'],
  SIZES: ['s', 'm', 'l'],
  PLACEMENTS: ['left', 'center', 'right'],
  SCALES: ['big', 'small'],
  ICON_SIZES: ['tiny', 'small', 'medium', 'large']
};

/***/ }),

/***/ "./node_modules/react-materialize/lib/idgen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetID = resetID;
exports.default = idgen;
var id = 0;

function resetID() {
  id = 0;
}

function idgen() {
  var oldId = id;
  id += 1;
  return oldId;
}

/***/ }),

/***/ "./node_modules/react-materialize/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.Tag = exports.Tabs = exports.Table = exports.Tab = exports.Slider = exports.Slide = exports.SideNavItem = exports.SideNav = exports.Section = exports.SearchForm = exports.Row = exports.ProgressBar = exports.Preloader = exports.Parallax = exports.PaginationButton = exports.Pagination = exports.Navbar = exports.NavItem = exports.Modal = exports.MenuItem = exports.MediaBox = exports.Input = exports.Icon = exports.Footer = exports.Dropdown = exports.Divider = exports.Container = exports.CollectionItem = exports.Collection = exports.CollapsibleItem = exports.Collapsible = exports.Col = exports.Chip = exports.CardTitle = exports.CardPanel = exports.Card = exports.Carousel = exports.Button = exports.Breadcrumb = exports.Badge = exports.Autocomplete = undefined;

var _Autocomplete = __webpack_require__("./node_modules/react-materialize/lib/Autocomplete.js");

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _Badge = __webpack_require__("./node_modules/react-materialize/lib/Badge.js");

var _Badge2 = _interopRequireDefault(_Badge);

var _Breadcrumb = __webpack_require__("./node_modules/react-materialize/lib/Breadcrumb.js");

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Button = __webpack_require__("./node_modules/react-materialize/lib/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Carousel = __webpack_require__("./node_modules/react-materialize/lib/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Card = __webpack_require__("./node_modules/react-materialize/lib/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardPanel = __webpack_require__("./node_modules/react-materialize/lib/CardPanel.js");

var _CardPanel2 = _interopRequireDefault(_CardPanel);

var _CardTitle = __webpack_require__("./node_modules/react-materialize/lib/CardTitle.js");

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _Chip = __webpack_require__("./node_modules/react-materialize/lib/Chip.js");

var _Chip2 = _interopRequireDefault(_Chip);

var _Col = __webpack_require__("./node_modules/react-materialize/lib/Col.js");

var _Col2 = _interopRequireDefault(_Col);

var _Collapsible = __webpack_require__("./node_modules/react-materialize/lib/Collapsible.js");

var _Collapsible2 = _interopRequireDefault(_Collapsible);

var _CollapsibleItem = __webpack_require__("./node_modules/react-materialize/lib/CollapsibleItem.js");

var _CollapsibleItem2 = _interopRequireDefault(_CollapsibleItem);

var _Collection = __webpack_require__("./node_modules/react-materialize/lib/Collection.js");

var _Collection2 = _interopRequireDefault(_Collection);

var _CollectionItem = __webpack_require__("./node_modules/react-materialize/lib/CollectionItem.js");

var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

var _Container = __webpack_require__("./node_modules/react-materialize/lib/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Divider = __webpack_require__("./node_modules/react-materialize/lib/Divider.js");

var _Divider2 = _interopRequireDefault(_Divider);

var _Dropdown = __webpack_require__("./node_modules/react-materialize/lib/Dropdown.js");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Footer = __webpack_require__("./node_modules/react-materialize/lib/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Icon = __webpack_require__("./node_modules/react-materialize/lib/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _Input = __webpack_require__("./node_modules/react-materialize/lib/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _MediaBox = __webpack_require__("./node_modules/react-materialize/lib/MediaBox.js");

var _MediaBox2 = _interopRequireDefault(_MediaBox);

var _MenuItem = __webpack_require__("./node_modules/react-materialize/lib/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Modal = __webpack_require__("./node_modules/react-materialize/lib/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _NavItem = __webpack_require__("./node_modules/react-materialize/lib/NavItem.js");

var _NavItem2 = _interopRequireDefault(_NavItem);

var _Navbar = __webpack_require__("./node_modules/react-materialize/lib/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Pagination = __webpack_require__("./node_modules/react-materialize/lib/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PaginationButton = __webpack_require__("./node_modules/react-materialize/lib/PaginationButton.js");

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _Parallax = __webpack_require__("./node_modules/react-materialize/lib/Parallax.js");

var _Parallax2 = _interopRequireDefault(_Parallax);

var _Preloader = __webpack_require__("./node_modules/react-materialize/lib/Preloader.js");

var _Preloader2 = _interopRequireDefault(_Preloader);

var _ProgressBar = __webpack_require__("./node_modules/react-materialize/lib/ProgressBar.js");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _Row = __webpack_require__("./node_modules/react-materialize/lib/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _SearchForm = __webpack_require__("./node_modules/react-materialize/lib/SearchForm.js");

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _Section = __webpack_require__("./node_modules/react-materialize/lib/Section.js");

var _Section2 = _interopRequireDefault(_Section);

var _SideNav = __webpack_require__("./node_modules/react-materialize/lib/SideNav.js");

var _SideNav2 = _interopRequireDefault(_SideNav);

var _SideNavItem = __webpack_require__("./node_modules/react-materialize/lib/SideNavItem.js");

var _SideNavItem2 = _interopRequireDefault(_SideNavItem);

var _Slide = __webpack_require__("./node_modules/react-materialize/lib/Slide.js");

var _Slide2 = _interopRequireDefault(_Slide);

var _Slider = __webpack_require__("./node_modules/react-materialize/lib/Slider.js");

var _Slider2 = _interopRequireDefault(_Slider);

var _Tab = __webpack_require__("./node_modules/react-materialize/lib/Tab.js");

var _Tab2 = _interopRequireDefault(_Tab);

var _Table = __webpack_require__("./node_modules/react-materialize/lib/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _Tabs = __webpack_require__("./node_modules/react-materialize/lib/Tabs.js");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tag = __webpack_require__("./node_modules/react-materialize/lib/Tag.js");

var _Tag2 = _interopRequireDefault(_Tag);

var _Toast = __webpack_require__("./node_modules/react-materialize/lib/Toast.js");

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Autocomplete = _Autocomplete2.default;
exports.Badge = _Badge2.default;
exports.Breadcrumb = _Breadcrumb2.default;
exports.Button = _Button2.default;
exports.Carousel = _Carousel2.default;
exports.Card = _Card2.default;
exports.CardPanel = _CardPanel2.default;
exports.CardTitle = _CardTitle2.default;
exports.Chip = _Chip2.default;
exports.Col = _Col2.default;
exports.Collapsible = _Collapsible2.default;
exports.CollapsibleItem = _CollapsibleItem2.default;
exports.Collection = _Collection2.default;
exports.CollectionItem = _CollectionItem2.default;
exports.Container = _Container2.default;
exports.Divider = _Divider2.default;
exports.Dropdown = _Dropdown2.default;
exports.Footer = _Footer2.default;
exports.Icon = _Icon2.default;
exports.Input = _Input2.default;
exports.MediaBox = _MediaBox2.default;
exports.MenuItem = _MenuItem2.default;
exports.Modal = _Modal2.default;
exports.NavItem = _NavItem2.default;
exports.Navbar = _Navbar2.default;
exports.Pagination = _Pagination2.default;
exports.PaginationButton = _PaginationButton2.default;
exports.Parallax = _Parallax2.default;
exports.Preloader = _Preloader2.default;
exports.ProgressBar = _ProgressBar2.default;
exports.Row = _Row2.default;
exports.SearchForm = _SearchForm2.default;
exports.Section = _Section2.default;
exports.SideNav = _SideNav2.default;
exports.SideNavItem = _SideNavItem2.default;
exports.Slide = _Slide2.default;
exports.Slider = _Slider2.default;
exports.Tab = _Tab2.default;
exports.Table = _Table2.default;
exports.Tabs = _Tabs2.default;
exports.Tag = _Tag2.default;
exports.Toast = _Toast2.default;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
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
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/Components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_materialize__ = __webpack_require__("./node_modules/react-materialize/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_materialize__);
var _jsxFileName = "D:\\myReactJs\\next-react-ssr\\pages\\Components\\Header.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import { connect } from 'react-redux';

// import stylesheet from '../styles/b.css'
function mapStateToProps(state) {
    return {};
}

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_materialize__["Navbar"],
                { brand: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { style: { marginLeft: 10 }, className: "brand", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        },
                        "MALAS",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "span",
                            { style: { color: '#2196F3' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                }
                            },
                            "KODING"
                        )
                    ), style: { backgroundColor: '#212121' }, right: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_materialize__["NavItem"],
                    { href: "#", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "menu_text", style: { float: "left" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        "Home"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_materialize__["NavItem"],
                    { href: "#", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "menu_text", style: { float: "left" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        "|"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_materialize__["NavItem"],
                    { href: "#", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "menu_text", style: { float: "left" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        "Our Team"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_materialize__["NavItem"],
                    { href: "#", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "menu_text", style: { float: "left" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        "|"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_materialize__["NavItem"],
                    { href: "#", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "menu_text", style: { float: "left" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            }
                        },
                        "Our Story"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_materialize__["NavItem"],
                    { href: "#", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "menu_text", style: { float: "left" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        "|"
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_materialize__["NavItem"],
                    { href: "#", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "span",
                        { className: "menu_text", style: { float: "left" }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        "About"
                    )
                )
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Header;

/* harmony default export */ __webpack_exports__["a"] = (_default);
// export default connect(
//     mapStateToProps,
// )(Header);

;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/myReactJs/next-react-ssr/pages/Components/Header.js");
    reactHotLoader.register(Header, "Header", "D:/myReactJs/next-react-ssr/pages/Components/Header.js");
    reactHotLoader.register(_default, "default", "D:/myReactJs/next-react-ssr/pages/Components/Header.js");
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Components\\Header")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/Container/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Header__ = __webpack_require__("./pages/Components/Header.js");
var _jsxFileName = "D:\\myReactJs\\next-react-ssr\\pages\\Container\\Content.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {};
}

var Content = function (_Component) {
    _inherits(Content, _Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Components_Header__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                })
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Content;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Content;

/* harmony default export */ __webpack_exports__["a"] = (_default);

// export default connect(
//     mapStateToProps,
// )(Content);

;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, "mapStateToProps", "D:/myReactJs/next-react-ssr/pages/Container/Content.js");
    reactHotLoader.register(Content, "Content", "D:/myReactJs/next-react-ssr/pages/Container/Content.js");
    reactHotLoader.register(_default, "default", "D:/myReactJs/next-react-ssr/pages/Container/Content.js");
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Container\\Content")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_Content__ = __webpack_require__("./pages/Container/Content.js");
var _jsxFileName = 'D:\\myReactJs\\next-react-ssr\\pages\\index.js';

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





var Index = function Index() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'http://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'http://fonts.googleapis.com/css?family=Anton|Righteous|Inconsolata', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/static/b.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Container_Content__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        })
    );
};

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Index, 'Index', 'D:/myReactJs/next-react-ssr/pages/index.js');
    reactHotLoader.register(_default, 'default', 'D:/myReactJs/next-react-ssr/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map