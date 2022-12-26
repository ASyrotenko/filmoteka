import axios from 'axios';

export const API_KEY = '62e7f60baa5f08ed1edf6bd3ed6b9146';
export const BASE_URL = 'https://api.themoviedb.org/3';

export class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
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

  async fetchFilmsTrendingWeek(page) {
    try {
      const option = this.getOptionsMain(page);
      const url = `${BASE_URL}/trending/all/week?${option}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {}
  }

  async fetchFilmsOnSearch(query, page) {
    try {
      document.querySelector('.spinner').classList.remove('hidden');

      const option = this.getOptionsMain(page);
      const url = `${BASE_URL}/search/movie?${option}&query=${query}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {}
  }
  async fetchMovie(movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {}
  }
  async fetchMovieVideo(movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {}
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
