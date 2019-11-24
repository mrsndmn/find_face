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
var id = 'muted_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="muted_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M7.655 4.84l2.857-2.344c.27 0 .488.218.488.488v5.201l2.596 2.596a.75.75 0 1 1-1.06 1.061L4.404 3.71a.75.75 0 1 1 1.06-1.06l2.191 2.19zm-2.965.657l6.31 6.31v1.701c0 .27-.218.488-.488.488l-3.635-3.489-2.88-.008A1 1 0 0 1 3 9.5V6.497a1 1 0 0 1 1-1h.69z" fill="currentColor" /></g></symbol>';

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