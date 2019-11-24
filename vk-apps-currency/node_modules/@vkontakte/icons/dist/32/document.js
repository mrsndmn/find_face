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

var viewBox = '0 0 32 32';
var id = 'document_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="document_32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z" /><path d="M4.498 7.003V24a4 4 0 0 0 4 4L23 28.003A4 4 0 0 0 27 24l-.012-11.893c-.001-.707-.282-1.384-.782-1.884l-6.438-6.439c-.5-.5-1.179-.78-1.886-.78H8.498a4 4 0 0 0-4 4zm13.185-1.317l5.634 5.631a.4.4 0 0 1-.283.683h-5.367a.667.667 0 0 1-.667-.667V5.97a.4.4 0 0 1 .683-.283z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 32,
    height: !isNaN(props.height) ? +props.height : 32
  }));
}

var _default = Icon;
exports.default = _default;