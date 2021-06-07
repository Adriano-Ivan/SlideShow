"use strict";

const sliders = document.querySelectorAll(".slide");
const howManySliders = document.querySelectorAll(".slide").length;

sliders.forEach((e, i) => {
  e.style.height = "100%";
  e.style.backgroundImage = `url(img/img${i + 1}.jpg)`;
  console.log(e);
});

document.querySelector(
  ".slider-flexible"
).style.width = `calc(100vw * ${howManySliders})`;
