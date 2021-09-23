// menu mobile
var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500 && window.innerWidth <= 767) {
    document.getElementById("display").style.display = "inline";
  } else {
    document.getElementById("display").style.display = "none";
  }
});

var nav = document.getElementById("nav");
var logoNav = document.getElementById("logoNav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 400) {
    document.getElementById("nav").style.backgroundColor = "black";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
});
console.log(nav);

var logoNav = document.getElementById("logoNav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 400) {
    document.getElementById("logoNav").style.visibility = "visible";
  } else {
    document.getElementById("logoNav").style.visibility = "hidden";
  }
});
console.log(nav);
