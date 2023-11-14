import axios from 'axios';

export const getMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=2d3d1caa19c1ed6e7fe5b5dcf5521dd3`
  );

  return data;
};

export const getSingleMovie = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2d3d1caa19c1ed6e7fe5b5dcf5521dd3`
  );

  return data;
};

export const getMoviesBySearch = async search => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=2d3d1caa19c1ed6e7fe5b5dcf5521dd3&query=${search}&page=1&include_adult=false`
  );

  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=2d3d1caa19c1ed6e7fe5b5dcf5521dd3`
  );

  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2d3d1caa19c1ed6e7fe5b5dcf5521dd3`
  );

  return data;
};





