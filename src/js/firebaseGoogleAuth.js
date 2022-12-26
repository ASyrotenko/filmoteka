import { GoogleAuthProvider } from 'firebase/auth';
import { Firebase } from './firebase-class';
import { getRefs } from './get-refs';

const firebase = new Firebase();
const refs = getRefs();

const firebaseConfig = {
  apiKey: 'AIzaSyD3g2wwrjvll4CiSInhG2qs5kFoDuGtHsY',
  authDomain: 'filmoteka-test-30033.firebaseapp.com',
  projectId: 'filmoteka-test-30033',
  storageBucket: 'filmoteka-test-30033.appspot.com',
  messagingSenderId: '182928813812',
  appId: '1:182928813812:web:f03ebb660cb112bff178a1',
  measurementId: 'G-59BPZHRSWF',
};
firebase.initializeApp(firebaseConfig);

document.getElementById('signin').addEventListener('click', signinUser);
document.getElementById('signout').addEventListener('click', signoutUser);

const provider = new GoogleAuthProvider();

function signinUser() {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(function (data) {
      document.getElementById('signin').classList.add('signOut');
      document.getElementById('signout').classList.add('signIn');
      document.getElementById('googleUser').style.display = 'block';
      renderGoogleUser(data);
    })
    .catch(function (error) {
      // console.log(error);
    });
}

function signoutUser() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      document.getElementById('signin').classList.remove('signOut');
      document.getElementById('signout').classList.remove('signIn');
      document.getElementById('googleUser').style.display = 'none';
    })
    .catch(error => {
      // console.log(error);
    });
}

function renderGoogleUser(data) {
  document.getElementById('googleUser').innerHTML = `
          <img class="user-img" src="${data.user.photoURL}">
        `;
}
