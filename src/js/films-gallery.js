export function filmTpl({ results }, genresDict) {
  return results
    .map(
      ({
        original_name,
        original_title,
        release_date,
        first_air_date,
        genre_ids,
        vote_count,
        vote_average,
        poster_path: poster,
        id,
      }) => {
        const filmTitle = original_name ?? original_title ?? '';
        const filmDate = release_date ?? first_air_date ?? '';

        return ` <li   class="film__item">
    
        <a class="film__link"
        href="#"
        >
          <img
  id="${id}"
    data-imgpath=${poster}
  class="film__image"
  ${
    poster
      ? `
  srcset="
    https://image.tmdb.org/t/p/w300/${poster}      300w,
    https://image.tmdb.org/t/p/w500/${poster}      500w,
    https://image.tmdb.org/t/p/w780/${poster}      780w,
    https://image.tmdb.org/t/p/w1280/${poster}    1280w,
    https://image.tmdb.org/t/p/original/${poster} 2000w
  "
  loading="lazy"
  src="https://image.tmdb.org/t/p/w300/${poster}"
    sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"

  `
      : `src="https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg"
  `
  }
  alt="Movie: ${filmTitle}"
/>
        </a>
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
      </div>
      
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
