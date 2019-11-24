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
var id = 'discussions_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="discussions_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M19 7v5.985A3.015 3.015 0 0 1 15.985 16H7v1.492C7 18.325 7.675 19 8.508 19H18l3.142 3.142a.503.503 0 0 0 .858-.355V8.507C22 7.676 21.325 7 20.492 7H19zm-4.01-4H3.508C2.675 3 2 3.675 2 4.508v12.279a.502.502 0 0 0 .858.355L6 14h9.492c.833 0 1.508-.675 1.508-1.508V5.01C17 3.9 16.1 3 14.99 3z" fill="currentColor" /></g></symbol>';

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