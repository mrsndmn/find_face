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
var id = 'unpin_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="unpin_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M15.498 13.083l4.701 4.702a1 1 0 0 1-1.414 1.414l-3.287-3.287v2.85a.72.72 0 0 1-1.229.509l-3.887-3.887-4.748 4.748a1.25 1.25 0 1 1-1.768-1.767l4.748-4.749L4.727 9.73a.72.72 0 0 1 .51-1.229h2.851l-3.29-3.29a1 1 0 0 1 1.414-1.415L10.917 8.5h.002l4.58 4.58v.003zm1.124-1.707l-4-4L14.498 5.5V3.69a.7.7 0 0 1 1.195-.495l5.11 5.11a.7.7 0 0 1-.495 1.195h-1.81l-1.876 1.876z" fill="currentColor" /></g></symbol>';

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