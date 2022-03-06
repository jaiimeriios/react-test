const MovieCard = ({movie}) => {
    return (
        <div>
            <h4>{movie.Title}</h4>
            <h5>
                {movie.Year} <span>{movie.Type}</span>
            </h5>
            <img
                src={
                    movie.Poster !== 'N/A'
                        ? movie.Poster
                        : 'https://via.placeholder.com/200'
                }
                alt={movie.Title}
            />
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default MovieCard;
