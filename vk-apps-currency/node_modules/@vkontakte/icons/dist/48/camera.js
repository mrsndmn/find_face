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
var id = 'camera_48';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="camera_48"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z" /><path d="M10.364 12h.909c1.36 0 2.84-.993 3.568-1.891.728-.898 1.396-1.729 1.436-1.777C17.07 7.402 17.878 7 19.257 7H24v33H11.273C7.256 40 4 36.816 4 32.889V19.11C4 14.667 6 12 10.364 12zm27.272 0h-.909c-1.36 0-2.84-.993-3.568-1.891-.728-.898-1.396-1.729-1.436-1.777C30.93 7.402 30.122 7 28.743 7H24v33h12.727C40.744 40 44 36.816 44 32.889V19.11C44 14.667 42 12 37.636 12zM15 25c0 4.968 4.032 9 9 9s9-4.032 9-9-4.032-9-9-9-9 4.032-9 9zm2.25 0A6.75 6.75 0 0 1 24 18.25 6.75 6.75 0 0 1 30.75 25 6.75 6.75 0 0 1 24 31.75 6.75 6.75 0 0 1 17.25 25z" fill="currentColor" /></g></symbol>';

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