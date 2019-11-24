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
var id = 'music_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="music_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M19 10.033v4.453c0 3.471-1.236 4.219-3.28 4.494-1.063.143-2.72-.414-2.72-2.432 0-.986.821-1.965 1.846-2.167.95-.187-.308.058 1.842-.352.346-.066.317-.313.317-.58l-.002-3.416H17l.005-2.576c0-.237-.073-.348-.345-.28l-7.295 1.33C9.06 8.582 9 8.708 9 9v7.486c0 3.471-1.236 4.219-3.28 4.494-1.063.143-2.72-.414-2.72-2.432 0-.986.821-1.965 1.846-2.167.95-.187-.308.058 1.842-.352.346-.066.317-.313.317-.58l-.002-4.363h.001L7 8.55s-.004-1.574 0-2.36c.005-.942.51-1.288 2-1.594l8-1.478s2-.625 2 1v5.915z" fill="currentColor" /></g></symbol>';

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