import React from 'react';

import Movie from './Movie';
import styles from './styles/MovieList.module.css';

const MovieList = (props) => {
  return (
    <ul className={styles['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;