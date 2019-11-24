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

var viewBox = '0 0 20 20';
var id = 'globe_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="globe_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M16.71 8h-3.374a12.263 12.263 0 0 1 0 4h3.374c.189-.634.29-1.305.29-2 0-.695-.101-1.366-.29-2zm-.646-1.5a7.01 7.01 0 0 0-4.556-3.337A14.352 14.352 0 0 1 12.993 6.5h3.07zM3.29 8A7.001 7.001 0 0 0 3 10c0 .695.101 1.366.29 2h3.374a12.263 12.263 0 0 1 0-4H3.29zm.646-1.5h3.071c.333-1.13.828-2.243 1.485-3.337A7.01 7.01 0 0 0 3.936 6.5zM11.813 8H8.187a10.767 10.767 0 0 0 0 4h3.626a10.767 10.767 0 0 0 0-4zm-.393-1.5A13.333 13.333 0 0 0 10 3.576c-.616.965-1.09 1.94-1.42 2.924h2.84zm4.644 7h-3.071a14.352 14.352 0 0 1-1.485 3.337 7.01 7.01 0 0 0 4.556-3.337zm-12.128 0a7.01 7.01 0 0 0 4.556 3.337A14.352 14.352 0 0 1 7.007 13.5h-3.07zm7.484 0H8.58c.33.985.804 1.959 1.42 2.924.616-.965 1.09-1.94 1.42-2.924zM10 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;