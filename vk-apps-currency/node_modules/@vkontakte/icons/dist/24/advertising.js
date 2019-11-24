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
var id = 'advertising_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="advertising_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M6 15a4 4 0 1 1 0-8h6.359c.223 0 .304.023.385.067a.454.454 0 0 1 .19.189c.043.081.066.162.066.385v6.718c0 .223-.023.304-.067.385a.454.454 0 0 1-.189.19c-.081.043-.162.066-.385.066H10c0 .783.303 1.62.652 2.04a1.5 1.5 0 0 1-2.304 1.92C7.548 18.001 7 16.484 7 15H6zM20.805 4.524c.127.19.195.414.195.643v11.666a1.16 1.16 0 0 1-1.803.965l-3.881-2.587a.834.834 0 0 1-.206-.168.442.442 0 0 1-.084-.158.639.639 0 0 1-.025-.184L15 7.38c0-.152.008-.206.026-.265a.442.442 0 0 1 .084-.158.834.834 0 0 1 .206-.168l3.88-2.587a1.16 1.16 0 0 1 1.61.322z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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