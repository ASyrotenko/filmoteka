import Glide from '@glidejs/glide';
import '~node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import { combineGenres } from './pagination';
import { FilmsApiService } from './films-service';

const apiService = new FilmsApiService();

const config = {
  type: 'carousel',
  perView: 10,
  autoplay: 2500,
  gap: 15,
  touchRatio: 0.5,
  keyboard: true,
  hoverpause: true,
  animationDuration: 1000,
  animationTimingFunc: 'ease-out',
  peek: { before: 50, after: 50 },
  breakpoints: {
    1280: {
      perView: 7,
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

async function loadTrendMain(page) {
  const genres = await combineGenres();

  const filmsTrending = await apiService.fetchFilmsTrending(page);
  renderFilmGallery(filmsTrending, genres);
}

export function renderGlide(trendMovies) {
  const containerSlider = document.querySelector('.container__slider');
  containerSlider.innerHTML = '';

  let markup = `
    <div class="glide">
          <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides" id="glide__slides"></ul>
          </div>
      </div>`;

  containerSlider.insertAdjacentHTML('beforeend', markup);

  const slidesContainer = document.querySelector('.glide__slides');
  markup = trendMovies
    .map(
      el =>
        `<li class="glide__slide glide__slide--main" id="${el.id}" style="width: 148.2px; margin-left: 7.5px; margin-right: 7.5px;"><img class="cards__image-poster" data-img-id="${el.id}" src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="film__poster"></li>`
    )
    .join('');
  slidesContainer.innerHTML = markup;
  glide.mount();
  page = apiService.page;
  const slidesList = document.querySelector('#glide__slides');
  slidesList.addEventListener('click', loadTrendMain(page));
}
