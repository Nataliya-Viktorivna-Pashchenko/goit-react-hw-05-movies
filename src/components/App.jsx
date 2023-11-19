import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from './Loader/Loader'

import Layout from './Layout/Layout';
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const App = () => {
  return (
    <Layout>
    <Suspense fallback={<Loader />}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id/*" element={<MovieDetails />}/>
           
      </Routes>
      </Suspense>
      </Layout>
  );
};

export default App;
