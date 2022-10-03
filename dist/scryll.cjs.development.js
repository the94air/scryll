'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var scryll = function scryll(selector1, selector2, config) {
  if (config === void 0) {
    config = {
      init: true,
      direction: 'vertical'
    };
  }

  if (selector1 === undefined || selector2 === undefined) {
    return;
  }
  var element1 = document.querySelector(selector1);
  var element2 = document.querySelector(selector2);

  if (element1 === null || element2 === null) {
    return;
  }

  var onElement1Scroll = function onElement1Scroll(event) {

    if (config.direction === 'vertical') {
      element2.scrollTop = event.currentTarget.scrollTop;
    } else {
      element2.scrollTop = event.currentTarget.scrollLeft;
    }
  };

  var onElement2Scroll = function onElement2Scroll(event) {

    if (config.direction === 'vertical') {
      element1.scrollTop = event.currentTarget.scrollTop;
    } else {
      element1.scrollTop = event.currentTarget.scrollLeft;
    }
  };

  var init = function init() {
    element1.addEventListener('scroll', onElement1Scroll);
    element2.addEventListener('scroll', onElement2Scroll);
  };

  var kill = function kill() {
    element1.removeEventListener('scroll', onElement1Scroll);
    element2.removeEventListener('scroll', onElement2Scroll);
  };

  if (config.init === true) {
    init();
  }

  return {
    init: init,
    kill: kill
  };
};

exports.default = scryll;
//# sourceMappingURL=scryll.cjs.development.js.map
