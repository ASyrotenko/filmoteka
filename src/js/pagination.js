import Pagination from 'tui-pagination';
import { getRefs } from './get-refs';
import { FilmsApiService } from './films-service';
import { filmTpl } from './films-gallery';
import { combineGenres } from './get-genres';

const refs = getRefs();
const apiService = new FilmsApiService();

const paginationOptions = {
  totalItems: 0,
  itemsPerPage: 1,
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

export async function getPaginationFromMainRequest() {
  const renderFilms = await apiService.fetchFilmsTrending().then(data => {
    paginationOptions.totalItems = data.total_results;
    paginationOptions.itemsPerPage = data.results.length;
    console.log(data.total_results);
  });
  const paginationT = new Pagination(
    refs.paginationContainer,
    paginationOptions
  );

  function renderFilmGallery(films, genres) {
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML('beforeend', filmTpl(films, genres));
    document.querySelector('.spinner').style.display = 'none';
  }

  async function loadTrendMain(page) {
    const genres = await combineGenres();
    const filmsTrending = await apiService.fetchFilmsTrending(page);
    renderFilmGallery(filmsTrending, genres);
  }

  loadTrendMain();

  paginationT.on('afterMove', e => {
    loadTrendMain(e.page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}

//запуск пагінації головної сторінки
getPaginationFromMainRequest();

export async function getPaginationFromSerchRequest(query) {
  const renderFilms = await apiService
    .fetchFilmsOnSearch(query)
    .then(response => {
      console.log(response.total_results);
      if (response.total_results >= 1000) {
        paginationOptions.totalItems = 500;
      } else {
        paginationOptions.totalItems = response.total_results;
      }

      paginationOptions.itemsPerPage = response.results.length;
    });

  const pagination = new Pagination(
    refs.paginationContainer,
    paginationOptions
  );

  async function loadSearch(query, page) {
    let genres = await combineGenres();
    let filmOnSearch = await apiService.fetchFilmsOnSearch(query, page);
    renderFilmGallery(filmOnSearch, genres);
  }

  async function renderFilmGallery(films, genres) {
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML('beforeend', filmTpl(films, genres));
  }

  loadSearch(query);

  pagination.on('afterMove', e => {
    loadSearch(query, e.page);
    console.log(e.page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}
