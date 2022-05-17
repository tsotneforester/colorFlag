"use strict";

setInterval(georgianFlag, 500);

function georgianFlag() {
  const RandomNumber = function (n) {
    const y = Math.floor(Math.random() * n + 1);
    return y;
  };

  RandomNumber(50);
  const cross1 = document.getElementById("cross1");
  const cross2 = document.getElementById("cross2");
  const svg = document.getElementsByTagName("svg")[0];
  const button = document.getElementsByTagName("button");

  cross1.style.fill =
    "rgb(" +
    RandomNumber(255) +
    ", " +
    RandomNumber(255) +
    ", " +
    RandomNumber(255) +
    ")";
  cross2.style.fill =
    "rgb(" +
    RandomNumber(255) +
    ", " +
    RandomNumber(255) +
    ", " +
    RandomNumber(255) +
    ")";

  svg.style.borderColor =
    "rgb(" +
    RandomNumber(255) +
    ", " +
    RandomNumber(255) +
    ", " +
    RandomNumber(255) +
    ")";
}
