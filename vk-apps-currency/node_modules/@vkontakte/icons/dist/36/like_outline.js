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
var id = 'like_outline_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="like_outline_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" /><path d="M28.267 19.36c2.31-2.336 2.31-6.13 0-8.465a5.932 5.932 0 0 0-.228-.218c-1.813-1.647-4.976-1.544-7.23.127a11.168 11.168 0 0 0-1.627 1.704 1.5 1.5 0 0 1-2.36.006 11.843 11.843 0 0 0-1.564-1.656c-2.32-1.725-5.484-1.828-7.297-.181-.078.07-.154.143-.228.218-2.31 2.336-2.31 6.13-.054 8.413l10.317 9.431 10.27-9.379zM17.49 29.201a.75.75 0 0 1 1.012 0l-.506-.462-.506.462zM18.952 8.45c3.4-2.525 8.147-2.68 11.104.006.117.107.232.216.343.33 3.468 3.504 3.468 9.18-.054 12.737l-10.832 9.894a2.25 2.25 0 0 1-3.035-.001L5.6 21.47c-3.468-3.505-3.468-9.18 0-12.685.111-.113.226-.222.343-.329 2.957-2.686 7.705-2.531 11.177.052.3.253.592.524.878.812.301-.302.617-.59.953-.87z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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