const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

const btnThemeHeader = document.querySelector('#checkbox'); // theme-check
const bodyTheme = document.querySelector('body');
const checked = document.querySelector('.checkbox'); //
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
