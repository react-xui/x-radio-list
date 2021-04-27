(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory(require("react"));
	else
		root["Dialog"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _RadioList = __webpack_require__(1);

	var _RadioList2 = _interopRequireDefault(_RadioList);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = _RadioList2.default; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-Plugin/x-seed
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Radio = __webpack_require__(3);

	var _Radio2 = _interopRequireDefault(_Radio);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /*
	   * Created with Visual Studio Code.
	   * github: https://github.com/React-xui/x-radio-list
	   * User: 田想兵
	   * Date: 2017-05-14
	   * Time: 20:00:00
	   * Contact: 55342775@qq.com
	   */

	var RadioList = function (_Component) {
	  _inherits(RadioList, _Component);

	  function RadioList(props) {
	    _classCallCheck(this, RadioList);

	    var _this = _possibleConstructorReturn(this, (RadioList.__proto__ || Object.getPrototypeOf(RadioList)).call(this, props));

	    _this.onSelect = function (v) {
	      var _this$props = _this.props,
	          readOnly = _this$props.readOnly,
	          disabled = _this$props.disabled;

	      if (readOnly != true && disabled != true) {
	        _this.setState({ selected: v }, function () {
	          _this.props.onChange && _this.props.onChange(v);
	        });
	      }
	    };

	    _this.state = { selected: props.value || "" };
	    return _this;
	  }

	  _createClass(RadioList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.value !== this.props.value && newProps.value !== this.state.selected) {
	        this.setState({ selected: newProps.value });
	      }
	    }
	  }, {
	    key: 'formatRadio',
	    value: function formatRadio(children) {
	      var _this2 = this;

	      var _props = this.props,
	          options = _props.options,
	          showTitle = _props.showTitle;

	      var list = [];
	      if (typeof options !== 'undefined') {
	        list = options;
	      } else {
	        list = children;
	      }
	      return list.map(function (item, key) {
	        var _item = item,
	            text = _item.text;

	        if (item && item.$$typeof && Symbol.for('react.element') == item.$$typeof) {
	          item = item.props;
	          text = typeof item.text === 'undefined' ? item.children : item.text;
	        }
	        var _item2 = item,
	            value = _item2.value;

	        var selected = false;
	        if (value == _this2.state.selected) {
	          selected = true;
	        }
	        return _react2.default.createElement(_Radio2.default, _extends({}, item, { showTitle: showTitle, key: key, selected: selected, value: value, text: text, onSelect: _this2.onSelect }));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          className = _props2.className,
	          children = _props2.children,
	          readOnly = _props2.readOnly,
	          disabled = _props2.disabled,
	          _props2$disabledCls = _props2.disabledCls,
	          disabledCls = _props2$disabledCls === undefined ? '' : _props2$disabledCls;

	      var cls = typeof className === 'undefined' ? "x-radiolist" : className + " x-radiolist";
	      if (readOnly || disabled) {
	        cls += ' ' + disabledCls;
	      }
	      return _react2.default.createElement('div', { className: cls }, this.formatRadio(children));
	    }
	  }]);

	  return RadioList;
	}(_react.Component);

	RadioList.Radio = _Radio2.default;
	exports.default = RadioList;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var getCss = function getCss(obj) {
	    var arr = [];
	    for (var k in obj) {
	        if (k === "true") {
	            arr.push(obj[k]);
	        }
	    }
	    return arr.join(' ');
	};

	var Radio = function (_Component) {
	    _inherits(Radio, _Component);

	    function Radio(props) {
	        _classCallCheck(this, Radio);

	        return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));
	    }

	    _createClass(Radio, [{
	        key: 'onSelect',
	        value: function onSelect(v) {
	            this.props.onSelect(v);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _getCss;

	            var _props = this.props,
	                children = _props.children,
	                text = _props.text,
	                value = _props.value,
	                onSelect = _props.onSelect,
	                selected = _props.selected,
	                disabled = _props.disabled,
	                secText = _props.secText,
	                locale = _props.locale,
	                showTitle = _props.showTitle;

	            var cls = getCss((_getCss = {}, _defineProperty(_getCss, selected, 'x-radiolist-radio-selected'), _defineProperty(_getCss, disabled, 'x-radiolist-radio-disabled'), _getCss));
	            if (typeof text === 'undefined') {
	                text = children;
	            }
	            if (locale) {
	                text = locale[text] || text;
	            }
	            var className = cls + ' x-radio';
	            return _react2.default.createElement('div', { title: showTitle ? text : '', className: className, onClick: this.onSelect.bind(this, value) }, _react2.default.createElement('div', { className: 'x-radio-text' }, text), secText && _react2.default.createElement('div', { className: 'x-radio-text-sec' }, secText));
	        }
	    }]);

	    return Radio;
	}(_react.Component);

	exports.default = Radio;

/***/ })
/******/ ])
});
;