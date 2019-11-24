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

var viewBox = '0 0 32 32';
var id = 'gift_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="gift_32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z" /><path d="M27.996 13.002V15.5a1.5 1.5 0 0 1-1.5 1.5h-1.499v9.004a3 3 0 0 1-3 3H9.996a3 3 0 0 1-3-3V17h1.333H5.5A1.5 1.5 0 0 1 4 15.5v-2.498a3 3 0 0 1 3-3h17.996a3 3 0 0 1 3 3zM16.27 10H17v7h8v2h-8v10h-2V19H7v-2h8v-7h.723C11.787 9.941 7.33 8.623 7.33 6.669c0-2 2.667-4 4.667-3.334 1.333.445 2.666 2.666 3.999 6.665h.001c1.333-3.999 2.667-6.22 4-6.665 2-.666 4.666 1.334 4.666 3.334 0 1.954-4.456 3.272-8.392 3.331z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 32,
    height: !isNaN(props.height) ? +props.height : 32
  }));
}

var _default = Icon;
exports.default = _default;