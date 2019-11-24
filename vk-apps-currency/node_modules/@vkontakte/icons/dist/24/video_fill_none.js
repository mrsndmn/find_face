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
var id = 'video_fill_none_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="video_fill_none_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M5.846 4h12.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v8.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H5.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 2.4 18.464c-.262-.489-.401-.974-.401-2.31v-8.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 3.536 4.4C4.024 4.139 4.509 4 5.845 4zm-.564 3.5c-.446 0-.607.046-.77.134a.909.909 0 0 0-.378.378c-.088.163-.134.324-.134.77v6.436c0 .446.046.607.134.77.087.163.215.291.378.378.163.088.324.134.77.134h13.436c.446 0 .607-.046.77-.134a.909.909 0 0 0 .378-.378c.088-.163.134-.324.134-.77V8.782c0-.446-.046-.607-.134-.77a.909.909 0 0 0-.378-.378c-.163-.088-.324-.134-.77-.134H5.282z" fill="currentColor" /></g></symbol>';

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