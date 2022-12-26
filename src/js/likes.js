import { Firebase, auth } from './firebase-class';
import { getRefs } from './get-refs';

const refs = getRefs();

const firebase = new Firebase();

refs.likeBtn.addEventListener('click', voteLike);
refs.dislikeBtn.addEventListener('click', voteDislike);

// refs.filmGallery.addEventListener('click', getRate);

function voteLike() {
  firebase.removeRate('dislike');
  firebase.rateMovie('like');
  if (refs.dislike.textContent > 0) {
    refs.dislike.textContent -= 1;
  }
  refs.likeBtn.disabled = true;
  refs.dislikeBtn.disabled = false;
}

function voteDislike() {
  firebase.removeRate('like');

  firebase.rateMovie('dislike');
  if (refs.like.textContent > 0) {
    refs.like.textContent -= 1;
  }
  refs.dislikeBtn.disabled = true;
  refs.likeBtn.disabled = false;
}

// function getRate() {
//   const getLikes = setTimeout(() => {
//     const like = firebase.getMovieRate('like');
//     console.log(like);
//   }, 350);
// }
