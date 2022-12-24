import { debounce } from 'debounce';
import throttle from 'lodash.throttle';
const headerEl = document.querySelector('.header');
const filmSectionEl = document.querySelector('.container__slider');

let lastScrollTop = 0;

window.addEventListener('scroll', throttle(stickyHeaderOnScroll, 250), false);

function stickyHeaderOnScroll() {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;
  if (scrollPos > lastScrollTop) {
    // downscroll code
    headerEl.classList.remove('appearing__header-js');
    headerEl.classList.add('disappearing__header-js');
  } else {
    // upscroll code
    headerEl.classList.remove('disappearing__header-js');
    headerEl.classList.add('sticky__header');
    headerEl.classList.add('appearing__header-js');
    filmSectionEl.classList.add('container__slider-js');
  }

  lastScrollTop = scrollPos <= 0 ? 0 : scrollPos; // For Mobile or negative scrolling
}
