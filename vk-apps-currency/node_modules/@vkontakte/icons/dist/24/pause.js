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
var id = 'pause_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pause_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M6.788 5h1.924c.448 0 .61.047.774.134a.913.913 0 0 1 .38.38c.087.164.134.326.134.774v11.424c0 .448-.047.61-.134.774a.913.913 0 0 1-.38.38c-.164.087-.326.134-.774.134H6.788c-.448 0-.61-.047-.774-.134a.913.913 0 0 1-.38-.38c-.087-.164-.134-.326-.134-.774V6.288c0-.448.047-.61.134-.774a.913.913 0 0 1 .38-.38C6.178 5.047 6.34 5 6.788 5zm8 0h1.924c.448 0 .61.047.774.134a.913.913 0 0 1 .38.38c.087.164.134.326.134.774v11.424c0 .448-.047.61-.134.774a.913.913 0 0 1-.38.38c-.164.087-.326.134-.774.134h-1.924c-.448 0-.61-.047-.774-.134a.913.913 0 0 1-.38-.38c-.087-.164-.134-.326-.134-.774V6.288c0-.448.047-.61.134-.774a.913.913 0 0 1 .38-.38c.164-.087.326-.134.774-.134z" fill="currentColor" /></g></symbol>';

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