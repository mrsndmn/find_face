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
var id = 'document_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="document_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M5 5.5v16A3.5 3.5 0 0 0 8.5 25h12a3.5 3.5 0 0 0 3.5-3.5V10.246a2 2 0 0 0-.489-1.31L18.098 2.69A2 2 0 0 0 16.587 2H8.5A3.5 3.5 0 0 0 5 5.5zm11.597-.903l4.794 4.794a.35.35 0 0 1-.253.597l-4.645-.064a.5.5 0 0 1-.493-.5V4.845a.35.35 0 0 1 .597-.248z" fill="currentColor" /></g></symbol>';

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