import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { getMovies } from './../api';
import './Row.css'

const imageHost = 'https://image.tmdb.org/t/p/original';

function Row({ title, path, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleOnclick = (movie) => {
    //pegar url trailer
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name || '')
        .then((url) => {
          setTrailerUrl(url)
        })
        .catch((error) => {
          console.error('Error fetching movie trailer: ', error);
        })
    }
  }

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data ", data)
      setMovies(data?.results);
    } catch (error) {
      console.error("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path])


  return (
    <div className='row-container'>
      <h2 className='row-header'>
        {title}
      </h2>
      <div className='row-cards'>
        {movies?.map(movie => {
          return (
            <img
              className={`movie-card ${isLarge && "movie-card-large"}`}
              onClick={() => handleOnclick(movie)}
              key={movie.id}
              src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`}
              alt={movie.name}
            />
          )
        })}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
    </div>
  )
}

export default Row