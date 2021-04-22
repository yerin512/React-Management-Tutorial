export default function Movie({movie}){
  return(
    <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}
            <span className="movie-year">{movie.year}</span>
        </div>
    </div>
    )
}