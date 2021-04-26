import './App.css';
import Movie from './components/Movie'
import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar'

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }));
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return(
      <Movie 
      movie={movie} 
      key={movie.id}
      removeMovie={removeMovie}
      />
  );
})
: '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]);

    
  };
  return(
      <div className="App">
        <Navbar />
        <h1>Movie List</h1>
        <MovieForm addMovie={addMovie}/>
         {renderMovies}
      </div>
  )
}

export default App;
