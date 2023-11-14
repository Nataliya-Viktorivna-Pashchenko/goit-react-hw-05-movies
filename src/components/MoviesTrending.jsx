import { useState, useEffect } from 'react';
import { getMovies } from './Api';
import { MovieList } from './MovieList';

export const MoviesTrending = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   useEffect(() => {
    const fetchMovies = async () => {
            try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies([...data.results]);
      } catch (error) {
         setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies]);

 
  return (
    <>
      {movies.length > 0 && <MovieList items={movies} />}
      {isLoading && <p> Movies load....</p>}
      {error && <p> Movies load failed</p>}
    </>
  );
};
