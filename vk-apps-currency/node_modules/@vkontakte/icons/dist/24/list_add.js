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
var id = 'list_add_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="list_add_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M14 11c0-.552-.456-1-1.002-1H3.002A.999.999 0 0 0 2 11c0 .552.456 1 1.002 1h9.996A.999.999 0 0 0 14 11zm0-4c0-.552-.456-1-1.002-1H3.002A.999.999 0 0 0 2 7c0 .552.456 1 1.002 1h9.996A.999.999 0 0 0 14 7zm4 7v-2.99a1 1 0 1 0-2 0V14h-2.99a1 1 0 1 0 0 2H16v2.99a1 1 0 1 0 2 0V16h2.99a1 1 0 1 0 0-2H18zM2 15c0 .552.453 1 .997 1h6.006c.55 0 .997-.444.997-1 0-.552-.453-1-.997-1H2.997A.996.996 0 0 0 2 15z" fill="currentColor" /></g></symbol>';

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