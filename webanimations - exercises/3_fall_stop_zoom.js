"use strict";

const ball = document.querySelector("#ball");

const properties = {
  duration: 10000,
  iterations: Infinity,
};

const propertiesNew = {
  duration: 500,
  fill: "forwards",
  iterations: 1,
  composite: "add",
};

const zomm = [{ transform: `scale(0)` }, { transform: `scale(1)` }];

const animation2 = ball.animate(zomm, propertiesNew);
// Create keyframes and properties for falling and zoom
const fall = [
  { transform: `translate(-20vw,65vw)` },
  { transform: `translate(0,0)` },
];

// register click
document.querySelector("#ball").addEventListener("click", ballClicked);
// start falling animation
const animation = ball.animate(fall, properties);
function ballClicked() {
  animation.pause();
  let zoomAnimation = ball.animate(zomm, propertiesNew);
  console.log("Ball clicked!");
  animate.onfinish = function () {
    animation.cancel();
    animation.play();
  };
}
