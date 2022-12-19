import axios from 'axios';
import { API_KEY, BASE_URL } from './films-service';

async function fetchMovieGenres() {
  try {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data.genres.reduce((acc, currentValue) => {
      acc[currentValue.id] = currentValue.name;

      return acc;
    }, {});
  } catch (error) {
    alert('ERRORgenres');
  }
}

async function fetchTvGenres() {
  try {
    const url = `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data.genres.reduce((acc, currentValue) => {
      acc[currentValue.id] = currentValue.name;

      return acc;
    }, {});
  } catch (error) {
    alert('ERRORTvgenres');
  }
}

export async function combineGenres() {
  const movieGenres = await fetchMovieGenres();
  const tvGenres = await fetchTvGenres();
  const genres = { ...movieGenres, ...tvGenres };
  return genres;
}
