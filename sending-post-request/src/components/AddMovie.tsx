import React, { FormEvent, useRef } from "react";

import classes from "./AddMovie.module.css";

export interface IMovie {
  title: string;
  openingText: string;
  releaseDate: string;
}

function AddMovie(props: { onAddMovie: (movie: IMovie) => void }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current?.value as string,
      openingText: openingTextRef.current?.value as string,
      releaseDate: releaseDateRef.current?.value as string,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
