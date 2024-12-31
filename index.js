 const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    lerp: .1,
    direction: 'vertical',
  });

  window.addEventListener('resize', () => {
    scroll.update();
  });