const scryll = (
  selector1: string,
  selector2: string,
  config = { init: true, direction: 'vertical' }
) => {
  if (selector1 === undefined || selector2 === undefined) {
    new Error('You most provide two selectors');
    return;
  }

  let preventScrollEvent: Boolean = false;
  const element1: HTMLElement = document.querySelector(selector1) as HTMLElement;
  const element2: HTMLElement = document.querySelector(selector2) as HTMLElement;

  if (element1 === null || element2 === null) {
    new Error('Invalid selector');
    return;
  }

  const onScroll = () => {
    if (preventScrollEvent) {
      preventScrollEvent = false;
      return;
    }
    preventScrollEvent = true;
  };

  const onElement1Scroll = (event: any): void => {
    onScroll();
    if (config.direction === 'vertical') {
      element2.scrollTop = event.currentTarget.scrollTop;
    } else {
      element2.scrollTop = event.currentTarget.scrollLeft;
    }
  };

  const onElement2Scroll = (event: any): void => {
    onScroll();
    if (config.direction === 'vertical') {
      element1.scrollTop = event.currentTarget.scrollTop;
    } else {
      element1.scrollTop = event.currentTarget.scrollLeft;
    }
  };

  const init = () => {
    preventScrollEvent = false;
    element1.addEventListener('scroll', onElement1Scroll);
    element2.addEventListener('scroll', onElement2Scroll);
  };

  const kill = () => {
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
