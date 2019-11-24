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
var id = 'calendar_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="calendar_outline_20"><g fill-rule="nonzero" fill="none"><path opacity=".527" d="M0 0h20v20H0z" /><path d="M13 4.5H7v.271c0 .165-.03.29-.087.396a.59.59 0 0 1-.246.246.816.816 0 0 1-.396.087H6.23a.816.816 0 0 1-.396-.087.59.59 0 0 1-.246-.246.816.816 0 0 1-.087-.396v-.264c-.573.021-.842.091-1.117.238-.277.148-.49.36-.638.638-.181.34-.245.67-.245 1.572V7.5h13v-.545c0-.903-.064-1.233-.245-1.572a1.522 1.522 0 0 0-.638-.638c-.275-.147-.544-.217-1.117-.238v.264c0 .165-.03.29-.087.396a.59.59 0 0 1-.246.246.816.816 0 0 1-.396.087h-.042a.816.816 0 0 1-.396-.087.59.59 0 0 1-.246-.246.816.816 0 0 1-.087-.396V4.5zM13 3v-.271c0-.165.03-.29.087-.396a.59.59 0 0 1 .246-.246.816.816 0 0 1 .396-.087h.042c.165 0 .29.03.396.087a.59.59 0 0 1 .246.246.816.816 0 0 1 .087.396v.278c.837.029 1.323.147 1.825.416.538.287.965.714 1.252 1.252.314.587.423 1.15.423 2.28v6.09c0 1.13-.109 1.693-.423 2.28a3.021 3.021 0 0 1-1.252 1.252c-.587.314-1.15.423-2.28.423h-8.09c-1.13 0-1.693-.109-2.28-.423a3.021 3.021 0 0 1-1.252-1.252c-.314-.587-.423-1.15-.423-2.28v-6.09c0-1.13.109-1.693.423-2.28a3.021 3.021 0 0 1 1.252-1.252c.502-.269.988-.387 1.825-.416V2.73c0-.165.03-.29.087-.396a.59.59 0 0 1 .246-.246A.816.816 0 0 1 6.229 2h.042c.165 0 .29.03.396.087a.59.59 0 0 1 .246.246.816.816 0 0 1 .087.396V3h6zm3.5 6h-13v4.045c0 .903.064 1.233.245 1.572.148.277.36.49.638.638.34.181.67.245 1.572.245h8.09c.903 0 1.233-.064 1.572-.245.277-.148.49-.36.638-.638.181-.34.245-.67.245-1.572V9z" fill="currentColor" /></g></symbol>';

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