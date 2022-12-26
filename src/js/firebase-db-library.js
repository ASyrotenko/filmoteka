import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';
import { getPaginationFromLibrary } from './pagination';
const refs = getRefs();

const firebase = new Firebase();

refs.watched.addEventListener('click', showWatched);
refs.queue.addEventListener('click', showQueue);

async function showWatched() {
  refs.queue.classList.remove('film-btn--active');
  refs.watched.classList.add('film-btn--active');
  refs.paginationContainer.innerHTML = '';

  let watched = await firebase.getDoc('watched');

  if (watched.length === 0) {
    if (
      watched.length === 0 &&
      !refs.footer.classList.contains('footer--empty-library')
    ) {
      refs.footer.classList.toggle('footer--empty-library');
    }
    //SPINNER
    document.querySelector('.spinner').classList.add('hidden');

    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li class="film-list-error">
      <p class="library__text">No watched movies found in the library</p>
      <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No watched movies found in the library"/>
    </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    getPaginationFromLibrary(watched);
    document.querySelector('.spinner').classList.add('hidden');
  }
}

async function showQueue() {
  refs.watched.classList.remove('film-btn--active');
  refs.queue.classList.add('film-btn--active');
  refs.paginationContainer.innerHTML = '';

  let queue = await firebase.getDoc('queue');

  if (queue.length === 0) {
    if (
      watched.length === 0 &&
      !refs.footer.classList.contains('footer--empty-library')
    ) {
    } else refs.footer.classList.toggle('footer--empty-library');

    //SPINNER
    document.querySelector('.spinner').classList.add('hidden');

    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML(
      'beforeend',
      `<li class="film-list-error">
        <p class="library__text">No movies saved for viewing were found in the library</p>
        <img src="https://nejdancs.github.io/filmoteka/cat__1.21cb105d.png" alt="No movies saved for viewing were found in the library"/>
      </li>`
    );
  } else {
    refs.filmGallery.innerHTML = '';
    getPaginationFromLibrary(queue);
    document.querySelector('.spinner').classList.add('hidden');
  }
}

const loadLibraryWatched = setInterval(getUserStatus, 250);

function getUserStatus(params) {
  try {
    refs.watched.classList.add('film-btn--active');
    firebase.userStatus();
    showWatched();
    clearInterval(loadLibraryWatched);
  } catch (error) {
    // console.log(error);
  }
}
