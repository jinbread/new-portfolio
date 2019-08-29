// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// var logo = document.querySelector('.logo'); 

// logo.addEventListener('mouseover', function(event) {
//   anime({
//     targets: logo,
//     rotate: 360,
//   })
// })

// logo.addEventListener('mouseout',  function(event) {
//   anime({
//     targets: logo,
//     rotate: 0,
//   })
// })

// var rotateLogo = 0

// logo.addEventListener('touchstart', function(event) {
//   rotateLogo += 360;
  
//   anime({
//     targets: logo,
//     rotate: rotateLogo,
//   })
// })