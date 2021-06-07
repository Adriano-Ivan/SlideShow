"use strict";

const sliders = document.querySelectorAll(".slide");
const controlBack = document.querySelector("#slider-control-back");
const controlNext = document.querySelector("#slider-control-next");

const howManySliders = document.querySelectorAll(".slide").length;
let actualSlide = 0;

const exeMov = function () {
  const marginValue = actualSlide * sliders[0].clientWidth;
  document.querySelector(
    ".slider-flexible"
  ).style.marginLeft = `-${marginValue}px`;
};
const movNext = function () {
  actualSlide++;
  if (actualSlide > howManySliders - 1) {
    actualSlide = 0;
  }
  exeMov();
};
const movBack = function () {
  actualSlide--;
  if (actualSlide < 0) {
    actualSlide = howManySliders - 1;
  }
  exeMov();
};
sliders.forEach((e, i) => {
  e.style.height = "100%";
  e.style.backgroundImage = `url(img/img${i + 1}.jpg)`;
  console.log(e);
});

document.querySelector(
  ".slider-flexible"
).style.width = `calc(100vw * ${howManySliders})`;

controlBack.addEventListener("click", movBack);
controlNext.addEventListener("click", movNext);
setInterval(movNext, 2000);
