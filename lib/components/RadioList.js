'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
      _this.setState({ selected: v });
    };

    _this.state = { selected: props.value || "" };
    return _this;
  }

  _createClass(RadioList, [{
    key: 'formatRadio',
    value: function formatRadio(children) {
      var _this2 = this;

      var options = this.props.options;

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
        return _react2.default.createElement(_Radio2.default, { key: key, selected: selected, value: value, text: text, onSelect: _this2.onSelect });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      var cls = typeof className === 'undefined' ? "x-radiolist" : className + " x-radiolist";
      return _react2.default.createElement(
        'div',
        { className: cls },
        this.formatRadio(children)
      );
    }
  }]);

  return RadioList;
}(_react.Component);

RadioList.Radio = _Radio2.default;
exports.default = RadioList;