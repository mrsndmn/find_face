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
var id = 'fire_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="fire_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M7.456.05a.25.25 0 0 1 .393.255c-.035.157-.08.277-.133.36C5.828 3.578 6.658 5.33 7.93 5.52c1.317.194 2.28-.688 2.074-2.592L9.915 2.1a.23.23 0 0 1 .355-.216c.428.282.94.795 1.536 1.538C13.928 6.068 14.011 8.283 14 9.235 13.956 12.651 11.428 15 8 15 4.572 15 2 12.651 2 9.235 2.015 6.65 3.322 3.01 6.928.435c.135-.096.31-.225.528-.386z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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