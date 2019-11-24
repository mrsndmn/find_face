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
var id = 'money_transfer_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="money_transfer_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19 19v-2.927a.502.502 0 0 1 .824-.386l4.713 3.927a.503.503 0 0 1 0 .772l-4.713 3.927a.503.503 0 0 1-.824-.386V21H6.015A3.015 3.015 0 0 1 3 17.985V7.015A3.015 3.015 0 0 1 6.015 4h15.97A3.015 3.015 0 0 1 25 7.015v9.73l-2-1.666V13H5v4.995C5 18.55 5.45 19 6.005 19H19zm4-10V7.005C23 6.45 22.55 6 21.995 6H6.005C5.45 6 5 6.45 5 7.005V9h18z" fill="currentColor" /></g></symbol>';

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