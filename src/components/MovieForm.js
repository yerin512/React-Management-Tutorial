import {useState} from 'react';
import InputField from './InputField';

export default function MovieForm({ addMovie }){
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');


  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  }

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if(!movieTitle){
      setTitleError('영화제목을 넣어주세요');
      validated = false;
    }
    if(!movieYear){
      setYearError('개봉년도를 넣어주세요');
      validated = false;
    }

    return validated;
  }

  const resetErrors = () => {
    setTitleError('');
    setYearError('');
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(validateForm()){
      addMovie({
        id: Date.now(),
        title : movieTitle,
        year : movieYear,
    });
    resetErrors();
    resetForm();
    }
    
  };
  return(
        <form onSubmit={onSubmit}>
        {/* <input
          type="text"
          placeholder="영화제목"
          value={movieTitle}
          onChange={e => setMovieTitle(e.target.value)}/><br />
          <div style={{color:'red'}}>{titleError}</div> 
          <input
          type="number"
          placeholder="영화년도"
          value={movieYear}
          onChange={e => setMovieYear(e.target.value)}/><br />
          <div style={{color:'red'}}>{yearError}</div>
          
          */}
          <InputField 
            type="text"
            value={movieTitle}
            placeholder="영화제목"
            onChange={e => setMovieTitle(e.target.value)}
            errorMessage={titleError}
            />
            <InputField 
            type="number"
            value={movieYear}
            placeholder="영화년도"
            onChange={e => setMovieYear(e.target.value)}
            errorMessage={yearError}
            />
            <button type="submit">영화추가</button>
      </form>
  )    
}