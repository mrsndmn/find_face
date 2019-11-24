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
var id = 'sticker_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="sticker_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M23.032 15.821A8.25 8.25 0 0 1 12.18 4.968 9.211 9.211 0 0 0 4.8 13.993a9.207 9.207 0 0 0 9.207 9.207 9.211 9.211 0 0 0 9.025-7.379zM13.933 5.46a6.45 6.45 0 0 0 8.608 8.608l-8.608-8.608zM14.007 25C7.927 25 3 20.072 3 13.993 3 8.3 7.323 3.616 12.865 3.045c.038-.003.119-.009.244-.016a2 2 0 0 1 1.523.583l9.758 9.758a2 2 0 0 1 .583 1.522 4.89 4.89 0 0 1-.01.165C24.427 20.637 19.726 25 14.006 25z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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