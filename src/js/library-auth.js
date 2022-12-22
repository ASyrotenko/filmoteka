import { getRefs } from './get-refs';
import { Firebase, auth } from './firebase-class';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const refs = getRefs();

const firebase = new Firebase();

export function authorizedGoogle() {
  Confirm.show(
    'You are not authorized',
    'You need to log in to view saved movies. Authorize through Google ?',
    'Yes',
    'No',
    () => {
      firebase.singInWithGoogle();
    },
    () => {},
    {
      fontFamily: 'Roboto, sans-serif',
      width: '500px',
      messageColor: '#ff6b08',
      titleColor: '#ff6b08',
      okButtonBackground: '#ff6b08',
    }
  );
}

refs.myLibrary.addEventListener('click', () => {
  if (!auth.lastNotifiedUid) {
    authorizedGoogle();
  } else {
    window.location.href = 'my-library.html';
  }
});
