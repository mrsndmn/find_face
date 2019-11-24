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
var id = 'user_add_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user_add_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.85 7.95A2.849 2.849 0 0 0 16 5.1a2.849 2.849 0 0 0-2.85 2.85A2.849 2.849 0 0 0 16 10.8a2.849 2.849 0 0 0 2.85-2.85zm1.8 0A4.649 4.649 0 0 1 16 12.6a4.649 4.649 0 0 1-4.65-4.65A4.649 4.649 0 0 1 16 3.3a4.649 4.649 0 0 1 4.65 4.65zM9.9 18.429c0 .768-.09.671.335.671h11.53c.426 0 .335.097.335-.671 0-1.893-2.778-3.029-6.1-3.029-3.322 0-6.1 1.136-6.1 3.029zm-4-8.329h2.7a.9.9 0 1 1 0 1.8H5.9v2.7a.9.9 0 1 1-1.8 0v-2.7H1.4a.9.9 0 1 1 0-1.8h2.7V7.4a.9.9 0 1 1 1.8 0v2.7zm2.2 8.329c0-3.327 3.673-4.829 7.9-4.829s7.9 1.502 7.9 4.829c0 1.735-.686 2.471-2.135 2.471h-11.53c-1.45 0-2.135-.736-2.135-2.471z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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