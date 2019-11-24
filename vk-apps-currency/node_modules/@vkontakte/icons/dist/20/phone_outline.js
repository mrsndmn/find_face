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
var id = 'phone_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="phone_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".1" d="M0 0h20v20H0z" /><path d="M11.808 12.674l-.555.555a.838.838 0 0 1-.882.195c-.601-.222-1.322-.76-2.178-1.616-.857-.857-1.395-1.578-1.615-2.18a.838.838 0 0 1 .193-.881l.556-.555c.914-.914.997-2.35.197-3.299l-.651-.774c-.635-.755-1.783-.831-2.566-.165a2.207 2.207 0 0 0-.755 1.471c-.319 2.366.834 4.875 3.49 7.533 2.658 2.657 5.166 3.809 7.544 3.489a2.206 2.206 0 0 0 1.459-.752c.667-.784.59-1.933-.164-2.568l-.774-.652c-.95-.8-2.385-.715-3.3.2zm-2.555-1.927c.513.512.945.872 1.278 1.083l.216-.216c1.456-1.457 3.77-1.595 5.327-.286l.773.651c1.402 1.18 1.538 3.282.333 4.697-.623.72-1.502 1.173-2.394 1.257-2.916.393-5.852-.963-8.804-3.915-2.95-2.95-4.308-5.887-3.924-8.729.027-.298.086-.581.18-.86a3.716 3.716 0 0 1 1.097-1.618c1.406-1.196 3.507-1.059 4.686.343l.65.772c1.31 1.555 1.173 3.87-.284 5.328l-.216.215c.21.333.57.765 1.082 1.278z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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