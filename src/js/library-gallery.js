import { FilmsApiService } from './films-service';
import { getRefs } from './get-refs';
import { onMovieCardClick } from './movie-card';
import { renderGlide } from './glide';

const refs = getRefs();
const filmsApiService = new FilmsApiService();

async function playGlideLib() {
  const glideSearch = await filmsApiService
    .fetchFilmsTrendingWeek()
    .then(data => {
      return data.results;
    });
  renderGlide(glideSearch);
}

if (refs.myLibrary.classList.contains('nav__link--current')) {
  playGlideLib();
}

export async function renderLibrary(filmsIds) {
  refs.filmGallery.innerHTML = '';
  const tmpl = (await Promise.all(filmsIds.map(renderMovieCardLib))).join('');
  refs.filmGallery.insertAdjacentHTML('beforeend', tmpl);
  document
    .querySelectorAll('.film__item')
    .forEach(node => node.addEventListener('click', onMovieCardClick));
}

async function renderMovieCardLib(movieId) {
  const movie = await filmsApiService.fetchMovie(movieId);
  const markup = movieTplLib(movie);
  return markup;
}

function movieTplLib(movie) {
  const {
    title,
    name,
    original_name,
    original_title,
    genres,
    vote_average,
    vote_count,
    release_date,
    poster_path: posterPath,
    id,
  } = movie;

  const movieTitle = title ?? name ?? original_name ?? original_title ?? '';
  const movieGenres = genres ? genres.slice(0, 2).map(genre => genre.name) : '';
  if (genres && genres.length > 2) {
    movieGenres.push('Other');
  }
  return ` <li class="film__item" data-itemId="${id}" data-imgpath="${posterPath}">
    
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
        }
      <div class="film__wrap">
      ${
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
        </div>
   </div>
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

  if (refs.myLibrary.classList.contains('nav__link--current')) {
    if (refs.queue.classList.contains('film-btn--active')) {
      refs.queue.click();
    } else {
      refs.watched.click();
    }
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    onMovieModalClose();
    if (refs.myLibrary.classList.contains('nav__link--current')) {
      if (refs.queue.classList.contains('film-btn--active')) {
        refs.queue.click();
      } else {
        refs.watched.click();
      }
    }
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
