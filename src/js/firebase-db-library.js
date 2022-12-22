import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';
import { renderLibrary } from './library-gallery';
const refs = getRefs();

const firebase = new Firebase();

refs.watched.addEventListener('click', showWatched);
refs.queue.addEventListener('click', showQueue);

async function showWatched() {
  refs.queue.classList.remove('film-btn--active');
  refs.watched.classList.add('film-btn--active');

  let watched = await firebase.getDoc('watched');
  if (watched.length === 0) {
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li class="film__list-error">
      <p class="library__text">No watched movies found in the library</p>
      <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No watched movies found in the library"/>
    </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    renderLibrary(watched);
  }
}

async function showQueue() {
  refs.watched.classList.remove('film-btn--active');
  refs.queue.classList.add('film-btn--active');

  let queue = await firebase.getDoc('queue');

  if (queue.length === 0) {
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li class="film__list-error">
        <p class="library__text">No movies saved for viewing were found in the library</p>
        <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No movies saved for viewing were found in the library"/>
      </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    renderLibrary(queue);
  }
}
const qwe = setInterval(getUserStatus, 250);

function getUserStatus(params) {
  try {
    refs.watched.classList.add('film-btn--active');
    firebase.userStatus();
    showWatched();
    clearInterval(qwe);
  } catch (error) {
    console.log('error');
  }
}
