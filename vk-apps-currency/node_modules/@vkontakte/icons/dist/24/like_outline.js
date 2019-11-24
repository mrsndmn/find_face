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
var id = 'like_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="like_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M16.737 3.1A6.163 6.163 0 0 1 22.9 9.263c0 3.42-1.368 5.131-7.116 9.602L13.166 20.9a1.9 1.9 0 0 1-2.332 0l-2.618-2.036C2.468 14.395 1.1 12.682 1.1 9.263A6.163 6.163 0 0 1 7.263 3.1c1.783 0 3.37.818 4.737 2.395C13.367 3.918 14.954 3.1 16.737 3.1zM7.263 4.9A4.363 4.363 0 0 0 2.9 9.263c0 2.67 1.091 4.036 6.421 8.181l2.618 2.036a.1.1 0 0 0 .122 0l2.618-2.036c5.33-4.145 6.421-5.511 6.421-8.18A4.363 4.363 0 0 0 16.737 4.9c-1.466 0-2.785.826-3.997 2.578L12 8.548l-.74-1.07C10.048 5.726 8.729 4.9 7.263 4.9z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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