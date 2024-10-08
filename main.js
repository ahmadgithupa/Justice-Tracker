// nav

let Shownav = document.querySelector(".burgger");
let navlinks = document.querySelector("nav  .links");

Shownav.onclick = function () {
  navlinks.classList.toggle("hide");
  Shownav.classList.toggle("widthbtn");
};

// nav scroll

let nav = document.querySelector("nav");
window.onscroll = function () {
  if (scrollY >= 100) {
    nav.style.background = "#22222290";
  } else {
    nav.style.background = null;
  }
};
