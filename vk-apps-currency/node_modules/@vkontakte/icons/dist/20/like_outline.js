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
var id = 'like_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="like_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M13.409 3A5.091 5.091 0 0 1 18.5 8.091c0 2.683-1.023 4.044-5.374 7.428l-1.873 1.456a2.042 2.042 0 0 1-2.506 0l-1.873-1.456C2.524 12.135 1.5 10.774 1.5 8.09A5.091 5.091 0 0 1 6.591 3c1.263 0 2.41.491 3.409 1.432C10.999 3.491 12.146 3 13.409 3zm0 1.5c-1.042 0-1.981.491-2.835 1.507L10 6.691l-.574-.684C8.572 4.991 7.633 4.5 6.59 4.5A3.591 3.591 0 0 0 3 8.091c0 2.084.78 3.12 4.795 6.244l1.872 1.456c.196.152.47.152.666 0l1.872-1.456C16.22 11.21 17 10.175 17 8.09A3.591 3.591 0 0 0 13.409 4.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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