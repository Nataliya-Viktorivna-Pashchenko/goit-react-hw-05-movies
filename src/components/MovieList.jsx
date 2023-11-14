import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import  css from 'components/Styles.module.css'

export const MovieList = items => {
  const location = useLocation();
  const elements = items.items.map(
    ({ id, name, original_title, original_name, title }) => (
      <li  key={id}>
        <Link
                    state={{ from: location }}
          to={`/movies/${id}`}
        >
          {name || original_title || title || original_name}
        </Link>
      </li>
    )
  );

  return <ul className={ css.MovieList }>{elements}</ul>;
};

MovieList.defaultProps = {
  items: [],
};