// main function runs when all is clear
function bannerInit() {

  // start banner animation timeline
  var wrapper = document.querySelector('.wrapper');
  var parkerIngenuity = document.querySelector('.parker-ingenuity');
  var fifthTechnology = document.querySelector('.fifth-technology');
  var overTime = document.querySelector('.over-time');
  var writing = document.querySelectorAll('.writing');
  var secondFade = document.querySelectorAll('.second-fade');
  var logoAndButton = document.querySelectorAll('.final');
  var text1 = document.querySelector('.text1');
  var penContainer = document.querySelector('.pen-container');
  var bigPen = document.querySelector('.big-pen');
  var smallPen = document.querySelector('.small-pen');
  var line = document.querySelector('.line');

  var tl = new TimelineMax();

  // for (var i = 1; i <= 7; i++) {
  //   tl.to(pen, 4, {
  //     ease: Power1.easeOut
  //   });
  // }

  tl.to(bigPen, 1, {
    delay: 0.25,
    width: '-=1300px',
    left: '180px',
    ease: Power0.easeOut
  })
  .to(bigPen, 0.5, {
    delay: 0.25,
    left: '0px',
    ease: Power0.easeOut
  })
  .set(line, {display: 'inline-block'})
  .to(penContainer, 5, {
    right: '-300px',
    ease: Power0.easeIn
  })
  .to(parkerIngenuity, 2, {
    backgroundPosition: "56px -1520px",
    ease: SteppedEase.config(39)
  }, '-=5')
  .to(fifthTechnology, 2, {
    backgroundPosition: "70px -1120px",
    ease: SteppedEase.config(29)
  }, '-=3')
  tl.to(wrapper, 1, {
    right: "300px",
    ease: Power0.easeInOut
  })
  .set(line, {display: 'none'})
  .to(penContainer, 1, {
    right: '-600px',
    ease: Power0.easeInOut
  })
  .to(text1, 0.5, {
    autoAlpha: 1,
    ease: Power0.easeInOut
  })
  .to(overTime, 1.5, {
    ease: SteppedEase.config(19),
    // ease: Power0.easeInOut,
    backgroundPosition: "90px -504px"
  })
  .to(secondFade, 0.5, {
    delay: 0.25,
    autoAlpha: 0,
    ease: Power0.easeInOut
  })
  .to(smallPen, 1, {
    right: '-270px',
    ease: Power0.easeInOut
  })
  .to(logoAndButton, 1, {
    autoAlpha: 1,
    ease: Power0.easeInOut
  });


  // end banner animation timeline
}

window.onload = function() {
  bannerInit();
};
