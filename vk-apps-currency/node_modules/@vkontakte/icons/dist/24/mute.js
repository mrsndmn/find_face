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
var id = 'mute_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="mute_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M8.695 8.105L5.301 4.71a1 1 0 0 1 1.414-1.415L20.7 17.285a1 1 0 0 1-1.414 1.415L16 15.41V20a1 1 0 0 1-1 1c-.641 0-1.258-.25-1.72-.695L7.79 15H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2.765l.93-.895zm2.88-2.77l1.704-1.642A2.481 2.481 0 0 1 15 3a1 1 0 0 1 1 1v5.76l-4.426-4.426z" fill="currentColor" /></g></symbol>';

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