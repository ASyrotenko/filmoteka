import './js/firebase-auth';
import './js/firebase-class';
import './js/firebase-db-library';
import './js/change-color-scheme.js';
import './js/modal-team';
import { getRefs } from './js/get-refs';
const refs = getRefs();

function triggerBtnClick() {
  setTimeout(() => {
    refs.watched.click();
  }, 1000);
}
window.addEventListener('load', triggerBtnClick);
window.addEventListener('load', refs.watched.classList.add('film-btn--active'));
