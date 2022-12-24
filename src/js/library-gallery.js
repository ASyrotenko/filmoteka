import { FilmsApiService } from './films-service';
import { getRefs } from './get-refs';

const refs = getRefs();
const filmsApiService = new FilmsApiService();

export function renderLibrary(filmsIds) {
  return filmsIds.map(renderMovieCardLib).join('');
}

refs.filmGallery.addEventListener('click', onMovieCardClick);

async function renderMovieCardLib(movieId) {
  const movie = await filmsApiService.fetchMovie(movieId);
  const markup = movieTplLib(movie);
  refs.filmGallery.insertAdjacentHTML('beforeend', markup);
}

function movieTplLib(movie) {
  const {
    original_name,
    original_title,
    genres,
    vote_average,
    vote_count,
    release_date,
    poster_path: posterPath,
    id,
  } = movie;

  const movieTitle = original_name ?? original_title ?? '';
  const movieGenres = genres ? genres.map(genre => genre.name) : '';

  return ` <li   class="film__item">
    
        <a class="film__link"
        href="#"
        >
     <img
  id="${id}"
  data-imgpath=${posterPath}
  class="film__image"
  ${
    posterPath
      ? `
  srcset="
  https://image.tmdb.org/t/p/w500/${posterPath}      500w,
  https://image.tmdb.org/t/p/w780/${posterPath}      780w,
  https://image.tmdb.org/t/p/w1280/${posterPath}    1280w,
  https://image.tmdb.org/t/p/w300/${posterPath}      300w,
    https://image.tmdb.org/t/p/original/${posterPath} 2000w
  "
  src="https://image.tmdb.org/t/p/w300/${posterPath}"
  sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"

  `
      : `src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"
  `
  }
  alt="Movie: ${movieTitle}"
/>
        </a>
      </div>
      <div class="film__info">
          <div class="aver-rate">
            <p class="film__info--text"> Average rate ${vote_average.toFixed(
              1
            )} </p>
          </div>
          <div class="votes-amount">
            <p class="film__info--text"> Votes ${vote_count}</p>
          </div>
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

function renderMovieCard(movie, path) {
  refs.insertImgCont.insertAdjacentHTML('beforeend', getPosterForCard(path));
  refs.movieBox.insertAdjacentHTML('beforeend', movieCardTpl(movie));

  document.querySelector('.spinner').classList.remove('hidden');
}
function movieCardTpl(movie) {
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
  } = movie;

  const movieTitle = original_name ?? original_title ?? '';
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

function getPosterForCard(path) {
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
  sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"

  `
      : `src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"
  `
  }
  alt="Movie title"
/>
`;
}

refs.filmGallery.addEventListener('click', onMovieCardClick);

async function onMovieCardClick(e) {
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
  refs.btnUp.classList.add('btn-up_hide');
  window.addEventListener('keydown', onEscPress);
  document.querySelector('body').classList.add('modal-open');
  let path = e.target.dataset.imgpath;
  renderMovieCard(movieCard, path);
  document.querySelector('.spinner').classList.add('hidden');
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
  if (refs.queue.classList.contains('film-btn--active')) {
    refs.queue.click();
  } else {
    refs.watched.click();
  }
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

function renderVideoBox(videos) {
  const trailer = videos.find(video => video.name === 'Official Trailer' ?? {});
  if (!trailer) {
    refs.watchBtn.classList.add('not-active');
    refs.trailerOverlay.classList.add('not-active');
    return;
  }
  refs.insertVideoCont.insertAdjacentHTML('beforeend', videoTpl(trailer));
}

async function showVideo() {
  refs.insertVideoCont.classList.add('is-active');
  refs.trailerBox.classList.add('is-active');
  refs.watchBtn.setAttribute('disabled', ' ');
  refs.closeVideoBtn.removeAttribute('disabled');
  refs.insertVideoCont.scrollIntoView();
}

function closeVideo() {
  stopVideos();
  refs.insertVideoCont.classList.remove('is-active');
  refs.trailerBox.classList.remove('is-active');
  refs.closeVideoBtn.setAttribute('disabled', '');
  refs.watchBtn.removeAttribute('disabled');
}
