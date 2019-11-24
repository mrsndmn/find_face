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
var id = 'video_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="video_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M6 3h11a3 3 0 0 1 3 3v12.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm.75 3a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1A.75.75 0 0 0 7.75 6h-1zm8.5 0a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-1zm-8.5 10a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-1zm8.5 0a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-1zm-8.5-5a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-1zm8.5 0a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-1z" fill="currentColor" /></g></symbol>';

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