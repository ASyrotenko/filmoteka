// const posterUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const posterLargeUrl = 'https://image.tmdb.org/t/p/original';
// const posterLargeUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
import { filmsApiService } from '../index';
import { getRefs } from './get-refs';
import { closeVideo, renderVideoBox } from './addvideo';
import { throttle } from 'lodash';

const refs = getRefs();
const backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', backdropClick);

function renderMovieCard(movie) {
  refs.insertImgCont.insertAdjacentHTML('beforeend', getPosterForCard(movie));
  refs.movieBox.insertAdjacentHTML('beforeend', movieCardTpl(movie));
  document.querySelector('.spinner').style.display = 'none';
}
export function movieCardTpl(movie) {
  const {
    title,
    original_name,
    original_title,
    popularity,
    genres,
    vote_average,
    vote_count,
    overview,
    id,
    video,
  } = movie;

  const movieTitle = original_name ?? original_title ?? '';
  const movieGenres = genres ? genres.map(genre => genre.name) : '';

  return `
  <div class="img-box"></div>
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
            <td class="movie__info-data">${popularity.toFixed(2)}</td>
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

export function getPosterForCard({
  original_title,
  poster_path,
  backdrop_path,
} = {}) {
  const moviePoster = poster_path ?? backdrop_path ?? '';
  return `
             <img
            class="movie__poster"
            ${
              moviePoster
                ? `
        src="${posterLargeUrl}${moviePoster}"
        `
                : `src = ''`
            }
                        alt="Movie: ${original_title ?? ''}"
          />
`;
}

refs.filmGallery.addEventListener('click', throttle(onMovieCardClick, 5000));

async function onMovieCardClick(e) {
  e.preventDefault();
  document.querySelector('.spinner').style.display = 'block';

  if (!e.target.classList.contains('film__image')) {
    return;
  }

  refs.insertImgCont.innerHTML = '';
  refs.movieBox.innerHTML = '';
  refs.watchBtn.classList.remove('not-active');

  const movieCard = await filmsApiService.fetchMovie(e.target.id);
  if (!movieCard) {
    return;
    // Вивести повідомлення про помилку!!!!
  }

  refs.modalBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
  document.querySelector('body').classList.add('modal-open');
  renderMovieCard(movieCard);
  const movieCardIdRef = document.querySelector('.movie__id');
  const movieId = movieCardIdRef.id;
  const videos = await filmsApiService.fetchMovieVideo(movieId);
  renderVideoBox(videos);
}

refs.modalCloseBtn.addEventListener('click', onMovieModalClose);

function onMovieModalClose(e) {
  refs.modalBackdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscPress);
  closeVideo();
  document.querySelector('body').classList.remove('modal-open');
  refs.insertVideoCont.innerHTML = ' ';
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
