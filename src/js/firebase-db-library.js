import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';

const refs = getRefs();

const firebase = new Firebase();

refs.watched.addEventListener('click', showWatched);
refs.queue.addEventListener('click', showQueue);

function showWatched() {
  firebase.getDoc('watched');
}

function showQueue() {
  firebase.getDoc('queue');
}
