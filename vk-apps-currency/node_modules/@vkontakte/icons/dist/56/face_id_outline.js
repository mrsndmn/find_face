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
var id = 'face_id_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="face_id_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M47.5 36a1.5 1.5 0 0 1 1.5 1.5v2.95c0 2.461-.235 3.678-.912 4.944a6.497 6.497 0 0 1-2.694 2.694c-1.266.677-2.483.912-4.945.912H37.5a1.5 1.5 0 0 1 0-3h2.95c2.008 0 2.757-.145 3.529-.557a3.498 3.498 0 0 0 1.464-1.464c.412-.772.557-1.52.557-3.53V37.5a1.5 1.5 0 0 1 1.5-1.5zm-39 0a1.5 1.5 0 0 1 1.5 1.5v2.95c0 2.008.145 2.757.557 3.529.34.635.83 1.124 1.464 1.464.772.412 1.52.557 3.53.557H18.5a1.5 1.5 0 0 1 0 3h-2.95c-2.461 0-3.678-.235-4.944-.912a6.497 6.497 0 0 1-2.694-2.694C7.235 44.128 7 42.91 7 40.449V37.5A1.5 1.5 0 0 1 8.5 36zm13.69-.752A10.443 10.443 0 0 0 28 37c2.095 0 4.095-.613 5.802-1.747a1.5 1.5 0 1 1 1.66 2.499A13.442 13.442 0 0 1 28 40c-2.695 0-5.275-.793-7.472-2.255a1.5 1.5 0 0 1 1.662-2.497zM28.5 19a1.5 1.5 0 0 1 1.5 1.5V28a4 4 0 0 1-4 4 1.5 1.5 0 0 1 0-3 1 1 0 0 0 .993-.883L27 28v-7.5a1.5 1.5 0 0 1 1.5-1.5zm-9 0a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5zm17 0a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5zm3.95-12c2.461 0 3.678.235 4.944.912a6.497 6.497 0 0 1 2.694 2.694c.677 1.266.912 2.483.912 4.945V18.5a1.5 1.5 0 0 1-3 0v-2.95c0-2.008-.145-2.757-.557-3.529a3.498 3.498 0 0 0-1.464-1.464c-.772-.412-1.52-.557-3.53-.557H37.5a1.5 1.5 0 0 1 0-3h2.95zM18.5 7a1.5 1.5 0 0 1 0 3h-2.95c-2.008 0-2.757.145-3.529.557a3.498 3.498 0 0 0-1.464 1.464c-.412.772-.557 1.52-.557 3.53V18.5a1.5 1.5 0 0 1-3 0v-2.95c0-2.461.235-3.678.912-4.944a6.497 6.497 0 0 1 2.694-2.694C11.872 7.235 13.09 7 15.551 7H18.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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