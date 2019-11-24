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
var id = 'bug_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bug_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M19 8h-1.81a5.985 5.985 0 0 0-1.82-1.96l.925-.925a.997.997 0 1 0-1.41-1.41L13.42 5.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L9.117 3.703a1 1 0 0 0-1.414 1.414l.917.923C7.88 6.55 7.26 7.22 6.81 8H5a1 1 0 1 0 0 2h1.09c-.05.33-.09.66-.09 1v1H5a1 1 0 0 0 0 2h1v1c0 .34.04.67.09 1H5a1 1 0 0 0 0 2h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19a1 1 0 0 0 0-2h-1.09c.05-.33.09-.66.09-1v-1h1a1 1 0 0 0 0-2h-1v-1c0-.34-.04-.67-.09-1H19a1 1 0 0 0 0-2zm-6 8h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0-4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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