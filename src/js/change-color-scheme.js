import gsap from 'gsap';

let isChecked = false;

function onBtnUp() {
  const tl = gsap.timeline();

  isChecked = !isChecked;

  let x = 0;
  let backgroundColor = '#827D96';
  let size = '120px'; //

  if (isChecked) {
    x = 30; //160
    backgroundColor = '#FFFFFF';
    size = '100px'; //
  }

  tl.to('.knob', { x, duration: 1 }, 'up');
  tl.to('.top', { backgroundColor, duration: 1 }, 'up');
  tl.to('.light', { width: size, height: size, duration: 1 }, 'up');
}

const btn = document.querySelector('#btn');
btn.addEventListener('mouseup', onBtnUp);
//btn.addEventListener('click',light);

const btnThemeHeader = document.querySelector('#btn'); // theme-check
const bodyTheme = document.querySelector('body');
const checked = document.querySelector('.btnContainer'); //
let theme = localStorage.getItem('ui-theme');

window.addEventListener('load', saveTheme);
btnThemeHeader.addEventListener('click', onTheme);

function saveTheme() {
  if (theme === 'dark') {
    bodyTheme.classList.add('body-theme');
    checked.setAttribute('checked', true);
  }
}

function onTheme() {
  theme = localStorage.getItem('ui-theme');

  if (theme === 'dark') {
    bodyTheme.classList.remove('body-theme');
    localStorage.setItem('ui-theme', 'light');

    return;
  }

  bodyTheme.classList.add('body-theme');
  localStorage.setItem('ui-theme', 'dark');
}
