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
var id = 'voice_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="voice_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M11.002 18.938a8.004 8.004 0 0 1-6.68-5.683.9.9 0 1 1 1.728-.507 6.203 6.203 0 0 0 11.902-.005.9.9 0 0 1 1.728.505 8.004 8.004 0 0 1-6.682 5.69l.002.064V21.5a1 1 0 0 1-2 0v-2.498c0-.021 0-.043.002-.064zM12 2a4 4 0 0 1 4 4v5a4 4 0 1 1-8 0V6a4 4 0 0 1 4-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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