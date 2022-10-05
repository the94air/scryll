interface Config {
  init: boolean,
  direction: "vertical" | "horizontal"
}

interface Event {
  target: {
    scrollTop: number
    scrollLeft: number
  }
}

interface Element {
  scrollTop: number
  scrollLeft: number
  addEventListener: (name: string, listener: Function) => void
  removeEventListener: (name: string, listener: Function) => void
}

const scryll = (
  selector1: string,
  selector2: string,
  config: Config
) => {
  let preventScrollEvent: Boolean = false;
  const isEmpty = (val: any) => (val === undefined || val === null);
  const getElement = (val: string) => {
    const el: Element = document.querySelector(val) as any;
    return el
  }

  config = Object.assign({}, { init: true, direction: 'vertical' }, config);

  const onScroll = () => {
    if (preventScrollEvent) {
      preventScrollEvent = false;
      return;
    }
    preventScrollEvent = true;
  };

  function onElement1Scroll (event: Event) {
    const element2 = getElement(selector2);

    onScroll();
    if (config.direction === 'vertical') {
      element2.scrollTop = event.target.scrollTop;
    } else {
      element2.scrollLeft = event.target.scrollLeft;
    }
  };

  function onElement2Scroll (event: Event) {
    const element1 = getElement(selector1);

    onScroll();
    if (config.direction === 'vertical') {
      element1.scrollTop = event.target.scrollTop;
    } else {
      element1.scrollLeft = event.target.scrollLeft;
    }
  };

  const init = () => {
    if (isEmpty(selector1) || isEmpty(selector2)) {
      new Error('You most provide a valid selector');
      return;
    }

    const element1 = getElement(selector1);
    const element2 = getElement(selector2);

    if (isEmpty(element1) || isEmpty(element2)) {
      new Error('Scroll element could not be found');
      return;
    }

    preventScrollEvent = false;
    element1.addEventListener('scroll', onElement1Scroll);
    element2.addEventListener('scroll', onElement2Scroll);
  };

  const kill = () => {
    const element1 = getElement(selector1);
    const element2 = getElement(selector2);

    preventScrollEvent = false;
    element1.removeEventListener('scroll', onElement1Scroll);
    element2.removeEventListener('scroll', onElement2Scroll);
  };

  if (config.init === true) {
    init();
  }

  return {
    init,
    kill,
  };
};

export default scryll;
