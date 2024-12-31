 const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    lerp: .1,
    direction: 'vertical',
  });

  window.addEventListener('resize', () => {
    scroll.update();
  });



  let timeElem = document.querySelectorAll('.chatTime'); 
  let currentDate = new Date();
  console.log(timeElem)
  let currentHour = currentDate.getHours() 
  let currentMinute = currentDate.getMinutes(); 
  currentTime = currentHour + ':' + currentMinute; 

  timeElem.forEach(element => {
  element.innerText = currentTime; 
  console.log(timeElem)
  });
