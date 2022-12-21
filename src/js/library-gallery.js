import { FilmsApiService } from './films-service';
export const filmsApiService = new FilmsApiService();
import { getRefs } from './get-refs';
// import { renderVideoBox } from './addvideo';

const refs = getRefs();
const posterLargeUrl = 'https://image.tmdb.org/t/p/original';

export function renderLibrary(filmsIds) {
  return filmsIds.map(renderMovieCardLib).join('');
}

refs.filmGallery.addEventListener('click', onMovieCardClick);

async function renderMovieCardLib(movieId) {
  const movie = await filmsApiService.fetchMovie(movieId);
  const poster = getPosterForLibCard(movie);
  const markup = movieTplLib(movie, poster);
  refs.filmGallery.insertAdjacentHTML('beforeend', markup);
}

function getPosterForLibCard({ poster_path, backdrop_path } = {}) {
  const moviePoster = poster_path ?? backdrop_path ?? '';
  const imgUrl = `${posterLargeUrl}${moviePoster}`;
  return imgUrl;
}

function movieTplLib(movie, poster) {
  const {
    original_name,
    original_title,
    genres,
    vote_average,
    release_date,
    id,
  } = movie;

  const movieTitle = original_name ?? original_title ?? '';
  const movieGenres = genres ? genres.map(genre => genre.name) : '';

  return ` <li   class="film__item">
    
        <a class="film__link"
        href="#"
        >
          <img id='${id}'
            class="film__image"
            ${
              poster
                ? `
        src="${poster}"
        `
                : `src = ''`
            }
                        alt="Movie: ${movieTitle}"
            loading="lazy"
          />
        </a>
      </div>
      <div class="film__info">
      <p class="film__info--text">Watch ${movieTitle} online</p>
      </div>
      <div class="film__content">
        ${
          movieTitle
            ? `
        <h3 class="film__film__title">
          ${movieTitle}</h3>
        `
            : ''
        } ${
    movieGenres
      ? `
        <p class="film__genres">${movieGenres.join(', ')}
        </p>
        `
      : ''
  } 
        
        ${
          release_date
            ? `
        <p class="film__date">| ${new Date(release_date).getFullYear()}</p>
        `
            : ''
        } 
        ${
          vote_average
            ? `
        <p class="film__value">${vote_average.toFixed(2)}</p>
        `
            : ''
        }
   
    </li>
    `;
}
const backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', backdropClick);

function renderMovieCard(movie) {
  refs.insertImgCont.insertAdjacentHTML('beforeend', getPosterForCard(movie));
  refs.movieBox.insertAdjacentHTML('beforeend', movieCardTpl(movie));
  //   document.querySelector('.spinner').style.display = 'none';
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

refs.filmGallery.addEventListener('click', onMovieCardClick);

export async function onMovieCardClick(e) {
  e.preventDefault();

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
  refs.trailerOverlay.classList.remove('not-active');

  refs.modalBackdrop.classList.add('is-hidden');
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

const stopVideos = () => {
  document.querySelectorAll('iframe').forEach(v => {
    v.src = v.src;
  });
  document.querySelectorAll('video').forEach(v => {
    v.pause();
  });
};

refs.trailerOverlay.addEventListener('click', showVideo);
refs.closeVideoBtn.addEventListener('click', closeVideo);
refs.watchBtn.addEventListener('click', showVideo);

function videoTpl(trailer) {
  const { key, site } = trailer;

  return `<iframe class="iframe" width="100%" height="100%" src="https://www.${site}.com/embed/${key}?origin=https://asyrotenko.github.io" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

export function renderVideoBox(videos) {
  const trailer = videos.find(video => video.name === 'Official Trailer' ?? {});
  if (!trailer) {
    refs.watchBtn.classList.add('not-active');
    refs.trailerOverlay.classList.add('not-active');
    return;
  }
  refs.insertVideoCont.insertAdjacentHTML('beforeend', videoTpl(trailer));
}

export async function showVideo() {
  refs.insertVideoCont.classList.add('is-active');
  refs.trailerBox.classList.add('is-active');
  refs.watchBtn.setAttribute('disabled', ' ');
  refs.closeVideoBtn.removeAttribute('disabled');
  refs.insertVideoCont.scrollIntoView();
}

export function closeVideo() {
  stopVideos();
  refs.insertVideoCont.classList.remove('is-active');
  refs.trailerBox.classList.remove('is-active');
  refs.closeVideoBtn.setAttribute('disabled', '');
  refs.watchBtn.removeAttribute('disabled');
}
