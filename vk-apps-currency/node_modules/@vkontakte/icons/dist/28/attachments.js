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
var id = 'attachments_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="attachments_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M23 21.95V9.487c0-1.56-.162-2.126-.467-2.696a3.18 3.18 0 0 0-1.324-1.324C20.64 5.162 20.073 5 18.513 5H7.05A2.5 2.5 0 0 1 9.5 3H21a4 4 0 0 1 4 4v12.5a2.5 2.5 0 0 1-2 2.45zM18.5 7h-14A2.5 2.5 0 0 0 2 9.5v14A2.5 2.5 0 0 0 4.5 26h14a2.5 2.5 0 0 0 2.5-2.5v-14A2.5 2.5 0 0 0 18.5 7zM8 17.5l2.5 3.01L14 16l3.897 5.196a.502.502 0 0 1-.402.804H5.527a.502.502 0 0 1-.396-.811L8 17.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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