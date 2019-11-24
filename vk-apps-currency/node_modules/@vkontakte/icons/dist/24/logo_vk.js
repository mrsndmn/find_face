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
var id = 'logo_vk_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logo_vk_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M21.461 6.726c.092-.465-.11-.726-.586-.726h-2.4c-.55 0-.752.242-.917.596 0 0-1.272 2.947-2.851 4.717-.507.573-.596.745-.876.745-.226 0-.33-.191-.33-.708V6.826c0-.633-.072-.826-.586-.826H9.094c-.295 0-.492.163-.492.4 0 .596.898.73.898 2.346v3.332c0 .67-.037.931-.348.931-.825 0-2.966-2.869-4.066-6.146C4.866 6.193 4.63 6 4.004 6H1.61a.587.587 0 0 0-.61.603c0 .651.751 3.668 3.702 7.708 1.979 2.718 4.75 4.189 7.095 4.189 1.43 0 1.704-.252 1.704-.867v-2.085c0-.521.202-.745.495-.745.33 0 .816.118 2.177 1.481 1.612 1.564 1.722 2.216 2.602 2.216h2.693c.275 0 .532-.13.532-.596 0-.614-.788-1.713-1.997-3.016-.495-.67-1.302-1.396-1.558-1.731-.367-.392-.257-.615 0-1.025 0 0 2.741-4.103 3.016-5.406z" fill="currentColor" /></g></symbol>';

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