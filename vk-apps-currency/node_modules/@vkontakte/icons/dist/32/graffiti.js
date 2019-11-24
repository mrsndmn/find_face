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

var viewBox = '0 0 32 32';
var id = 'graffiti_32';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="graffiti_32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z" /><path d="M12.073 16.164L24.115 4.585a2.176 2.176 0 0 1 3.047.03l.22.22c.838.838.852 2.193.03 3.047L16.014 19.738a6.405 6.405 0 0 0-3.941-3.574zm-1.943 1.3c2.656 0 4.8 2.144 4.8 4.8 0 3.536-2.864 6.4-6.4 6.4-2.416 0-4.928-1.248-6.4-3.2 1.344 0 3.2-1.104 3.2-3.2 0-2.656 2.144-4.8 4.8-4.8z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 32,
    height: !isNaN(props.height) ? +props.height : 32
  }));
}

var _default = Icon;
exports.default = _default;