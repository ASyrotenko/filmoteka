import Pagination from 'tui-pagination';
import { getRefs } from './get-refs';
import { FilmsApiService } from './films-service';
import { load } from '../index';
import { renderFilmGallery } from './search-movie';
import { filmTpl } from './films-gallery';
import { combineGenres } from './get-genres';

const refs = getRefs();

const paginationOptions = {
  totalItems: 0,
  itemsPerPage: 21,
  visiblePages: 5,
  centerAlign: true,
  page: 1,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">☀</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const apiService = new FilmsApiService();

export async function getPaginationFromMainRequest() {
  const renderFilms = await apiService.fetchFilmsTrending().then(data => {
    paginationOptions.totalItems = data.total_pages;
    console.log(data.total_results);
  });
  const pagination = new Pagination(
    refs.paginationContainer,
    paginationOptions
  );

  load(pagination.page);
  pagination.on('beforeMove', e => {
    load(e.page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    refs.filmGallery.innerHTML = '';
  });
}

export async function getPaginationFromSearchRequest() {
  // const renderFilms = await apiService.fetchFilmsOnSearch().then(data => {
  //   paginationOptions.totalItems = total_pages;
  // });
  // const pagination = new Pagination(
  //   refs.paginationContainer,
  //   paginationOptions
  // );

  const renderFilms = await apiService.fetchFilmsTrending().then(data => {
    paginationOptions.totalItems = data.total_pages;
    console.log(data.total_results);
  });
  const pagination = new Pagination(
    refs.paginationContainer,
    paginationOptions
  );

  const genres = await combineGenres();
  const filmOnSearch = await apiService.fetchFilmsOnSearch(
    apiService.searchQuery
  );

  refs.filmGallery.innerHTML = '';
  // renderFilmGallery(filmOnSearch, genres);
  // pagination.on('beforeMove', e => {
  //   renderFilmGallery(filmOnSearch, genres);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  //   refs.filmGallery.innerHTML = '';
  // });
}
