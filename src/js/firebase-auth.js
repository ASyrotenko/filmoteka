import { onAuthStateChanged } from 'firebase/auth';

import { Firebase, auth } from './firebase-class';

const singInBtn = document.querySelector('#signin');
const singOutBtn = document.querySelector('#signout');
const userPhoto = document.querySelector('#googleUser');

const firebase = new Firebase();

onAuthStateChanged(auth, user => {
  if (user) {
    singInBtn.classList.add('signOut');
    singOutBtn.classList.add('signIn');
    userPhoto.innerHTML = `<img class="user-img" src="${user.photoURL}">`;
    userPhoto.style.display = 'block';
  }
});

function goToIndex() {
  window.open('index.html');
}

singInBtn.addEventListener('click', firebase.singInWithGoogle);
singOutBtn.addEventListener('click', firebase.singOutUser);
document.getElementById('signout').addEventListener('click', goToIndex);
