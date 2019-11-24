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
var id = 'comment_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M13.766 17.446a1.4 1.4 0 0 1 .922-.346H18.5c1.003 0 1.6-.597 1.6-1.6v-8c0-1.003-.597-1.6-1.6-1.6h-12c-1.003 0-1.6.597-1.6 1.6v8c0 1.003.597 1.6 1.6 1.6h2.499c.7.202.7.202.901.901v2.829l3.866-3.384zm-4.931 5.086C8.363 22.178 8.1 21.554 8.1 21v-2.1H6.5c-1.997 0-3.4-1.403-3.4-3.4v-8c0-1.997 1.403-3.4 3.4-3.4h12c1.997 0 3.4 1.403 3.4 3.4v8c0 1.997-1.403 3.4-3.4 3.4h-3.662l-3.725 3.26c-.732.718-1.589.89-2.278.372z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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