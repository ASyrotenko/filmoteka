import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';

const refs = getRefs();

const firebase = new Firebase();

refs.addToWatched.addEventListener('click', pullToWatched);
refs.addToQueue.addEventListener('click', pullToQueue);

function pullToWatched(e) {
  const textContentAdd = 'add to watched';
  const textContentRemove = 'remove from watched';
  if (e.target.textContent.includes(textContentAdd)) {
    e.target.textContent = textContentRemove;
    firebase.setDoc('watched');
  } else if (e.target.textContent.includes(textContentRemove)) {
    e.target.textContent = textContentAdd;
    firebase.removeFilmById('watched');
  }
}

function pullToQueue(e) {
  const textContentAdd = 'add to queue';
  const textContentRemove = 'remove from queue';
  if (e.target.textContent.includes(textContentAdd)) {
    e.target.textContent = textContentRemove;
    firebase.setDoc('queue');
  } else if (e.target.textContent.includes(textContentRemove)) {
    e.target.textContent = textContentAdd;
    firebase.removeFilmById('queue');
  }
}
