// anime({
//   targets: 'div.box.red',
//   translateY: [
//     { value: 200, duration: 500 },
//     { value: 0, duration: 800 },
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//   },
// });

// anime({
//   targets: 'div.box.blue',
//   translateY: [
//     { value: 200, duration: 500, delay: 900 },
//     { value: 0, duration: 800 },
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 900,
//   },
// });

// anime({
//   targets: 'div.box.green',
//   translateY: [
//     { value: 200, duration: 500, delay: 1800 },
//     { value: 0, duration: 800 },
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1800,
//   },
// });

// anime({
//   targets: 'div.box.yellow',
//   translateY: [
//     { value: 200, duration: 500, delay: 2700 },
//     { value: 0, duration: 800 },
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 2700,
//   },
// });

var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 },
  ],
  rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
  },
  delay: function (el, i, l) {
    return i * 900;
  },
  autoplay: false,
  loop: true,
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;
