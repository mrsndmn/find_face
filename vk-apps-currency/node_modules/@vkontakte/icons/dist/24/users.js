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
var id = 'users_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="users_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M14.829 12.724A11.034 11.034 0 0 1 17 12.5c2.294 0 6.5.857 6.5 4.286 0 1.5-.382 1.714-1.147 1.714h-6.09c.158-.489.237-1.062.237-1.714 0-1.723-.631-3.067-1.671-4.062zM1.5 16.786C1.5 13.357 5.706 12.5 8 12.5c2.294 0 6.5.857 6.5 4.286 0 1.5-.382 1.714-1.147 1.714H2.647c-.765 0-1.147-.214-1.147-1.714zM11 8a3 3 0 1 1-6 0 3 3 0 1 1 6 0zm9 0a3 3 0 1 1-6 0 3 3 0 1 1 6 0z" fill="currentColor" /></g></symbol>';

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