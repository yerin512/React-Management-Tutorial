export default function Movie({movie}){

  return(
    <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
    </div>
    )
}