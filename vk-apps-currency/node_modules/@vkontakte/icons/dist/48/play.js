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

var viewBox = '0 0 48 48';
var id = 'play_48';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="play_48"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z" /><path d="M14.4 8.764l24.02 13.85a1.6 1.6 0 0 1 0 2.773L14.4 39.237A1.6 1.6 0 0 1 12 37.85v-27.7a1.6 1.6 0 0 1 2.4-1.386z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 48,
    height: !isNaN(props.height) ? +props.height : 48
  }));
}

var _default = Icon;
exports.default = _default;