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
var id = 'discussions_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="discussions_32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z" /><path d="M24.998 8.67v7.317c0 2.22-1.8 4.02-4.02 4.02H8.998v1.99c0 1.11.9 2.01 2.01 2.01h12.656l4.19 4.19a.67.67 0 0 0 1.144-.475V10.68c0-1.11-.9-2.01-2.01-2.01h-1.99zM20.32 4H5.01C3.9 4 3 4.9 3 6.01v15.709a.67.67 0 0 0 1.144.474l4.19-4.19H20.99c1.11 0 2.01-.9 2.01-2.01V6.68C23 5.2 21.8 4 20.32 4z" fill="currentColor" /></g></symbol>';

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