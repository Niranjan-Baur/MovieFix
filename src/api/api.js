import axios from "axios";
import { environment } from "../environments/environment";

// start writing your all api here....
const API_KEY = '2dca580c2a14b55200e784d157207b4d'

const api = axios.create({
  baseURL: environment.baseURL,
});

export const fetchMovies = async (year, genreIds , page = 1) => {
  console.log(year, genreIds,page,39)
  const genreQuery = genreIds ? `&with_genres=${genreIds}` : '';
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100&page=${page}${genreQuery}`
  );
  return response.data.results;
};

export const fetchGenres = async () => {
  const response = await api.get(`/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
};
