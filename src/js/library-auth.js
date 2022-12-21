import { getRefs } from './get-refs';
import { Firebase, auth } from './firebase-class';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const refs = getRefs();

const firebase = new Firebase();

refs.myLibrary.addEventListener('click', () => {
  if (!auth.lastNotifiedUid) {
    Confirm.show(
      'Ви не авторизовані',
      'Для перегляду збережених фільмів потрібно авторизуватися. Здійснити авторизацію через Google ?',
      'Так',
      'Ні',
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
