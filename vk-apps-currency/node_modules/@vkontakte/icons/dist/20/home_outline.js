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
var id = 'home_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="home_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M17.741 11.004a.95.95 0 0 0 .651-1.643l-7.604-7.149a1.15 1.15 0 0 0-1.576 0l-7.607 7.15a.95.95 0 0 0 .65 1.642h1.24v3.495a2.25 2.25 0 0 0 2.25 2.25H9.5v-3.995a.502.502 0 1 1 1.004 0v3.995h3.742a2.25 2.25 0 0 0 2.25-2.25v-3.495h1.246zM8 15.249H5.745a.75.75 0 0 1-.75-.75V9.504H3.644L10 3.53l6.353 5.974h-1.358v4.995a.75.75 0 0 1-.75.75h-2.242v-2.495a2.002 2.002 0 1 0-4.004 0v2.495z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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