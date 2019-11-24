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

var viewBox = '0 0 36 36';
var id = 'article_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="article_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" /><path d="M28 17H8a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2zm0-7H8a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2zM8 26h12a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 36,
    height: !isNaN(props.height) ? +props.height : 36
  }));
}

var _default = Icon;
exports.default = _default;