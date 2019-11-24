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

var viewBox = '0 0 16 16';
var id = 'verified_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="verified_16"><path d="M5.823 14.822l-1.28.206a.824.824 0 0 1-.9-.52l-.463-1.212a.824.824 0 0 0-.476-.476l-1.212-.462a.824.824 0 0 1-.52-.9l.206-1.281a.824.824 0 0 0-.175-.65L.185 8.52a.824.824 0 0 1 0-1.04l.818-1.006a.824.824 0 0 0 .175-.65L.972 4.542a.824.824 0 0 1 .52-.9l1.212-.463a.824.824 0 0 0 .476-.476l.462-1.212a.824.824 0 0 1 .9-.52l1.281.206a.824.824 0 0 0 .65-.175L7.48.185a.824.824 0 0 1 1.04 0l1.006.818a.824.824 0 0 0 .65.175l1.281-.206a.824.824 0 0 1 .9.52l.463 1.212c.084.22.257.392.476.476l1.212.462c.365.14.582.515.52.9l-.206 1.281a.824.824 0 0 0 .175.65l.818 1.007a.824.824 0 0 1 0 1.04l-.818 1.006a.824.824 0 0 0-.175.65l.206 1.281a.824.824 0 0 1-.52.9l-1.212.463a.824.824 0 0 0-.476.476l-.462 1.212a.824.824 0 0 1-.9.52l-1.281-.206a.824.824 0 0 0-.65.175l-1.007.818a.824.824 0 0 1-1.04 0l-1.006-.818a.824.824 0 0 0-.65-.175zm-.502-7.135a.8.8 0 0 0-1.132 1.13l2.245 2.248a.8.8 0 0 0 1.132 0l4.495-4.494a.8.8 0 1 0-1.131-1.132L7 9.37 5.32 7.686z" fill="currentColor" fill-rule="evenodd" /></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;