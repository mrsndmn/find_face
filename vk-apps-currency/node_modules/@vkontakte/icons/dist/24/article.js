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
var id = 'article_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" id="article_24"><defs><path d="M20 11a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h16zm0-5.5a1 1 0 0 1 1 1V7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h16zM4 19a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H4z" id="article_24_a" /></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><use fill="currentColor" fill-rule="nonzero" xlink:href="#article_24_a" /></g></symbol>';

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