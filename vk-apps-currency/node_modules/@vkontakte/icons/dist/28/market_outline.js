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

var viewBox = '0 0 28 28';
var id = 'market_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="market_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M14 2a6 6 0 0 1 6 6h.154c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v6.158c0 2.387-.255 3.287-.735 4.183a4.998 4.998 0 0 1-2.079 2.08c-.896.479-1.796.734-4.183.734h-6.006c-2.387 0-3.287-.255-4.183-.735a4.998 4.998 0 0 1-2.08-2.079C4.256 21.29 4 20.39 4 18.003v-6.157c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 5.536 8.4C6.024 8.139 6.509 8 7.845 8H8a6 6 0 0 1 6-6zm6.34 8H7.846c-.917 0-1.142.043-1.368.164a.727.727 0 0 0-.314.314c-.112.21-.157.418-.163 1.182L6 18.003c0 1.88.131 2.554.498 3.24.293.548.711.966 1.259 1.259.686.367 1.36.498 3.24.498h6.006c1.88 0 2.554-.131 3.24-.498.548-.293.966-.711 1.259-1.259.367-.686.498-1.36.498-3.24v-6.157c0-.917-.043-1.142-.164-1.368a.727.727 0 0 0-.314-.314c-.21-.112-.418-.157-1.182-.163zm-1.266 2c.237 0 .386.037.517.107.13.07.232.172.302.302.07.13.107.28.107.517v.148c0 .237-.037.386-.107.517a.727.727 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.727.727 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-.148c0-.237.037-.386.107-.517a.727.727 0 0 1 .302-.302c.13-.07.28-.107.517-.107h.148zm-10 0c.237 0 .386.037.517.107.13.07.232.172.302.302.07.13.107.28.107.517v.148c0 .237-.037.386-.107.517a.727.727 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.727.727 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-.148c0-.237.037-.386.107-.517a.727.727 0 0 1 .302-.302c.13-.07.28-.107.517-.107h.148zM14 4a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;