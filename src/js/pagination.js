import Pagination from 'tui-pagination';
import { getRefs } from './get-refs';
import { FilmsApiService } from './films-service';
import { filmTpl } from './films-gallery';
import { combineGenres } from './get-genres';
import { renderGlide } from './glide';
import { onMovieCardClick } from './movie-card';
import { renderLibrary } from './library-gallery';
import { async } from '@firebase/util';

const refs = getRefs();
const apiService = new FilmsApiService();

const paginationOptions = {
  totalItems: 1,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  totalPages: 1,
  page: 1,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
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
    paginationOptions.totalPages = data.total_pages;

    if (data.total_pages <= 1) {
      refs.pagination.classList.add('visually-hidden');
    } else refs.pagination.classList.remove('visually-hidden');
  });

  const glideSearch = await apiService.fetchFilmsTrendingWeek().then(data => {
    return data.results;
  });

  renderGlide(glideSearch);

  const pagination = new Pagination(
    refs.paginationContainer,
    paginationOptions
  );

  let lastPage = document.querySelector('.tui-ico-last');
  lastPage.textContent = paginationOptions.totalPages;

  async function getGenresToMainPage() {
    const genres = await combineGenres();
    return genres;
  }

  const genres = getGenresToMainPage();

  function renderFilmGallery(films, genres) {
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML('beforeend', filmTpl(films, genres));
    document.querySelector('.spinner').style.display = 'none';
    document
      .querySelectorAll('.film__item')
      .forEach(node => node.addEventListener('click', onMovieCardClick));
  }

  async function loadTrendMain(page, genres) {
    const filmsTrending = await apiService.fetchFilmsTrending(page);
    renderFilmGallery(filmsTrending, genres);
  }

  loadTrendMain(1, genres);

  pagination.on('afterMove', e => {
    const firstPage = document.querySelector('.tui-ico-first');
    firstPage.textContent = '';
    loadTrendMain(e.page, genres);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (e.page >= 4) {
      firstPage.textContent = 1;
    }
  });
}

export async function getPaginationFromSerchRequest(query) {
  const renderFilms = await apiService
    .fetchFilmsOnSearch(query)
    .then(response => {
      paginationOptions.totalPages = response.total_pages;
      paginationOptions.totalItems = response.total_results;
      paginationOptions.itemsPerPage = response.results.length;

      if (response.total_pages <= 1) {
        refs.pagination.classList.add('visually-hidden');
      } else refs.pagination.classList.remove('visually-hidden');
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
    document
      .querySelectorAll('.film__item')
      .forEach(node => node.addEventListener('click', onMovieCardClick));
  }

  loadSearch(query);

  pagination.on('afterMove', e => {
    loadSearch(query, e.page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    const firstPage = document.querySelector('.tui-ico-first');
    const lastPage = document.querySelector('.tui-ico-last');

    if (e.page > 3) {
      firstPage.textContent = 1;
    } else firstPage.textContent = '';

    if (paginationOptions.totalPages >= 5) {
      lastPage.textContent = paginationOptions.totalPages;
    }
    if (paginationOptions.totalPages === paginationOptions.visiblePages) {
      lastPage.textContent = '';
      firstPage.textContent = '';
    }
  });
}

export async function getPaginationFromLibrary(param) {
  paginationOptions.totalItems = param.length;
  let arrayParam = param;
  let sizeOnPage = paginationOptions.itemsPerPage;
  paginationOptions.totalPages = Math.ceil(arrayParam.length / sizeOnPage);
  let totPage = paginationOptions.totalPages;

  let arrayRenderLib = [];

  for (let i = 0; i < totPage; i++) {
    arrayRenderLib[i] = arrayParam.slice(
      i * sizeOnPage,
      i * sizeOnPage + sizeOnPage
    );
    renderLibrary(arrayRenderLib[i]);
  }

  refs.filmGallery.innerHTML = '';
  const paginationLib = new Pagination(
    refs.paginationContainer,
    paginationOptions
  );

  if (totPage <= 1) {
    refs.pagination.classList.add('visually-hidden');
  } else refs.pagination.classList.remove('visually-hidden');

  paginationLib.on('afterMove', e => {
    renderLibrary(arrayRenderLib[e.page - 1]);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}
