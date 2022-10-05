var scryll = function scryll(selector1, selector2, config) {

  var isEmpty = function isEmpty(val) {
    return val === undefined || val === null;
  };

  var getElement = function getElement(val) {
    var el = document.querySelector(val);
    return el;
  };

  config = Object.assign({}, {
    init: true,
    direction: 'vertical'
  }, config);

  function onElement1Scroll(event) {
    var element2 = getElement(selector2);

    if (config.direction === 'vertical') {
      element2.scrollTop = event.target.scrollTop;
    } else {
      element2.scrollLeft = event.target.scrollLeft;
    }
  }

  function onElement2Scroll(event) {
    var element1 = getElement(selector1);

    if (config.direction === 'vertical') {
      element1.scrollTop = event.target.scrollTop;
    } else {
      element1.scrollLeft = event.target.scrollLeft;
    }
  }

  var init = function init() {
    if (isEmpty(selector1) || isEmpty(selector2)) {
      return;
    }

    var element1 = getElement(selector1);
    var element2 = getElement(selector2);

    if (isEmpty(element1) || isEmpty(element2)) {
      return;
    }
    element1.addEventListener('scroll', onElement1Scroll);
    element2.addEventListener('scroll', onElement2Scroll);
  };

  var kill = function kill() {
    var element1 = getElement(selector1);
    var element2 = getElement(selector2);
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

export default scryll;
//# sourceMappingURL=scryll.esm.js.map
