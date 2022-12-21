const posterUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const posterLargeUrl = 'https://image.tmdb.org/t/p/original';
// const posterLargeUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
// import { filmsApiService } from '../index';
//image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

export function filmTpl({ results }, genresDict) {
  return results
    .map(
      ({
        original_name,
        original_title,
        release_date,
        first_air_date,
        genre_ids,
        vote_average: votes,
        poster_path: poster,
        id,
      }) => {
        const filmTitle = original_name ?? original_title ?? '';
        const filmDate = release_date ?? first_air_date ?? '';
        return ` <li   class="film__item">
    
        <a class="film__link"
        href="#"
        >
          <img id='${id}'
            class="film__image"
            ${
              poster
                ? `
        src="${posterLargeUrl}${poster}"
        `
                : `src = ''`
            }
                        alt="Movie: ${filmTitle}"
            loading="lazy"
          />
        </a>
      
      <div class="film__content">
        ${
          filmTitle
            ? `
        <h3 class="film__film__title">
          ${filmTitle}</h3>
        `
            : ''
        } ${
          genre_ids
            ? `
        <p class="film__genres">${genre_ids
          .map(id => genresDict[id])
          .join(', ')}
        </p>
        `
            : ''
        } 
        ${
          votes
            ? `
        <p class="film__value">${votes.toFixed(2)}</p>
        `
            : ''
        }
        ${
          filmDate
            ? `
        <p class="film__date">| ${new Date(filmDate).getFullYear()}</p>
        `
            : ''
        } 
   
    </li>
    `;
      }
    )
    .join('');
}

//fetch small info about movies
export function filmShortTpl({ results }) {
  return results
    .map(
      ({
        original_name,
        original_title,
        release_date,
        first_air_date,
        poster_path: poster,
        id,
      }) => {
        const filmTitle = original_name ?? original_title ?? '';
        const filmDate = release_date ?? first_air_date ?? '';
        return ` <li   class="header__form-list-item">
        <a class="film__link"
        href="#"
        >
          <img id='${id}'
            class="film-short__image"
            ${
              poster
                ? `
        src="${posterLargeUrl}${poster}"
        `
                : `src = ''`
            }
                        alt="Movie: ${filmTitle}" width="35" height="53"
            loading="lazy"
          />
        </a>
      <div class="film-short__content">
        ${
          filmTitle
            ? `
        <h3 class="film__film__title">
          ${filmTitle}</h3>
        `
            : ''
        } 
        ${
          filmDate
            ? `
        <p class="film__date">| ${new Date(filmDate).getFullYear()}</p>
        `
            : ''
        } 
   
    </li>
    `;
      }
    )
    .join('');
}
