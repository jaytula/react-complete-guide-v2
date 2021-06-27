import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { IMovie } from "./models";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films")
      .then(res => res.json())
      .then(
        (data: {
          results: {
            episode_id: number;
            title: string;
            openingCrawl: string;
            release_date: string;
          }[];
        }) => {
          const fetchedMovies = data.results.map(item => ({
            id: item.episode_id,
            title: item.title,
            openingText: item.openingCrawl,
            releaseDate: item.release_date,
          }));
          setMovies(fetchedMovies);
        }
      );
  }

  const dummyMovies: IMovie[] = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;