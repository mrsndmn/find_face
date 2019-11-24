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

var viewBox = '0 0 16 16';
var id = 'search_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="search_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M14.743 13.574L10.91 9.74a5.426 5.426 0 0 0 1.05-3.232A5.532 5.532 0 0 0 6.46 1 5.436 5.436 0 0 0 1 6.468a5.532 5.532 0 0 0 5.5 5.508 5.408 5.408 0 0 0 3.242-1.061l.004-.003 3.83 3.831a.826.826 0 1 0 1.167-1.169zm-8.247-2.696a4.425 4.425 0 0 1-4.4-4.406 4.35 4.35 0 0 1 4.368-4.374 4.426 4.426 0 0 1 4.4 4.406 4.35 4.35 0 0 1-4.368 4.374z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;