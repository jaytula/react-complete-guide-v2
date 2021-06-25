import React from 'react';
import { IMovie } from '../models';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props: {movies: IMovie[]}) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
