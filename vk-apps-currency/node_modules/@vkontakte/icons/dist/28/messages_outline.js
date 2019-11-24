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
var id = 'messages_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="messages_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M7.096 24.36a1.179 1.179 0 0 1-1.3-1.733c.57-.994.984-1.845 1.248-2.557C5.271 18.46 4.25 16.304 4.25 14c0-4.859 4.5-8.75 10-8.75s10 3.891 10 8.75-4.5 8.75-10 8.75a11.41 11.41 0 0 1-2.307-.234c-1.172.732-2.786 1.342-4.847 1.843zm4.279-3.263a.75.75 0 0 1 .596-.11c.735.174 1.5.263 2.279.263 4.717 0 8.5-3.272 8.5-7.25s-3.783-7.25-8.5-7.25c-4.717 0-8.5 3.272-8.5 7.25 0 2.004.96 3.884 2.64 5.249a.75.75 0 0 1 .244.8c-.231.762-.622 1.65-1.171 2.667 1.71-.464 3.016-1.007 3.912-1.62z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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