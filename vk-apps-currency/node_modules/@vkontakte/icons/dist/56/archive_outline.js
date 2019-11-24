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

var viewBox = '0 0 56 56';
var id = 'archive_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="archive_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M44.5 18a1.5 1.5 0 0 1 1.5 1.5v21a7.5 7.5 0 0 1-7.5 7.5h-21a7.5 7.5 0 0 1-7.5-7.5v-21a1.5 1.5 0 0 1 1.5-1.5h33zM43 21H13v19.5a4.5 4.5 0 0 0 4.5 4.5h21a4.5 4.5 0 0 0 4.5-4.5V21zm-21.5 9h13a1.5 1.5 0 0 0 0-3h-13a1.5 1.5 0 0 0 0 3zm-9-22h31a6.5 6.5 0 0 1 6.5 6.5v4a2.5 2.5 0 0 1-2.5 2.5h-39A2.5 2.5 0 0 1 6 18.5v-4A6.5 6.5 0 0 1 12.5 8zM47 18v-3.5a3.5 3.5 0 0 0-3.5-3.5h-31A3.5 3.5 0 0 0 9 14.5V18h38z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;