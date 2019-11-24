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
var id = 'delete_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="delete_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M9.985 25h8.03A2.985 2.985 0 0 0 21 22.015V8H7v14.015A2.985 2.985 0 0 0 9.985 25zM9.56 4.5c.218-.862.999-1.5 1.929-1.5h5.02c.93 0 1.711.638 1.93 1.5h2.31c.69 0 1.25.56 1.25 1.25v.96c0 .16-.13.29-.29.29H6.29A.29.29 0 0 1 6 6.71v-.96c0-.69.56-1.25 1.25-1.25h2.31z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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