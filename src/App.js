import './App.css';
import React from 'react';

function App() {
  const Movies = [
    { title : '괴물1', year: 2002 },
    { title : '괴물2', year: 2003 },
    { title : '괴물3', year: 2004 },
    { title : '괴물4', year: 2005 },
  ]
  const renderMovies = Movies.map(movie => {
    return (
      <div className="movie" key={movie.title}>
      <div className="movie-title">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
    </div>
    );
  })
  return(
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
    </div>
  )
  
}

export default App;
