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
var id = 'play_next_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="play_next_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9 10H3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm4-4H3a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2zM3 16a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H3zm16.62 1.092c0 .017-5.394 3.55-5.394 3.55-1.238.733-1.226.271-1.226-.795V12.03c0-1.05-.003-1.363 1.226-.63 0 .016 5.393 3.533 5.385 3.534 1.66.877 1.66 1.247.008 2.158z" fill="currentColor" /></g></symbol>';

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