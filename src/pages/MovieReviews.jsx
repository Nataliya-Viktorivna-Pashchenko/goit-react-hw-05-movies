import { useState, useEffect } from 'react';
import { getReviews } from 'components/Api/Api';
import { useParams } from 'react-router-dom';
import  Loader  from 'components/Loader/Loader';
import { Notify } from "notiflix";
import { Reviews } from 'components/Reviews/Reviews';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setIsLoading(true);
        const data = await getReviews(id);
        if (data.results.length === 0)
          Notify.info(
            'While there are no reviews, you have the opportunity to be the first'
          );
        setReviews(data.results);
      } catch (error) {
         setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [id]);
  return (
    <div>
      {isLoading && <Loader />}
      {reviews && <Reviews reviews={reviews} />}
          {error && <p> Movies load failed</p>}
          </div>
  );
};

export default MovieReviews;