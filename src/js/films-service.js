import axios from 'axios';
// import Notiflix from 'notiflix';
export const API_KEY = '62e7f60baa5f08ed1edf6bd3ed6b9146';
export const BASE_URL = 'https://api.themoviedb.org/3';

export class FilmsApiService {
  constructor() {
    this.searchQuery = '';
  }

  getOptionsMain(page = 1) {
    const options = new URLSearchParams({
      api_key: `${API_KEY}`,
      page: page,
    });
    return options;
  }

  async fetchFilmsTrending(page) {
    try {
      const option = this.getOptionsMain(page);
      const url = `${BASE_URL}/trending/all/day?${option}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      // return Notiflix.Notify.failure('Error');
    }
  }
  async fetchFilmsOnSearch() {
    try {
      //spinner
      document.querySelector('.spinner').classList.remove('hidden');
      // document
      //   .querySelector('.spinner')
      //   .setAttribute('style', 'display:inline !important');
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {}
  }
  async fetchMovie(movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      // return Notiflix.Notify.failure('Error - Mov is is not available');
    }
  }
  async fetchMovieVideo(movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      // return Notiflix.Notify.failure('Error');
    }
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
