
    const scroll = new LocomotiveScroll({
    el: document.querySelector('body'), // Scroll container element
    smooth: true,
    lerp: .1,
    direction: 'vertical',
  });

  window.addEventListener('resize', () => {
    scroll.update();
  });



const t = gsap.timeline(); 

t.from('.navbar-center ul li', {
    duration: 0.5, 
    y: -20,
    opacity: 0,
    delay: 0.1, 
    stagger: .2 
})

t.from('.buildUsingSection', {
    opacity: 0, 
    duration: 2
})
t.from('.buildUsing', {
    opacity: 0, 
    duration: 1.5, 
}, "hello")
t.from('.diff', {
    duration: 0.7, 
    y: 30, 
    delay: .5, 
    opacity: 0, 
    ease: 'bounce.out'
}, "hello")


    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.myCards', 
            start: 'top 70%',      
            end: 'top 20%',      
            scrub: true
        }
    });

    tl.from('.hero:nth-child(odd)', {
    
        rotation: 15,
        opacity: 0,

    }, "hero");

    tl.from('.hero:nth-child(even)', {
        rotation: -15, 
        opacity: 0,
    }, "hero");
