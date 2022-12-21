import { getRefs } from './get-refs';
import { Firebase, auth } from './firebase-class';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const refs = getRefs();

const firebase = new Firebase();

refs.myLibrary.addEventListener('click', () => {
  if (!auth.lastNotifiedUid) {
    Confirm.show(
      'You are not authorized',
      'You need to log in to view saved movies. Authorize through Google ?',
      'Yes',
      'No',
      () => {
        firebase.singInWithGoogle();
      },
      () => {},
      { width: '500px' }
    );
  } else {
    window.location.href = 'my-library.html';
  }
});
