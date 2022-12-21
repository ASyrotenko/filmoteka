import { getRefs } from './get-refs';
import { FilmsApiService } from './films-service';
import { filmTpl } from './films-gallery';
import { combineGenres } from './get-genres';

const refs = getRefs();

const filmsApiService = new FilmsApiService();

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(e) {
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
