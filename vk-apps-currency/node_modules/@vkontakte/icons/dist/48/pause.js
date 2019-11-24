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

var viewBox = '0 0 48 48';
var id = 'pause_48';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="pause_48"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z" /><path d="M13.424 8h5.152A2.424 2.424 0 0 1 21 10.424v27.152A2.424 2.424 0 0 1 18.576 40h-5.152A2.424 2.424 0 0 1 11 37.576V10.424A2.424 2.424 0 0 1 13.424 8zm16 0h5.152A2.424 2.424 0 0 1 37 10.424v27.152A2.424 2.424 0 0 1 34.576 40h-5.152A2.424 2.424 0 0 1 27 37.576V10.424A2.424 2.424 0 0 1 29.424 8z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 48,
    height: !isNaN(props.height) ? +props.height : 48
  }));
}

var _default = Icon;
exports.default = _default;