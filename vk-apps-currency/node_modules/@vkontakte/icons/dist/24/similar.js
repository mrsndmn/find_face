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
var id = 'similar_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="similar_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4.052 20.312A11.468 11.468 0 0 1 .5 12c0-3.163 1.284-6.124 3.516-8.276l.026-.025.035-.034a1 1 0 0 1 1.38 1.447l-.032.03-.02.02A9.467 9.467 0 0 0 2.5 12a9.468 9.468 0 0 0 2.935 6.866 1 1 0 0 1-1.383 1.446zm3.372-3.35A6.733 6.733 0 0 1 5.25 12c0-1.91.799-3.694 2.175-4.963a1 1 0 0 1 1.356 1.47A4.734 4.734 0 0 0 7.25 12c0 1.345.56 2.598 1.53 3.492a1 1 0 0 1-1.356 1.47zm12.524 3.35a1 1 0 1 1-1.383-1.446A9.468 9.468 0 0 0 21.5 12a9.467 9.467 0 0 0-2.904-6.837l-.021-.02-.033-.031a1 1 0 1 1 1.416-1.413l.026.025A11.467 11.467 0 0 1 23.5 12c0 3.18-1.299 6.157-3.552 8.312zm-3.372-3.35a1 1 0 1 1-1.356-1.47A4.734 4.734 0 0 0 16.75 12c0-1.345-.56-2.598-1.53-3.493a1 1 0 0 1 1.355-1.47A6.733 6.733 0 0 1 18.75 12c0 1.91-.798 3.693-2.174 4.962zM12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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