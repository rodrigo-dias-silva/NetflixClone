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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return <header
    className='banner-container'
    style={{
      backgrounSize: 'cover',
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}
  >
    <div className='banner-content'>
      <h1 className='banner-title'>
        {movie?.title || movie?.name || movie?.orinal_name}
      </h1>
      <div className='banner-button-container'>
        <button className='banner-button'>Assistir</button>
        <button className='banner-button'>Minha Lista</button>
      </div>
      <div className='banner-description'>
        <h3>{truncate(movie?.overview, 150)}</h3>
      </div>
    </div>
  </header >
}

export default Banner