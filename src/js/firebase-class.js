import { initializeApp } from 'firebase/app';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteField,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAulP83L0QY90_yCDYRohOctOjcPDqfmkw',
  authDomain: 'command-project-js-demo.firebaseapp.com',
  projectId: 'command-project-js-demo',
  storageBucket: 'command-project-js-demo.appspot.com',
  messagingSenderId: '488245804301',
  appId: '1:488245804301:web:904f7218c509613983c444',
  measurementId: 'G-1QM91ECZ3B',
};

const singInBtn = document.querySelector('#signin');
const singOutBtn = document.querySelector('#signout');
const userPhoto = document.querySelector('#googleUser');

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const user = auth.currentUser;
const db = getFirestore(app);

export class Firebase {
  constructor() {}

  singInWithGoogle() {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        singInBtn.classList.add('signOut');
        singOutBtn.classList.add('signIn');
        userPhoto.innerHTML = `<img class="user-img" src="${user.photoURL}">`;
        Notify.success(`Hello - ${user.displayName}`, {
          position: 'center-top',
        });
      })
      .catch(error => {
        // console.log(error);
      });
  }

  singOutUser() {
    signOut(auth)
      .then(() => {
        singInBtn.classList.remove('signOut');
        singOutBtn.classList.remove('signIn');
        userPhoto.style.display = 'none';
      })
      .catch(error => {
        // console.log(error);
      });
  }

  async setDoc(value) {
    const movieCardIdRef = document.querySelector('.movie__id');
    const movieId = movieCardIdRef.id;
    const userId = auth.currentUser.uid;
    const movieRef = doc(db, userId, value);

    // console.log(`add to ${value}: `, { userId, movieId });

    await setDoc(movieRef, { [movieId]: movieId }, { merge: true });
  }

  async getDoc(value) {
    const userId = auth.currentUser.uid;
    const docRef = doc(db, userId, value);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let values = Object.values(docSnap.data());
      return values;
    } else {
      // console.log('No such document!');
    }
  }

  async removeFilmById(value) {
    const userId = auth.currentUser.uid;
    const movieCardIdRef = document.querySelector('.movie__id');
    const movieId = movieCardIdRef.id;
    const movieRef = doc(db, userId, value);

    // console.log(`remove from ${value}: `, { userId, movieId });

    await updateDoc(movieRef, {
      [movieId]: deleteField(),
    });
  }

  userStatus() {
    const userId = auth.currentUser.uid;
    return userId;
  }
}
