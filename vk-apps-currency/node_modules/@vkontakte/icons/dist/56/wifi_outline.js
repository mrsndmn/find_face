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

var viewBox = '0 0 56 56';
var id = 'wifi_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="wifi_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28 39.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-9.5c2.694 0 5.273.792 7.47 2.253a1.5 1.5 0 1 1-1.662 2.498A10.443 10.443 0 0 0 28 33c-2.097 0-4.098.614-5.805 1.75a1.5 1.5 0 1 1-1.662-2.499A13.442 13.442 0 0 1 28 30zm0-9a21.42 21.42 0 0 1 14.225 5.378 1.5 1.5 0 0 1-1.986 2.249A18.421 18.421 0 0 0 28 24a18.421 18.421 0 0 0-12.238 4.626 1.5 1.5 0 0 1-1.986-2.249A21.42 21.42 0 0 1 28 21zm0-9a29.389 29.389 0 0 1 19.515 7.377 1.5 1.5 0 1 1-1.985 2.249A26.39 26.39 0 0 0 28 15a26.39 26.39 0 0 0-17.528 6.625 1.5 1.5 0 1 1-1.986-2.25A29.389 29.389 0 0 1 28 12z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;