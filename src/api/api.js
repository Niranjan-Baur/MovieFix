import { getData } from "./networkServices";

// start writing your all api here....
const API_KEY = '2dca580c2a14b55200e784d157207b4d'

export const getTodosfromAPI = async (ffg) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};

export const fetchMovies = async (year, genreIds = [], page = 1) => {
  const genreQuery = genreIds.length ? `&with_genres=${genreIds.join(',')}` : ''; 
  const response = await getData(
    `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100&page=${page}${genreQuery}`
  );
  // console.log(response.results,9)
  return response.results;
};

export const fetchGenres = async () => {
  const response = await getData(`/genre/movie/list?api_key=${API_KEY}`);
  // console.log(response.genres,9)
  return response.genres;
};