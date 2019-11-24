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
var id = 'story_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="story_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M8.297 3.5h11.406A4.797 4.797 0 0 1 24.5 8.297v11.406a4.797 4.797 0 0 1-4.797 4.797H8.297A4.797 4.797 0 0 1 3.5 19.703V8.297A4.797 4.797 0 0 1 8.297 3.5zM8.25 14A5.752 5.752 0 0 0 14 19.75 5.752 5.752 0 0 0 19.75 14 5.752 5.752 0 0 0 14 8.25 5.752 5.752 0 0 0 8.25 14zm1.998 0a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0z" fill="currentColor" /></g></symbol>';

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