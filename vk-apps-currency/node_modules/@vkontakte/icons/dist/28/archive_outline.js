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
var id = 'archive_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="archive_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21.5 4A3.5 3.5 0 0 1 25 7.5v2a1.5 1.5 0 0 1-1.5 1.5H23v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-9h-.5A1.5 1.5 0 0 1 3 9.5v-2A3.5 3.5 0 0 1 6.5 4h15zm-.5 7H7v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9zm-4 2.5a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zM21.5 6h-15A1.5 1.5 0 0 0 5 7.5V9h18V7.5A1.5 1.5 0 0 0 21.5 6z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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