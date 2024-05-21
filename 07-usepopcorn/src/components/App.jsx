import { useState } from "react";
import tempMovieData from "../data/tempMovieData.js";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies}/>
      <Main movies={movies}/>
    </>
  );
}
