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

var viewBox = '0 0 20 20';
var id = 'place_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="place_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M2.5 8.5C2.5 4.433 5.852 1 10 1s7.5 3.433 7.5 7.5c0 2.85-1.843 6.172-5.435 10.095a2.8 2.8 0 0 1-4.13 0C4.343 14.672 2.5 11.35 2.5 8.5zm1.5 0c0 2.383 1.68 5.41 5.041 9.082a1.3 1.3 0 0 0 1.918 0C14.319 13.911 16 10.883 16 8.5c0-3.175-2.618-6-6-6s-6 2.825-6 6zm2.5 0a3.5 3.5 0 1 1 7.001.001A3.5 3.5 0 0 1 6.5 8.5zm1.5 0a2 2 0 1 0 4.001-.001A2 2 0 0 0 8 8.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;