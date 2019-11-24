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

var viewBox = '0 0 32 32';
var id = 'money_transfer_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="money_transfer_32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z" /><path d="M28 18v-4H4v8a1 1 0 0 0 1 1h18v-3.93a.5.5 0 0 1 .81-.392l5.998 4.737a.5.5 0 0 1 0 .785l-5.998 4.737a.5.5 0 0 1-.81-.392V25H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v10.05a1 1 0 0 1-2 0V18zm0-9V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1h24z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 32,
    height: !isNaN(props.height) ? +props.height : 32
  }));
}

var _default = Icon;
exports.default = _default;