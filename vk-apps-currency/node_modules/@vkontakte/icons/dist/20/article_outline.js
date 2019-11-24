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
var id = 'article_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="article_outline_20"><defs><path d="M17.5 5.25a.752.752 0 0 0-.744-.75H3.244a.745.745 0 0 0-.744.75c0 .414.341.75.744.75h13.512c.411 0 .744-.333.744-.75zm0 5a.752.752 0 0 0-.744-.75H3.244a.745.745 0 0 0-.744.75c0 .414.341.75.744.75h13.512c.411 0 .744-.333.744-.75zm-15 5c0 .414.337.75.755.75h8.99a.75.75 0 0 0 .755-.75.752.752 0 0 0-.755-.75h-8.99a.75.75 0 0 0-.755.75z" id="article_outline_20_a" /></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><use fill="currentColor" fill-rule="nonzero" xlink:href="#article_outline_20_a" /></g></symbol>';

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