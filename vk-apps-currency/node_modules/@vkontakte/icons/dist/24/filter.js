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
var id = 'filter_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="filter_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M6.17 7a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-8.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h2.17zm6 8a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h8.17zM15 17.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm-6-8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" fill="currentColor" /></g></symbol>';

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