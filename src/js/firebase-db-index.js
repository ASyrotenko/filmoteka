import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';

const refs = getRefs();

const firebase = new Firebase();

refs.addToWatched.addEventListener('click', pullToWatched);
refs.addToQueue.addEventListener('click', pullToQueue);
refs.filmGallery.addEventListener('click', getMovieStatus);

async function getMovieStatus(e) {
  const textContentRemoveWatched = 'remove from watched';
  const watchedMovies = await firebase.getDoc('watched');
  const watchedMoviesId = Object.values(watchedMovies);
  const currentWatchedMovieStatus = watchedMoviesId.includes(e.target.id);
  if (currentWatchedMovieStatus) {
    refs.addToWatched.textContent = textContentRemoveWatched;
    refs.addToWatched.classList.add('film-btn--active');
  }

  const textContentRemoveQueue = 'remove from queue';
  const queueMovies = await firebase.getDoc('queue');
  const queueMoviesId = Object.values(queueMovies);
  const currentQueueMovieStatus = queueMoviesId.includes(e.target.id);
  if (currentQueueMovieStatus) {
    refs.addToQueue.textContent = textContentRemoveQueue;
    refs.addToQueue.classList.add('film-btn--active');
  }
}

function pullToWatched(e) {
  const textContentAdd = 'add to watched';
  const textContentRemove = 'remove from watched';
  console.log(firebase.setDoc.userId);
  if (e.target.textContent.includes(textContentAdd)) {
    e.target.textContent = textContentRemove;
    firebase.setDoc('watched');
    firebase.removeFilmById('queue');
    refs.addToQueue.textContent = 'add to queue';
    refs.addToQueue.classList.remove('film-btn--active');
  } else if (e.target.textContent.includes(textContentRemove)) {
    e.target.textContent = textContentAdd;
    firebase.removeFilmById('watched');
    refs.addToWatched.classList.remove('film-btn--active');
  }
}

function pullToQueue(e) {
  const textContentAdd = 'add to queue';
  const textContentRemove = 'remove from queue';
  if (e.target.textContent.includes(textContentAdd)) {
    e.target.textContent = textContentRemove;
    firebase.setDoc('queue');
    firebase.removeFilmById('watched');
    refs.addToWatched.textContent = 'add to watched';
    refs.addToWatched.classList.remove('film-btn--active');
  } else if (e.target.textContent.includes(textContentRemove)) {
    e.target.textContent = textContentAdd;
    firebase.removeFilmById('queue');
    refs.addToQueue.classList.remove('film-btn--active');
  }
}
