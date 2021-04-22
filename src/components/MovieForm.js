import {useState} from 'react';

export default function MovieForm({ addMovie }){
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');


  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  }
  const onSubmit = (event) => {
    event.preventDefault();
    addMovie({
        title : movieTitle,
        year : movieYear,
    });
    resetForm();
    
  };
  return(
        <form onSubmit={onSubmit}>
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
  )    
}