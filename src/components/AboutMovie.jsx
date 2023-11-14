import css from 'components/Styles.module.css'
export const AboutMovie = ({ movies }) => {
  const { poster_path, original_title, vote_average, overview, genres } = movies;
 
  const User_Score = Math.round(vote_average * 10);

  const Genres = genres?genres.map(genre => genre.name).join(' ') : 'Genres is not available';

  return (
    <div className= {css.AboutMovie}>
      <div>
        {poster_path && (
          <img
            className={css.Poster}
            src={`https://image.tmdb.org/t/p/w300/${poster_path} `}
            alt=""
          />
        )}
      </div>
      <div>
        <h3>{original_title}</h3>
        <p>User Score: {User_Score} %</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{Genres}</p>
      </div>
    </div>
  );
};


