import { FilmsApiService } from './films-service';
export const filmsApiService = new FilmsApiService();
import { getRefs } from './get-refs';

const refs = getRefs();
const posterLargeUrl = 'https://image.tmdb.org/t/p/original';

export function renderLibrary(filmsIds) {
  return filmsIds.map(renderMovieCardLib).join('');
}

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
