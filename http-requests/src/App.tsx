import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { IMovie } from "./models";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
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
    setIsLoading(false);

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 &&  <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
