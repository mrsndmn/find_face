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
var id = 'fullscreen_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="fullscreen_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M10.5 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 2 0v2.072l3.363-3.365a1 1 0 0 1 1.414 0l.016.016a1 1 0 0 1 0 1.414L7.429 18H9.5a1 1 0 0 1 1 1zM18 7.428l-3.363 3.365a1 1 0 0 1-1.414 0l-.016-.016a1 1 0 0 1 0-1.414L16.571 6H14.5a1 1 0 0 1 0-2H19a1 1 0 0 1 1 1v4.5a1 1 0 0 1-2 0V7.428z" fill="currentColor" /></g></symbol>';

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