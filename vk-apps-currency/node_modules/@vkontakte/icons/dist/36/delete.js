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
var id = 'delete_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="delete_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" /><path d="M13.433 4a3.75 3.75 0 0 1 3.317-2h2.5a3.75 3.75 0 0 1 3.317 2H28.5A1.5 1.5 0 0 1 30 5.5v1.125a.375.375 0 0 1-.375.375H6.375A.375.375 0 0 1 6 6.625V5.5A1.5 1.5 0 0 1 7.5 4h5.933zM7.5 9h21l-1.693 20.558A3.75 3.75 0 0 1 23.07 33H12.93a3.75 3.75 0 0 1-3.737-3.442L7.5 9zm16.184 3.027a1 1 0 0 0-1.075.918l-1.216 15.453a1 1 0 1 0 1.994.157l1.216-15.453a1 1 0 0 0-.919-1.075zM18 12a1 1 0 0 0-1 1v15.5a1 1 0 0 0 2 0V13a1 1 0 0 0-1-1zm-5.689.027a1 1 0 0 0-.918 1.075l1.216 15.453a1 1 0 0 0 1.994-.157l-1.216-15.453a1 1 0 0 0-1.076-.918z" fill="currentColor" /></g></symbol>';

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