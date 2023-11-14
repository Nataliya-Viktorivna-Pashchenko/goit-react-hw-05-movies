import React from 'react';
import { MoviesTrending } from '../components/MoviesTrending'
import css from 'components/Styles.module.css';

const HomePage = () => {
  return (
    <div className={css.moviesTrending}>
      Trending today 
      <MoviesTrending />
    </div>
  );
}

export default HomePage;