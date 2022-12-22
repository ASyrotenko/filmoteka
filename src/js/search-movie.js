import { getRefs } from './get-refs';
import { FilmsApiService } from './films-service';
import { filmTpl } from './films-gallery';
import { filmShortTpl } from './films-gallery';
import { combineGenres } from './get-genres';
import { renderMovieCard } from './movie-card';
import Notiflix from 'notiflix';

var debounce = require('debounce');

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

const filmsApiService = new FilmsApiService();

refs.searchQueryList.addEventListener('click', event => {
  renderMovieCard(event);
});

refs.body.addEventListener('click', inputClose);

//Input Search
refs.searchForm.addEventListener(
  'input',
  debounce(onSearchInput, DEBOUNCE_DELAY)
);

async function onSearchInput(e) {
  filmsApiService.query = e.target.value.trim();
  clearSearchList();

  const filmOnSearch = await filmsApiService.fetchFilmsOnSearch(
    filmsApiService.query
  );
  if (!filmOnSearch?.results?.length) {
    clearSearchList();
    Notiflix.Notify.failure('Sorry, film is not found');
    return;
  }

  renderFilmSearchList(filmOnSearch);
}

//Submit search
refs.searchForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();
  const form = e.target;
  filmsApiService.query = e.target.search.value.trim();
  if (filmsApiService.query === '') {
    Notiflix.Notify.failure('Please type something');
    return;
  }

  const genres = await combineGenres();
  const filmOnSearch = await filmsApiService.fetchFilmsOnSearch(
    filmsApiService.query
  );

  if (!filmOnSearch?.results?.length) {
    Notiflix.Notify.failure('Sorry, film is not found');
    return;
  }

  clearGalleryContainer();
  renderFilmGallery(filmOnSearch, genres);
  form.reset();
}

function renderFilmGallery(films, genres) {
  refs.filmGallery.insertAdjacentHTML('beforeend', filmTpl(films, genres));
}

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

function renderFilmSearchList(films) {
  refs.searchQueryList.insertAdjacentHTML('beforeend', filmShortTpl(films));
}
