import { Searchbar } from 'components/Searchbar';
import { useState, useEffect } from 'react';
import { Notify } from "notiflix";
import { getMoviesBySearch } from 'components/Api';
import { MovieList } from 'components/MovieList';
import  Loader  from 'components/Loader';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';

  useEffect(() => {
    if (request === '') return;
    async function searchMovies() {
      try {
        setIsLoading(true);

        const data = await getMoviesBySearch(request);
        setMovies(data.results);
      } catch (error) {
         setError(error.message);
      } finally {
       setIsLoading(false);
      }
    }
    searchMovies();
  }, [request]);
  const onSubmit = title => {
    setSearchParams(title !== '' ? { query: title} : {});
    if (title === '') {
        Notify.info('Please enter your request.');
    }
  };

  return (
    <>
      <Searchbar value={request} onSubmit={onSubmit} />
      {isLoading && <Loader />}
          {movies && <MovieList items={movies} />}
          {error && <p> Movies load failed</p>}
    </>
  );
};

export default Movies;
