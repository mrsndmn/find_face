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
var id = 'market_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="market_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 3.5A2.5 2.5 0 0 0 9.5 6h5A2.5 2.5 0 0 0 12 3.5zM16.5 6h.35a3.25 3.25 0 0 1 3.239 2.98l.701 8.417A4.25 4.25 0 0 1 16.555 22h-9.11a4.25 4.25 0 0 1-4.235-4.603l.701-8.417A3.25 3.25 0 0 1 7.151 6H7.5a4.5 4.5 0 0 1 9 0zM7.15 8a1.25 1.25 0 0 0-1.246 1.146l-.7 8.417A2.25 2.25 0 0 0 7.444 20h9.11a2.25 2.25 0 0 0 2.242-2.437l-.701-8.417A1.25 1.25 0 0 0 16.85 8h-9.7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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