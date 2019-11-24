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
var id = 'money_circle_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="money_circle_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.77-6.004a.4.4 0 0 0 .4-.4v-.45a.4.4 0 0 0-.4-.4h-2.772v-1.249h2.078c2.187 0 3.633-1.258 3.633-3.29 0-2.039-1.414-3.757-3.578-3.757H9.648a.4.4 0 0 0-.4.4v5.163H8.14a.4.4 0 0 0-.4.4v.668c0 .221.18.4.4.4h1.108v1.265H8.14a.4.4 0 0 0-.4.4v.45c0 .22.18.4.4.4h1.108v1.354c0 .22.179.4.4.4h.95a.4.4 0 0 0 .4-.4v-1.354h2.772zm-2.772-7.999h1.64c1.524 0 2.282.773 2.282 2 0 1.227-.758 2-2.282 2h-1.64v-4z" fill="currentColor" /></g></symbol>';

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