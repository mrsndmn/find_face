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
var id = 'followers_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="followers_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4.838 5.03c.271.012.495.027.67.045 7.036.702 12.64 6.267 13.403 13.285.023.205.042.472.058.8a.8.8 0 0 1-.799.84h-1.402a.8.8 0 0 1-.799-.756 11.1 11.1 0 0 0-.054-.683c-.667-5.575-5.154-9.975-10.77-10.507a9.438 9.438 0 0 0-.387-.027A.8.8 0 0 1 4 7.228v-1.4a.8.8 0 0 1 .838-.799zm.02 5.03c.379.027.588.044.628.05a10.008 10.008 0 0 1 8.355 8.107c.042.232.078.539.108.921a.8.8 0 0 1-.798.862h-1.254a.8.8 0 0 1-.797-.732 5.708 5.708 0 0 0-.047-.404 7.148 7.148 0 0 0-5.912-5.916 37.963 37.963 0 0 0-.404-.033.8.8 0 0 1-.737-.798v-1.26a.8.8 0 0 1 .857-.797zM8.118 20H4.8a.8.8 0 0 1-.8-.8v-3.324a.8.8 0 0 1 .994-.777 5.007 5.007 0 0 1 3.864 3.713c.018.075.035.163.051.264a.8.8 0 0 1-.79.924z" fill="currentColor" /></g></symbol>';

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