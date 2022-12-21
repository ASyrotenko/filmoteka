import { getRefs } from './get-refs';
import { FilmsApiService } from './films-service';
import { filmTpl } from './films-gallery';
import { filmShortTpl } from './films-gallery';
import { combineGenres } from './get-genres';

const refs = getRefs();

const filmsApiService = new FilmsApiService();

refs.searchForm.addEventListener('submit', onSearchSubmit);

refs.searchForm.addEventListener('input', onSearchInput);

async function onSearchInput(e) {
  // e.preventDefault();

  filmsApiService.query = e.currentTarget.elements.query.value;

  if (filmsApiService.query === '') {
    onError();
    return;
  }

  const filmOnSearch = await filmsApiService.fetchFilmsOnSearch(
    filmsApiService.query
  );
  if (!filmOnSearch?.results?.length) {
    onError();
    return;
  }

  renderFilmSearchList(filmOnSearch);
}

async function onSearchSubmit(e) {
  e.preventDefault();
  const form = e.target;
  filmsApiService.query = e.target.search.value.trim();

  if (filmsApiService.query === '') {
    onError();
    return;
  }

  const genres = await combineGenres();
  const filmOnSearch = await filmsApiService.fetchFilmsOnSearch(
    filmsApiService.query
  );
  if (!filmOnSearch?.results?.length) {
    onError();
    return;
  }
  clearGalleryContainer();
  renderFilmGallery(filmOnSearch, genres);
  form.reset();
}

function onError() {
  alert('Please type something');
  console.log('ERROR');
}

function renderFilmGallery(films, genres) {
  refs.filmGallery.insertAdjacentHTML('beforeend', filmTpl(films, genres));
}

function clearGalleryContainer() {
  refs.filmGallery.innerHTML = '';
}

function renderFilmSearchList(films) {
  refs.searchQueryList.insertAdjacentHTML('beforeend', filmShortTpl(films));
}
