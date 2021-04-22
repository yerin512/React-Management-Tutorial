import './App.css';
import Movie from './components/Movie'
import React, { useState } from 'react';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
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

  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      ...movies,
      {
        title : movieTitle,
        year : movieYear,
    }]);

    if (setMovieYear && setMovieTitle === ''){
      alert('영화제목과 년도를 입력해주세요')
    }

    setMovieTitle('');
    setMovieYear('');
    
  };
  return(
      <div className="App">
        <h1>Movie List</h1>
        <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="영화제목"
          value={movieTitle}
          onChange={e => setMovieTitle(e.target.value)}/><br />
        <input
          type="text"
          placeholder="영화년도"
          value={movieYear}
          onChange={e => setMovieYear(e.target.value)}/><br />
          <button type="submit">영화추가</button>
      </form>
         {renderMovies}
          
      </div>
  )
}

export default App;
