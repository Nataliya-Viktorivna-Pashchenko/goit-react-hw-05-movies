import { useState, useEffect } from 'react';
import { getCast } from 'components/Api/Api';
import { useParams } from 'react-router-dom';
import  Loader  from 'components/Loader/Loader';
import { Casts } from 'components/Cast/Cast';

const MovieCast = () => {
  const [casts, setCasts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getCasts() {
      try {
        setIsLoading(true);

        const  data  = await getCast(id);
        setCasts(data.cast);
      } catch (error) {
         setError(error.message);
      } finally {
       setIsLoading(false);
      }
    }

    getCasts();
  }, [id]);
  return (
    <>
      {isLoading && <Loader />}

        {casts && <Casts casts={casts} />}
          {error && <p> Movies load failed</p>}
    </>
  );
};
export default MovieCast;