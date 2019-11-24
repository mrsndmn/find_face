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
var id = 'followers_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="followers_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M5.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7-.75a.75.75 0 1 1-1.5 0C11 11.714 8.286 9 4.75 9a.75.75 0 0 1 0-1.5c4.364 0 7.75 3.386 7.75 7.75zm5 0a.75.75 0 1 1-1.5 0C16 8.914 11.086 4 4.75 4a.75.75 0 0 1 0-1.5c7.164 0 12.75 5.586 12.75 12.75z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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