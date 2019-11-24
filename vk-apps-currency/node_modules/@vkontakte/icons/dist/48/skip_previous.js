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

var viewBox = '0 0 48 48';
var id = 'skip_previous_48';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="skip_previous_48"><g fill="none" fill-rule="evenodd"><path d="M48 0H0v48h48z" /><path d="M24 22.679v-5.87a1.2 1.2 0 0 0-1.792-1.045L9.51 22.956a1.2 1.2 0 0 0 0 2.089l12.697 7.192a1.2 1.2 0 0 0 1.791-1.044V25.32l12.21 6.916A1.2 1.2 0 0 0 38 31.192V16.807a1.2 1.2 0 0 0-1.791-1.044l-12.21 6.916z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 48,
    height: !isNaN(props.height) ? +props.height : 48
  }));
}

var _default = Icon;
exports.default = _default;