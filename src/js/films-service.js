import axios from 'axios';
import { pagination } from './pagination';
export const API_KEY = '62e7f60baa5f08ed1edf6bd3ed6b9146';
export const BASE_URL = 'https://api.themoviedb.org/3';

export class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchFilmsTrending() {
    try {
      const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${this.page}`;
      const response = await axios.get(url);

      //   this.incrementPage();
      // console.log('CHECK!!!!!!!!fetchFilmsTrending');

      return response.data;
    } catch (error) {
      alert('ERROR');
    }
  }
  async fetchFilmsOnSearch() {
    try {
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
      const response = await axios.get(url);
      //   this.incrementPage();
      console.log('CHECK!!!!!!!!fetchFilmsOnSearch');

      return response.data;
    } catch (error) {
      alert(
        'Sorry, there are no films matching your search query. Please try again.'
      );
    }
  }
  async fetchMovie(movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log('ERROR - Mov is is not available');
    }
  }
  async fetchMovieVideo(movieId) {
    try {
      const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      alert('ERROR');
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