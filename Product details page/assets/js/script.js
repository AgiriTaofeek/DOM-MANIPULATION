// 'use strict';



/**
 * add event on element
 */

// const addEventOnElem = function (elem, type, callback) {
//   if (elem.length > 1) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     elem.addEventListener(type, callback);
//   }
// }



/**
 * navbar toggle
 */

// const navbar = document.querySelector("[data-navbar]");
// const navToggler = document.querySelectorAll("[data-nav-toggler]");
// const navbarLinks = document.querySelectorAll("[data-nav-link]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleNav = function () {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// addEventOnElem(navToggler, "click", toggleNav);

// const closeNav = function () {
//   navbar.classList.remove("active");
//   overlay.classList.remove("active");
// }

// addEventOnElem(navbarLinks, "click", closeNav);



/**
 * make slider functionality
 */

// select all element for DOM manipulation

// const slider = document.querySelector("[data-slider]");
// const nextBtn = document.querySelector("[data-next]");
// const prevBtn = document.querySelector("[data-prev]");

// set the default slider position
// let sliderPos = 0;

// set the number of total slider items
// const totalSliderItems = 4;

// sliderEnd();

// make next slide btn workable
// const slideToNext = function () {

//   sliderPos++;

//   slider.style.transform = `translateX(-${sliderPos}00%)`;

//   sliderEnd();

// }

// addEventOnElem(nextBtn, "click", slideToNext);


// make prev slide btn workable
// const slideToPrev = function () {

//   sliderPos--;

//   slider.style.transform = `translateX(-${sliderPos}00%)`;

//   sliderEnd();

// }

// addEventOnElem(prevBtn, "click", slideToPrev);


// check when slider is end then what should slider btn do
// function sliderEnd() {
//   if (sliderPos >= totalSliderItems - 1) {
//     nextBtn.classList.add("disabled");
//   } else {
//     nextBtn.classList.remove("disabled");
//   }

//   if (sliderPos <= 0) {
//     prevBtn.classList.add("disabled");
//   } else {
//     prevBtn.classList.remove("disabled");
//   }
// }