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
var id = 'error_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="error_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM10.995 2h2.01a1 1 0 0 1 .999 1.036l-.417 11.434c-.011.305-.09.577-.222.804a1.415 1.415 0 0 1-.553.533A1.698 1.698 0 0 1 12 16c-.306 0-.58-.068-.812-.193a1.415 1.415 0 0 1-.553-.533 1.698 1.698 0 0 1-.222-.804L9.996 3.036a1 1 0 0 1 1-1.036z" fill="currentColor" /></g></symbol>';

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