import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';

const refs = getRefs();

const firebase = new Firebase();

refs.addToWatched.addEventListener('click', pullToWatched);
refs.addToQueue.addEventListener('click', pullToQueue);

function pullToWatched() {
  firebase.setDoc('watched');
  refs.addToWatched.textContent = 'Remove from Watched';
}

function pullToQueue() {
  firebase.setDoc('queue');
  refs.addToQueue.textContent = 'Remove from Queue';
}
