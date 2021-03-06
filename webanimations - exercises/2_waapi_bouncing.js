"use strict";

const properties = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in",
};

const keyframes = [
  { transform: `translate(41.25vw, 0)` },
  { transform: `translate(0,41.25vw)` },
];

const ball = document.querySelector("#ball");
const animation = ball.animate(keyframes, properties);
/* 
  properties from the CSS
.bounce {
  animation-name: bounce_kf;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
*/

/*
 keyframes from the CSS
@keyframes bounce_kf {
  from {
    transform: translate(0,41.25vw);
  }
  to {
    transform: translate(0,0);
  }
}
*/
