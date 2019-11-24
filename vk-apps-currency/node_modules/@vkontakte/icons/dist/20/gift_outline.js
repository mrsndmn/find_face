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
var id = 'gift_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="gift_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M10.75 7.996V10.5h4.21c.358 0 .52-.034.665-.112a.613.613 0 0 0 .26-.26c.077-.145.11-.306.11-.664v-.216a1.245 1.245 0 0 0-.619-1.081 1.245 1.245 0 0 0-.632-.17H10.75zm-1.5 0H5.257a1.245 1.245 0 0 0-1.082.62c-.11.19-.17.405-.17.632v.216c0 .358.034.52.112.665.06.114.145.198.259.26.146.077.307.111.665.111H9.25V7.996zm0 4.004H5.5v1.795c0 .903.064 1.233.245 1.572.148.277.36.49.638.638.34.181.67.245 1.572.245H9.25V12zm1.5 0v4.25h1.295c.903 0 1.233-.064 1.572-.245.277-.148.49-.36.638-.638.181-.34.245-.67.245-1.572V12h-3.75zM4 11.856a2.251 2.251 0 0 1-.331-.145c-.376-.2-.674-.5-.875-.875-.205-.383-.29-.784-.29-1.372v-.216a2.745 2.745 0 0 1 1.363-2.376c.239-.14.497-.242.766-.305C4.212 6.197 4 5.722 4 5.091 4 3.53 5.493 2.25 7.234 2.25c1.202 0 2.18.988 2.766 2.218.585-1.23 1.564-2.218 2.766-2.218C14.506 2.25 16 3.53 16 5.09c0 .632-.212 1.106-.633 1.477a2.758 2.758 0 0 1 2.129 2.681v.216c0 .588-.084.989-.29 1.372-.2.375-.499.674-.874.875a2.251 2.251 0 0 1-.332.145v1.94c0 1.128-.109 1.692-.423 2.279a3.021 3.021 0 0 1-1.252 1.252c-.587.314-1.15.423-2.28.423h-4.09c-1.13 0-1.693-.109-2.28-.423a3.021 3.021 0 0 1-1.252-1.252c-.314-.587-.423-1.15-.423-2.28v-1.939zm7.013-5.765c-.042.179.183.282 1.236.075 1.59-.313 2.251-.662 2.251-1.075 0-.677-.775-1.341-1.734-1.341-.66 0-1.49 1.21-1.753 2.34zm-2.026 0C8.724 4.959 7.895 3.75 7.234 3.75c-.96 0-1.734.664-1.734 1.34 0 .414.661.763 2.251 1.076 1.053.207 1.278.104 1.236-.075z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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