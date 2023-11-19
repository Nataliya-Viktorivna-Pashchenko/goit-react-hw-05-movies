import { useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink, Link, useParams, useLocation } from 'react-router-dom';
import { AboutMovie } from '../components/AboutMovie/AboutMovie';
import { getSingleMovie } from '../components/Api/Api';
import MovieReviews from './MovieReviews';
import MovieCast from './MovieCast';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import css from 'components/Styles.module.css'


const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const { id } = useParams();


    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
    const fetchMoviesById = async () => {
    
        try {
          setIsLoading(true);
            const data = await getSingleMovie(id);
            setMovie(data);
              }  catch (error) {
         setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesById();
  }, [id]);
  return (
    <>
      <div>
                     <Link to={backLinkRef.current}> <button>Go back</button></Link>
              {isLoading && <p> Movie load....</p>}
              
              {error && <p> Movie load failed</p>}
              
              {!isLoading && <AboutMovie movies={movie}/>}
          </div>
      <div className={css.AddInfo}>
        <h4>Additional information</h4>
        
              <ul>
                  <li>
                      <NavLink className="header-link" to="cast">
          Cast
                  </NavLink>
                  </li>
                  <li>
                       <NavLink className="header-link" to="reviews">
          Reviews
                  </NavLink>
                  </li>
              </ul>
              <div>
       
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
                      <Route path="cast" element={<MovieCast />} />
                       <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
      
      </>
      
  );
};

export default MovieDetails;