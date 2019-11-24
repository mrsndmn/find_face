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
var id = 'report_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="report_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.379 2a2.5 2.5 0 0 1 1.767.732l6.122 6.122A2.5 2.5 0 0 1 26 10.62v6.758a2.5 2.5 0 0 1-.732 1.767l-6.122 6.122A2.5 2.5 0 0 1 17.38 26H10.62a2.5 2.5 0 0 1-1.767-.732l-6.122-6.122A2.5 2.5 0 0 1 2 17.38V10.62a2.5 2.5 0 0 1 .732-1.767l6.122-6.122A2.5 2.5 0 0 1 10.62 2h6.758zm0 2H10.62a.5.5 0 0 0-.353.146l-6.122 6.122A.5.5 0 0 0 4 10.62v6.758a.5.5 0 0 0 .146.353l6.122 6.122a.5.5 0 0 0 .353.146h6.758a.5.5 0 0 0 .353-.146l6.122-6.122A.5.5 0 0 0 24 17.38V10.62a.5.5 0 0 0-.146-.353l-6.122-6.122A.5.5 0 0 0 17.38 4zM14 16.8l.123.006A1.2 1.2 0 0 1 14 19.2l-.123-.006A1.2 1.2 0 0 1 14 16.8zM14 8a1 1 0 0 1 .993.883L15 9v5a1 1 0 0 1-1.993.117L13 14V9a1 1 0 0 1 1-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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