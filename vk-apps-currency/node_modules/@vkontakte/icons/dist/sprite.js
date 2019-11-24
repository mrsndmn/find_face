"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _browserSprite = _interopRequireDefault(require("svg-baker-runtime/browser-sprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var browserSprite;

if (canUseDOM) {
  browserSprite = new _browserSprite.default({
    attrs: {
      id: '__SVG_SPRITE_NODE__'
    }
  });
  browserSprite.mount();
} else {
  browserSprite = null;
}

var _default = browserSprite;
exports.default = _default;