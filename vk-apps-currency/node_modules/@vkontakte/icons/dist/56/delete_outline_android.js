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
var id = 'delete_outline_android_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="delete_outline_android_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M30.932 4c.85 0 1.32.048 1.835.192.521.146.99.38 1.42.71.423.324.744.673 1.254 1.352l.897 1.196c.25.334.317.407.392.465.034.026.06.038.1.05.091.025.19.035.607.035H42.5a5.5 5.5 0 0 1 5.5 5.5v2.718c0 .633-.08 1.046-.31 1.478a2.409 2.409 0 0 1-.994.993c-.432.231-.845.311-1.478.311H45v22.744c0 3.567-.371 4.86-1.069 6.163a7.27 7.27 0 0 1-3.024 3.024C39.604 51.63 38.311 52 34.744 52H21.256c-3.567 0-4.86-.371-6.163-1.069a7.27 7.27 0 0 1-3.024-3.024C11.37 46.604 11 45.311 11 41.744V19h-.218c-.633 0-1.046-.08-1.478-.31a2.409 2.409 0 0 1-.993-.994C8.08 17.264 8 16.85 8 16.218V13.5A5.5 5.5 0 0 1 13.5 8h5.063c.417 0 .516-.01.606-.035a.264.264 0 0 0 .101-.05c.075-.058.142-.131.392-.465l.897-1.196c.51-.68.83-1.028 1.255-1.352a4.14 4.14 0 0 1 1.42-.71c.513-.144.984-.192 1.834-.192h5.864zM42 19H14v22.744c0 2.799.186 3.761.714 4.749a4.27 4.27 0 0 0 1.793 1.793c.988.528 1.95.714 4.749.714h13.488c2.799 0 3.761-.186 4.749-.714a4.27 4.27 0 0 0 1.793-1.793c.528-.988.714-1.95.714-4.749V19zM31.1 7h-6.032c-.6 0-.816.022-1.025.08a1.141 1.141 0 0 0-.405.203c-.171.132-.32.292-.679.771l-.897 1.196c-.4.534-.636.792-.967 1.046a3.26 3.26 0 0 1-1.115.558c-.402.112-.75.146-1.417.146H13.5a2.5 2.5 0 0 0-2.5 2.5V16h34v-2.5a2.5 2.5 0 0 0-2.5-2.5h-5.063c-.667 0-1.015-.034-1.417-.146a3.26 3.26 0 0 1-1.115-.558c-.331-.254-.567-.512-.967-1.046l-.897-1.196c-.36-.479-.508-.64-.68-.771a1.141 1.141 0 0 0-.404-.203c-.188-.052-.382-.075-.856-.08z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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