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
var id = 'like_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="like_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" /><path d="M18.952 8.45c3.4-2.525 8.147-2.68 11.104.006.117.107.232.216.343.33 3.468 3.504 3.468 9.18-.054 12.737l-10.832 9.894a2.25 2.25 0 0 1-3.035-.001L5.6 21.47c-3.468-3.505-3.468-9.18 0-12.685.111-.113.226-.222.343-.329 2.957-2.686 7.705-2.531 11.177.052.3.253.592.524.878.812.301-.302.617-.59.953-.87z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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