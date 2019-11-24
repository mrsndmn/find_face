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
var id = 'services_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="services_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M14.5 21h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5zM11 19.5v-5A1.5 1.5 0 0 0 9.5 13h-5A1.5 1.5 0 0 0 3 14.5v5A1.5 1.5 0 0 0 4.5 21h5a1.5 1.5 0 0 0 1.5-1.5zM4.5 11h5A1.5 1.5 0 0 0 11 9.5v-5A1.5 1.5 0 0 0 9.5 3h-5A1.5 1.5 0 0 0 3 4.5v5A1.5 1.5 0 0 0 4.5 11zm7.56-2.6l3.54 3.54a1.5 1.5 0 0 0 2.12 0l3.54-3.538a1.5 1.5 0 0 0 0-2.123l-3.54-3.531a1.5 1.5 0 0 0-2.12 0l-3.54 3.531a1.5 1.5 0 0 0 0 2.123z" fill="currentColor" /></g></symbol>';

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