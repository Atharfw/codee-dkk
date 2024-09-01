"use strict";

var container = document.querySelector('.container');
window.addEventListener('mousemove', function (e) {
  x = e.pageX;
  y = e.pageY;
  container.style.animation = "none";
  container.style.transform = "rotateY(".concat(x, "deg) rotateX(").concat(y, "deg)");
});
window.addEventListener('mouseout', function (e) {
  container.style.animation = "animate 45s linear infinite";
});
window.addEventListener("touchmove", function (e) {
  var x = e.touches[0].pageX;
  var y = e.touches[0].pageY;
  container.style.animation = "none";
  container.style.transform = "rotateY(".concat(x, "deg) rotateX(").concat(y, "deg)");
});
window.addEventListener('touchend', function (e) {
  container.style.animation = "animate 45s linear infinite";
});
container.addEventListener('mouseover', function () {
  document.querySelector('.love').style.opacity = "1";
});