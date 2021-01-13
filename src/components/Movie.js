import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = "https://www.lyricsbogie.com/wp-content/uploads/2015/02/No-Poster82-215x300.jpg";

const Movie = ( { movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img 
          width="200" 
          alt={`The movie titled: ${movie.Title}`} 
          src={poster}/>
      </div>
      <p>({movie.Year})</p>
    </div>
  )
}

export default Movie;