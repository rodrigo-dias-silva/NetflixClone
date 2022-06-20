import React, { useEffect } from 'react'
import './Banner.css'
import categories, { getMovies } from './../api';

function Banner() {
  const [movie, setMovie] = React.useState({});
  const fetchRandomMovie = async (_path) => {
    try {
      const netflixOriginalsCategory = categories.find((category) => category.name === 'netflixOriginals');

      const data = await getMovies(netflixOriginalsCategory.path);

      const movies = data?.results;

      const randomIndex = Math.floor(Math.random() * data.results.length);

      setMovie(movies[randomIndex]);

    } catch (error) {
      console.error('Banner fetchRandomMovie error: ', error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return <header className='banner-content'></header>
}

export default Banner