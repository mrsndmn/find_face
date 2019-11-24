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
var id = 'work_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="work_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M13.5 6.5h1.125A2.375 2.375 0 0 1 17 8.875v5.75A2.375 2.375 0 0 1 14.625 17h-9.75A2.375 2.375 0 0 1 2.5 14.625v-5.75A2.375 2.375 0 0 1 4.875 6.5H6v-.75A2.75 2.75 0 0 1 8.75 3h2a2.75 2.75 0 0 1 2.75 2.75v.75zM4 8.875v5.75c0 .483.392.875.875.875h9.75a.875.875 0 0 0 .875-.875v-5.75A.875.875 0 0 0 14.625 8h-9.75A.875.875 0 0 0 4 8.875zM12 6.5v-.75c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v.75H12z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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