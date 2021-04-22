import './App.css';
import Movie from './components/Movie'
import React, { useState } from 'react';
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([
    { title : '괴물1', year: 2002 },
    { title : '괴물2', year: 2003 },
    { title : '괴물3', year: 2004 },
    { title : '괴물4', year: 2005 },
  ]);

  const renderMovies = movies.map(movie => {
    return(
      <Movie movie={movie} key={movie.title}/>
  );
});

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]);

    
  };
  return(
      <div className="App">
        <h1>Movie List</h1>
        <MovieForm addMovie={addMovie}/>
         {renderMovies}
      </div>
  )
}

export default App;
