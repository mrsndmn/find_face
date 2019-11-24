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

var viewBox = '0 0 24 24';
var id = 'locate_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="locate_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M16.054 16.424a1 1 0 1 1-1.352-1.475 4 4 0 1 0-5.402.003 1 1 0 1 1-1.352 1.473 6 6 0 1 1 8.106-.002zm2.02 3.52a1 1 0 0 1-1.215-1.589 8 8 0 1 0-9.702.016 1 1 0 0 1-1.21 1.591 10.01 10.01 0 0 1-1.891-1.888C.7 13.686 1.539 7.41 5.926 4.056 10.314.7 16.59 1.539 19.944 5.926c3.355 4.388 2.517 10.664-1.87 14.018zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;