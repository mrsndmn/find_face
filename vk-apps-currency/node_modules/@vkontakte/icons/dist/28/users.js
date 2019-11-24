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

var viewBox = '0 0 28 28';
var id = 'users_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M22.5 10c0-1.934-1.566-3.5-3.5-3.5a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5zm-6.17 5.293A12.72 12.72 0 0 1 19 15c2.47 0 7 .857 7 4.286 0 1.5-.412 1.714-1.235 1.714h-7.01c.163-.487.245-1.06.245-1.714 0-1.69-.627-3.009-1.67-3.993zM12.5 10c0 1.934-1.566 3.5-3.5 3.5A3.499 3.499 0 0 1 5.5 10c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5zM2 19.286C2 15.857 6.53 15 9 15c2.47 0 7 .857 7 4.286 0 1.5-.412 1.714-1.235 1.714H3.235C2.412 21 2 20.786 2 19.286z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;