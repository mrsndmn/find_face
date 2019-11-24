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

var viewBox = '0 0 16 16';
var id = 'fire_verified_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="fire_verified_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M7.457.05a.25.25 0 0 1 .393.255c-.036.157-.08.277-.133.36-1.888 2.914-1.06 4.666.214 4.855 1.316.194 2.28-.688 2.074-2.592a406.7 406.7 0 0 1-.09-.829.23.23 0 0 1 .356-.216c.428.282.94.795 1.536 1.538C13.929 6.068 14.012 8.283 14 9.235 13.957 12.651 11.429 15 8 15s-6-2.349-6-5.765C2.015 6.65 3.322 3.01 6.928.435 7.063.34 7.24.21 7.457.05zM5.495 8.504a.7.7 0 0 0-.99.99l2 2a.7.7 0 0 0 .99 0l4-4a.7.7 0 1 0-.99-.99L7 10.01 5.495 8.505z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;