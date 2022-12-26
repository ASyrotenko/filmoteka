//--------------------
import { debounce } from 'debounce';
import throttle from 'lodash.throttle';
const lessHeaderEl = document.querySelector('.header');
const filmSectionEl = document.querySelector('.container__slider');

// lessHeaderEl.style.display = 'none'

let lastScrollTop = 0;

// window.addEventListener('scroll', throttle(stickyHeaderOnScroll, 250), false);

// function stickyHeaderOnScroll() {
//   let scrollPos = window.scrollY || document.documentElement.scrollTop;
//   if (scrollPos > lastScrollTop) {
//     // downscroll code
//     headerEl.classList.remove('appearing__header-js');
//     headerEl.classList.add('disappearing__header-js');
//   } else {
//     // upscroll code
//     headerEl.classList.remove('disappearing__header-js');
//     headerEl.classList.add('sticky__header');
//     headerEl.classList.add('appearing__header-js');
//     filmSectionEl.classList.add('container__slider-js');
//   }

//   lastScrollTop = scrollPos <= 0 ? 0 : scrollPos; // For Mobile or negative scrolling
// }
//-------------------------

(function () {
  'use strict';

  const mainSection = document.querySelector('main');
  const header = document.querySelector('header');
  console.log(header);
  console.log(mainSection);

  let headerHeight = 0;

  function setTopPadding() {
    headerHeight = header.offsetHeight;
    mainSection.style.paddingTop = headerHeight + 'px';
  }

  function onScroll() {
    window.addEventListener('scroll', throttle(callbackFunc, 200));
    /**
     * Replace the line above with the following one
     * to see how many more times the "callbackFunc" is executed
     */
    // window.addEventListener("scroll", callbackFunc);

    function callbackFunc() {
      c.style.visibility = 'visible';
      c.innerHTML = counter++;
      const y = window.pageYOffset;
      if (y > 150) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    }
  }

  window.onload = function () {
    setTopPadding();
    onScroll();
  };

  window.onresize = function () {
    setTopPadding();
  };
})();
