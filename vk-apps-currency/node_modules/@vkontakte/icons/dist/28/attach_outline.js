"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _browserSymbol = _interopRequireDefault(require("svg-baker-runtime/browser-symbol"));

var _es6ObjectAssign = require("es6-object-assign");

var _sprite = _interopRequireDefault(require("../sprite"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 28 28';
var id = 'attach_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="attach_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21.402 16.382l-5.385 5.23a5.7 5.7 0 0 1-8.002-.057 5.787 5.787 0 0 1 0-8.183L16.1 5.36a3.586 3.586 0 0 1 5.071.024c1.425 1.463 1.416 3.77-.013 5.199l-8.131 8.128c-.52.52-1.352.562-1.921.096l-.134-.11a1.194 1.194 0 0 1-.098-1.758l5.467-5.601a.9.9 0 1 0-1.288-1.257l-5.467 5.601a2.994 2.994 0 0 0 .245 4.408l.134.11a3.233 3.233 0 0 0 4.335-.216l8.13-8.128c2.128-2.127 2.141-5.56.025-7.734a5.388 5.388 0 0 0-7.622-.04L6.74 12.098a7.587 7.587 0 0 0 .002 10.73 7.5 7.5 0 0 0 10.528.075l5.385-5.23a.9.9 0 0 0-1.254-1.292z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

if (_sprite.default) {
  var browserSymbol = new _browserSymbol.default({
    id: id,
    viewBox: viewBox,
    content: content
  });

  _sprite.default.add(browserSymbol);
}

function Icon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;