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

var viewBox = '0 0 56 56';
var id = 'shuffle_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="shuffle_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M42.817 13.438l5.545 5.53a1.5 1.5 0 0 1 0 2.124l-5.545 5.53a1.5 1.5 0 0 1-2.119-2.124l3.006-2.998H35.6c-2.656 0-4.755 1.886-8.935 7.5 4.18 5.614 6.279 7.5 8.935 7.5h8.044l-2.946-2.938a1.5 1.5 0 0 1 2.119-2.124l5.545 5.53a1.5 1.5 0 0 1 0 2.124l-5.545 5.53a1.5 1.5 0 0 1-2.119-2.124l3.006-2.998H35.6c-3.873 0-6.32-2.047-10.8-7.984C20.32 37.453 17.874 39.5 14 39.5H8a1.5 1.5 0 0 1 0-3h6c2.656 0 4.755-1.886 8.934-7.498C18.755 23.386 16.656 21.5 14 21.5H8a1.5 1.5 0 0 1 0-3h6c3.873 0 6.32 2.047 10.8 7.984 4.48-5.937 6.927-7.984 10.8-7.984h8.044l-2.946-2.938a1.5 1.5 0 0 1 2.119-2.124z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;