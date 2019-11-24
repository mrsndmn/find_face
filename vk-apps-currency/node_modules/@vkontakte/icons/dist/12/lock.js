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

var viewBox = '0 0 12 12';
var id = 'lock_12';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="lock_12"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z" /><path fill="currentColor" d="M3 5V3.497a3 3 0 0 1 6-.002V5h.539c.334 0 .455.035.577.1a.681.681 0 0 1 .284.284c.065.122.1.243.1.577v4.078c0 .334-.035.455-.1.577a.681.681 0 0 1-.284.284c-.122.065-.243.1-.577.1H2.46c-.334 0-.455-.035-.577-.1a.681.681 0 0 1-.284-.284c-.065-.122-.1-.243-.1-.577V5.96c0-.334.035-.455.1-.577a.681.681 0 0 1 .284-.284c.122-.065.243-.1.577-.1H3zm3-3a1.5 1.5 0 0 0-1.5 1.5V5h3V3.5A1.5 1.5 0 0 0 6 2z" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 12,
    height: !isNaN(props.height) ? +props.height : 12
  }));
}

var _default = Icon;
exports.default = _default;