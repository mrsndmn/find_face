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
var id = 'share_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="share_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M.322 18.25C1.848 11.688 5.832 8.174 12.1 7.87V4.402a1.317 1.317 0 0 1 2.17-1.004l8.939 7.598a1.317 1.317 0 0 1 0 2.008l-8.939 7.598a1.317 1.317 0 0 1-2.17-1.004V16.16c-4.647.12-7.916 1.19-9.836 3.153A1.15 1.15 0 0 1 .322 18.25zM13 9.65c-5.262 0-8.669 2.308-10.358 7.055C5.096 15.124 8.555 14.35 13 14.35h.9v4.204L21.61 12 13.9 5.446V9.65H13z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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