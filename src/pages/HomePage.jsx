import React from 'react';
import { useState, useEffect } from 'react';
import { getMovies } from 'components/Api/Api';
import { MovieList } from 'components/MovieList/MovieList';
import css from 'components/Styles.module.css';

const HomePage = () => {

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
    <div className={css.moviesTrending}>
      Trending today 
      {movies.length > 0 && <MovieList items={movies} />}
      {isLoading && <p> Movies load....</p>}
      {error && <p> Movies load failed</p>}
    </div>
  );
}

export default HomePage;
