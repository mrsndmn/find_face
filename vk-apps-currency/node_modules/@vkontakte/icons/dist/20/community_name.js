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

var viewBox = '0 0 20 20';
var id = 'community_name_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="community_name_20"><g fill-rule="nonzero" fill="none"><path d="M0 0h20v20H0z" /><path d="M13 5.5A.75.75 0 1 1 13 4h1.045c1.13 0 1.693.109 2.28.423.538.287.965.714 1.252 1.252.314.587.423 1.15.423 2.28v5.09c0 1.13-.109 1.693-.423 2.28a3.021 3.021 0 0 1-1.252 1.252c-.587.314-1.15.423-2.28.423h-8.09c-1.13 0-1.693-.109-2.28-.423a3.021 3.021 0 0 1-1.252-1.252c-.314-.587-.423-1.15-.423-2.28v-5.09c0-1.13.109-1.693.423-2.28a3.021 3.021 0 0 1 1.252-1.252C4.262 4.109 4.825 4 5.955 4H7a.75.75 0 0 1 0 1.5H5.955c-.903 0-1.233.064-1.572.245-.277.148-.49.36-.638.638-.181.34-.245.67-.245 1.572v5.09c0 .903.064 1.233.245 1.572.148.277.36.49.638.638.34.181.67.245 1.572.245h8.09c.903 0 1.233-.064 1.572-.245.277-.148.49-.36.638-.638.181-.34.245-.67.245-1.572v-5.09c0-.903-.064-1.233-.245-1.572a1.522 1.522 0 0 0-.638-.638c-.34-.181-.67-.245-1.572-.245H13zm-2.25-.25a.75.75 0 1 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0v2.5zm-4 3h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5zm0 3.25h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;