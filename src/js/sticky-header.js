import { debounce } from 'debounce';

const headerEl = document.querySelector('.header');
const filmSectionEl = document.querySelector('.film__section');

let lastScrollTop = 0;

window.addEventListener('scroll', debounce(stickyHeaderOnScroll, 200), false);

function stickyHeaderOnScroll() {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;
  if (scrollPos > lastScrollTop) {
    // downscroll code
    // headerEl.classList.remove('appearing__header-js');
    // headerEl.classList.add('disappearing__header-js');
  } else {
    // upscroll code
    // headerEl.classList.remove('disappearing__header-js');
    // headerEl.classList.add('sticky__header');
    headerEl.classList.add('appearing__header-js');
    // filmSectionEl.classList.add('film__section-js');
  }

  lastScrollTop = scrollPos <= 0 ? 0 : scrollPos; // For Mobile or negative scrolling
}
