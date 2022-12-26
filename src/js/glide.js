import { onMovieCardClick } from './movie-card';
import Glide from '@glidejs/glide';
import '~node_modules/@glidejs/glide/dist/css/glide.core.min.css';

const config = {
  type: 'carousel',
  perView: 6,
  autoplay: 1500,
  gap: 15,
  touchRatio: 0.5,
  keyboard: true,
  hoverpause: true,
  animationDuration: 900,
  animationTimingFunc: 'ease-out',
  peek: { before: 50, after: 50 },
  breakpoints: {
    1280: {
      perView: 6,
    },
    768: {
      perView: 4,
    },
    500: {
      perView: 2,
    },
  },
};
const glide = new Glide('.glide', config);

export function renderGlide(trendMovies) {
  const containerSlider = document.querySelector('.container__slider');
  let markup = `
    <div class="glide">
          <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides" id="glide__slides"></ul>
          </div>
      </div>`;

  containerSlider.insertAdjacentHTML('beforeend', markup);

  const slidesContainer = document.querySelector('.glide__slides');
  //console.log(trendMovies);
  markup = trendMovies
    .map(
      el =>
        `<li class="glide__slide glide__slide--main" data-itemid="${el.id}" data-imgpath="${el.poster_path}" style="width: 148.2px; margin-left: 7.5px; margin-right: 7.5px;"><a class="film__link" href="#"><img class="cards__image-poster" data-imgid="${el.id}" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="film__poster"></a></li>`
    )
    .join('');
  slidesContainer.insertAdjacentHTML('beforeend', markup);
  slidesContainer.querySelectorAll('.glide__slide').forEach(node => node.addEventListener('click', onMovieCardClick));

     
  glide.mount();
}


