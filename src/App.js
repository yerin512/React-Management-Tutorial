import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Movie from './components/Movie';
import Users from './components/pages/Users'
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
    return (
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
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movies">
            <h1>Movie List</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
