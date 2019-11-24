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

var viewBox = '0 0 24 34';
var id = 'mention_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 34" id="mention_24"><g fill="none" fill-rule="evenodd"><path d="M0 7h24v24H0z" /><path d="M12.007 29.869c-2.02 0-3.781-.408-5.287-1.224a8.532 8.532 0 0 1-3.489-3.476C2.411 23.668 2 21.916 2 19.915v-.724c0-1.993.428-3.761 1.284-5.306a9.043 9.043 0 0 1 3.607-3.601C8.441 9.428 10.211 9 12.204 9h.105c1.861 0 3.527.384 4.997 1.152 1.47.768 2.62 1.83 3.45 3.186.83 1.357 1.244 2.895 1.244 4.615v.659c0 1.176-.193 2.216-.58 3.12-.386.904-.925 1.609-1.619 2.113-.693.505-1.492.757-2.396.757-.816 0-1.519-.17-2.107-.513-.588-.342-.939-.79-1.053-1.343h-.132a2.13 2.13 0 0 1-.58.941c-.289.286-.642.51-1.059.672a3.578 3.578 0 0 1-1.31.243c-.72 0-1.347-.175-1.883-.526-.535-.351-.948-.852-1.238-1.501-.29-.65-.434-1.418-.434-2.304v-1.317c0-.86.147-1.61.441-2.252.294-.64.715-1.132 1.264-1.474.549-.343 1.192-.514 1.929-.514.65 0 1.22.16 1.712.48.491.321.816.74.974 1.258h.105v-.342c0-.351.097-.63.29-.836.193-.206.456-.31.79-.31.325 0 .584.104.777.31.193.206.29.485.29.836v5.267c0 .447.135.805.408 1.073.272.267.627.401 1.066.401.465 0 .873-.18 1.225-.54.35-.36.62-.87.81-1.534.188-.662.282-1.437.282-2.323v-.435c0-1.378-.327-2.611-.98-3.7-.655-1.088-1.563-1.94-2.726-2.554-1.163-.614-2.482-.922-3.957-.922h-.105c-1.597 0-3.01.351-4.24 1.054a7.292 7.292 0 0 0-2.863 2.969c-.68 1.277-1.02 2.745-1.02 4.404v.566c0 1.65.328 3.096.987 4.338a6.918 6.918 0 0 0 2.798 2.87c1.207.672 2.613 1.008 4.22 1.008h.105c.597 0 1.339-.066 2.225-.197.465-.062.768-.093.909-.093.254 0 .465.077.632.23.166.154.25.35.25.587s-.07.439-.211.605c-.14.167-.342.286-.606.356-.851.22-1.94.329-3.265.329h-.118zM9.9 19.968c0 .886.169 1.56.507 2.02.338.462.836.692 1.494.692.65 0 1.146-.222 1.488-.665.342-.443.514-1.086.514-1.929V19.02c0-.773-.183-1.383-.547-1.83-.364-.448-.858-.672-1.481-.672-.623 0-1.108.235-1.455.705s-.52 1.125-.52 1.968v.777z" fill="currentColor" /></g></symbol>';

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
    height: !isNaN(props.height) ? +props.height : 34
  }));
}

var _default = Icon;
exports.default = _default;