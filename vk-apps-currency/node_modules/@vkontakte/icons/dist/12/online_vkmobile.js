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

var viewBox = '0 0 9 13';
var id = 'online_vkmobile_12';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 13" id="online_vkmobile_12"><g fill="none" fill-rule="evenodd"><path d="M0 0h8v12H0z" /><path d="M2.517 10.745c-.342 1.377.171 1.662 1.09.657l3.856-4.431c.893-1.09.67-1.964-.616-2.183l-1.86-.344A.2.2 0 0 1 4.83 4.2l.716-2.953C5.888-.138 5.317-.389 4.46.593a525.767 525.767 0 0 1-2.807 3.146c-.223.248-.583.634-1.078 1.158-1.086 1.205-.514 2.078.741 2.297l1.778.319a.2.2 0 0 1 .159.244l-.735 2.988z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 9,
    height: !isNaN(props.height) ? +props.height : 13
  }));
}

var _default = Icon;
exports.default = _default;