import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { IMovie } from "./models";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const data: {
      results: {
        episode_id: number;
        title: string;
        openingCrawl: string;
        release_date: string;
      }[];
    } = await response.json();

    const fetchedMovies = data.results.map(item => ({
      id: item.episode_id,
      title: item.title,
      openingText: item.openingCrawl,
      releaseDate: item.release_date,
    }));
    setMovies(fetchedMovies);
  }

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
