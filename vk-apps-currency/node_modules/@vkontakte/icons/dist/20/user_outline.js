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
var id = 'user_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="user_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".1" d="M0 0h20v20H0z" /><path d="M12.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 1 0 5 0zM14 5a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4zM4 15.5c0 .715.358 1 1 1h10c.642 0 1-.285 1-1 0-2.333-2.567-3.5-6-3.5s-6 1.167-6 3.5zm-1.5 0c0-3.485 3.333-5 7.5-5s7.5 1.515 7.5 5c0 1.628-1.095 2.5-2.5 2.5H5c-1.405 0-2.5-.872-2.5-2.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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