import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';
import { renderLibrary } from './library-gallery';
const refs = getRefs();

const firebase = new Firebase();

refs.watched.addEventListener('click', showWatched);
refs.queue.addEventListener('click', showQueue);

async function showWatched() {
  let watched = await firebase.getDoc('watched');
  if (watched.length === 0) {
    console.log('ERROR');
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li class="film__list-error">
      <p class="library__text">В бібліотеці не знайдено переглянутих фільмів</p>
      <img src="./images/library-cat.png" alt="В бібліотеці не знайдено переглянутих фільмів"/>
    </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    renderLibrary(watched);
    // console.log(watched);
  }
}

async function showQueue() {
  refs.watched.classList.remove('film-btn--active');
  let queue = await firebase.getDoc('queue');

  if (queue.length === 0) {
    console.log('ERROR');
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li class="film__list-error">
        <p class="library__text">В бібліотеці не знайдено збережених для перегляду фільмів</p>
        <img src="./images/library-cat.png" alt="В бібліотеці не знайдено збережених для перегляду фільмів"/>
      </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    renderLibrary(queue);
    // console.log(queue);
  }
}
const qwe = setInterval(getUserStatus, 250);

function getUserStatus(params) {
  try {
    refs.watched.classList.add('film-btn--active');
    firebase.userStatus();
    console.log('got id');
    showWatched();
    clearInterval(qwe);
  } catch (error) {
    console.log('error');
  }
}
