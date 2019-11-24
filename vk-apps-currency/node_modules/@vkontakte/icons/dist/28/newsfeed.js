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
var id = 'newsfeed_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="newsfeed_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M22.5 9v-.654c0-1.068-.073-1.449-.283-1.84a1.726 1.726 0 0 0-.723-.723c-.391-.21-.772-.283-1.84-.283H8.346c-1.068 0-1.449.073-1.84.283-.314.168-.555.409-.723.723-.21.391-.283.772-.283 1.84V9h17zm0 2h-17v8.654c0 1.068.073 1.449.283 1.84.168.314.409.555.723.723.391.21.772.283 1.84.283h11.308c1.068 0 1.449-.073 1.84-.283.314-.168.555-.409.723-.723.21-.391.283-.772.283-1.84V11zM8.346 3.5h11.308c1.37 0 2.063.134 2.783.519.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783v11.308c0 1.37-.134 2.063-.519 2.783a3.726 3.726 0 0 1-1.544 1.544c-.72.385-1.413.519-2.783.519H8.346c-1.37 0-2.063-.134-2.783-.519a3.726 3.726 0 0 1-1.544-1.544c-.385-.72-.519-1.413-.519-2.783V8.346c0-1.37.134-2.063.519-2.783A3.726 3.726 0 0 1 5.563 4.02c.72-.385 1.413-.519 2.783-.519z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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