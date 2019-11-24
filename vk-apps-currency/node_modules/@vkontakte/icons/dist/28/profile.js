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
var id = 'profile_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="profile_28"><path fill="currentColor" d="M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S19.523 4 14 4 4 8.477 4 14s4.477 10 10 10zm2.75-11.75c0-1.52-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75zm2 0c0 2.624-2.126 4.75-4.75 4.75s-4.75-2.126-4.75-4.75S11.376 7.5 14 7.5s4.75 2.126 4.75 4.75zM6.638 20.768c.471.512.996.975 1.564 1.38.687-1.367 3.049-2.17 5.798-2.17s5.11.803 5.798 2.17a10.056 10.056 0 0 0 1.564-1.38c-1.242-1.909-4.147-2.79-7.362-2.79s-6.12.881-7.362 2.79z" /></symbol>';

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