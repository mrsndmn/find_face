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
var id = 'play_speed_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="play_speed_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0 1 11 4.07zM5.69 7.1L4.26 5.68A9.949 9.949 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM2.05 13c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 0 1 4.07 13H2.05zM11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.42 1.43A9.981 9.981 0 0 0 11 21.95zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12zM10.688 8.576l4.746 2.736a.792.792 0 0 1 0 1.372l-4.746 2.737a.792.792 0 0 1-1.188-.686V9.262a.792.792 0 0 1 1.188-.686z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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