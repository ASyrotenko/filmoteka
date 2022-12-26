import { getRefs } from './get-refs';
import { FilmsApiService } from './films-service';

import { filmShortTpl } from './films-gallery';

import { onMovieCardClick } from './movie-card';
import { getPaginationFromSerchRequest } from './pagination';

const refs = getRefs();
const filmsApiService = new FilmsApiService();

const debounce = require('debounce');

const DEBOUNCE_DELAY = 300;

refs.searchForm.addEventListener('submit', onSearchSubmit);

refs.body.addEventListener('click', inputClose);

//Input Search
refs.searchForm.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);

async function onSearchInput(e) {
  refs.spanNotification.classList.add('hidden');
  filmsApiService.query = e.target.value.trim();
  clearSearchList();
  const filmOnSearch = await filmsApiService.fetchFilmsOnSearch(
    filmsApiService.query
  );
  if (!filmOnSearch?.results?.length) {
    clearSearchList();
    // Notiflix.Notify.failure('Sorry, film is not found');
    return;
  }

  renderFilmSearchList(filmOnSearch);
}

//Submit search
async function onSearchSubmit(e) {
  e.preventDefault();
  const form = e.target;

  filmsApiService.query = e.target.search.value.trim();

  if (filmsApiService.query === '') {
    // Notiflix.Notify.failure('Please type something');
    refs.spanNotification.classList.remove('hidden');
    return;
  }

  const filmOnSearch = await filmsApiService.fetchFilmsOnSearch(
    filmsApiService.query
  );

  if (!filmOnSearch?.results?.length) {
    // Notiflix.Notify.failure('Sorry, film is not found');
    refs.spanNotification.classList.remove('hidden');

    return;
  }

  clearGalleryContainer();

  getPaginationFromSerchRequest(filmsApiService.query);
  document.querySelector('.spinner').classList.add('hidden');
  form.reset();
}

//render markup
function renderFilmSearchList(films) {
  refs.searchQueryList.insertAdjacentHTML('beforeend', filmShortTpl(films));
  document
    .querySelectorAll('.header__form-list-item')
    .forEach(node => node.addEventListener('click', onMovieCardClick));
}

//clear markup
function clearGalleryContainer() {
  refs.filmGallery.innerHTML = '';
}

function clearSearchList() {
  refs.searchQueryList.innerHTML = '';
}

function inputClose(e) {
  if (e.target.className !== 'header__form-input')
    refs.searchQueryList.innerHTML = '';
}
