import { FilmsApiService } from './films-service';
import { getRefs } from './get-refs';
import { closeVideo, renderVideoBox } from './addvideo';
import Notiflix from 'notiflix';

const refs = getRefs();
const filmsApiService = new FilmsApiService();

const backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', backdropClick);

export function renderMovieCard(movie, path) {
  refs.insertImgCont.insertAdjacentHTML('beforeend', getPosterForCard(path));
  refs.movieBox.insertAdjacentHTML('beforeend', movieCardTpl(movie));

  //SPINNER
  document.querySelector('.spinner').classList.add('hidden');
}
export function movieCardTpl(movie) {
  const {
    title,
    name,
    original_name,
    original_title,
    popularity,
    genres,
    vote_average,
    vote_count,
    overview,
    id,
  } = movie;

  const movieTitle = title ?? name ?? original_name ?? original_title ?? '';
  const movieGenres = genres ? genres.map(genre => genre.name) : '';

  return `
  <div class="movie__id" id="${id}" ><h2 class="movie-card__title">
    ${title ?? movieTitle}
    </h2>
  <div class="movie__info-container">
<table class="movie-info__table">
  <tr>
    ${
      vote_count
        ? `
            <td class="movie__info-item">Vote / Votes</td>
        `
        : ''
    }
    ${
      vote_count
        ? `
            <td class="movie__info-data"><span class="td-box">${vote_average.toFixed(
              1
            )}</span> / ${vote_count}</td>
        `
        : ''
    }
    
  </tr>
  <tr>
    ${
      popularity
        ? `
            <td class="movie__info-item">Popularity</td>
        `
        : ''
    }
    ${
      popularity
        ? `
            <td class="movie__info-data">${popularity.toFixed(1)}</td>
        `
        : ''
    }
  </tr>
  <tr>
     ${
       movieTitle
         ? `
                <td class="movie__info-item">Original Title</td>
        `
         : ''
     }
    ${
      movieTitle
        ? `
                <td class="movie__info-data movie__info-data--title">${movieTitle}</td>
        `
        : ''
    }
  </tr>
    <tr>
    ${movieGenres ? `<td class="movie__info-item">Genre</td>` : ''}
    ${
      movieGenres
        ? `<td class="movie__info-data">${movieGenres.join(', ')}</td>`
        : ''
    }
  </tr>
</table>
</div>
${
  overview
    ? `
    <h3 class="movie__about">About</h3> `
    : ''
}
${
  overview
    ? `
    <p class="movie__about-info">${overview}</p> `
    : ''
}
</div>`;
}

export function getPosterForCard(path) {
  return `
         <img
  class="movie__poster"
  ${
    path
      ? `
    srcset="
    https://image.tmdb.org/t/p/w300/${path}      300w,
    https://image.tmdb.org/t/p/w500/${path}      500w,
    https://image.tmdb.org/t/p/w780/${path}      780w,
    https://image.tmdb.org/t/p/w1280/${path}    1280w,
    https://image.tmdb.org/t/p/original/${path} 2000w
  "
  src="https://image.tmdb.org/t/p/w300/${path}"
  sizes="(min-width:1280px) 375px, (min-width:768px) 264px, 100vw"

  
  `
      : `src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"
  `
  }
  alt="Movie title"
/>
`;
}

//-----------------
const headerElTest = document.querySelector('.header');
// console.log(headerElTest);
//-----------------

export async function onMovieCardClick(e) {
  e.preventDefault();
  if (
    !e.currentTarget.classList.contains('header__form-list-item') &&
    !e.currentTarget.classList.contains('film__item')
  ) {
    return;
  }
  refs.insertImgCont.innerHTML = '';
  refs.movieBox.innerHTML = '';
  refs.watchBtn.classList.remove('not-active');
  const { itemid, imgpath } = e.currentTarget.dataset;
  const movieCard = await filmsApiService.fetchMovie(itemid);
  if (!movieCard) {
    return Notiflix.Notify.failure('Sorry, movie is not found');
  }
  document.querySelector('.spinner').classList.add('hidden');
  refs.modalBackdrop.classList.remove('is-hidden');
  headerElTest.classList.add('disappearing__header-js'); //sticky-header

  refs.btnUp.classList.add('btn-up_hide');
  window.addEventListener('keydown', onEscPress);
  document.querySelector('body').classList.add('modal-open');
  let path = imgpath === 'null' ? undefined : imgpath;
  renderMovieCard(movieCard, path);
  const movieCardIdRef = document.querySelector('.movie__id');
  const movieId = movieCardIdRef.id;
  const videos = await filmsApiService.fetchMovieVideo(movieId);
  renderVideoBox(videos);
}

refs.modalCloseBtn.addEventListener('click', onMovieModalClose);

function onMovieModalClose(e) {
  refs.trailerOverlay.classList.remove('not-active');

  refs.modalBackdrop.classList.add('is-hidden');
  headerElTest.classList.remove('disappearing__header-js'); //sticky-header
  window.removeEventListener('keydown', onEscPress);
  closeVideo();
  document.querySelector('body').classList.remove('modal-open');
  refs.insertVideoCont.innerHTML = ' ';

  refs.addToWatched.textContent = 'add to watched';
  refs.addToWatched.classList.remove('film-btn--active');
  refs.addToQueue.textContent = 'add to queue';
  refs.addToQueue.classList.remove('film-btn--active');
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    onMovieModalClose();
  }
}

function backdropClick(e) {
  if (e.currentTarget === e.target) {
    onMovieModalClose();
  }
}
