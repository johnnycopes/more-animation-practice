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

  /* NOTE: the hardest part of these animations is cycling through the spritesheet to make the writing appear. The trick is to use the 'SteppedEase' ease function whose config() method takes the number of items on the spritesheet. You need to figure out how much space each item on the sheet needs to be visible and can be iterated to clearly display every other item on the sheet (for example: the parker-ingenuity sheet were spaced so that 40px was the perfect amount of space to display each item. Multiply the view amount times the number of (iterations - 1) -- don't forget that you need to leave an offset at the beginning to show nothing -- and that's the final negative pixel count you need to properly display the final item on the spritesheet, and the animation will cleanly show every iteration from the beginning until then. This tactic was inspired by this CodePen: https://codepen.io/drygiel/pen/KbhmA */

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
