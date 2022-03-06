import { useState, useEffect } from 'react';

import { FcSearch, FcBrokenLink } from 'react-icons/fc';
import MovieCard from './MovieCard';

const Movies = () => {
    const API_URL = 'http://www.omdbapi.com/?apikey=22a37c01';
    const [movies, setMovies] = useState([]);
    // initial searchTerm set to a state value
    const [searchTerm, setSearchTerm] = useState('batman');

    // fetch API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // set state of movies array
        setMovies(data.Search);
    };

    // display array of movies on load with useEffect
    useEffect(() => {
        searchMovies(searchTerm);
    }, []);

    return (
        <div className="container">
            <h2>Movies</h2>
            <h2>API Fetch, useState, useEffect</h2>

            <div>
                <input
                    type="text"
                    placeholder="search movies"
                    value={searchTerm}
                    // updates value used to search API
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* button click updates the initial searchTerm value with the input value */}
                <button type="button" onClick={() => searchMovies(searchTerm)}>
                    <FcSearch></FcSearch>
                    Search
                </button>
            </div>

            <br />

            {movies?.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))
            ) : (
                <p>
                    <FcBrokenLink></FcBrokenLink>
                    &nbsp; No Movies Found...
                </p>
            )}
        </div>
    );
};

export default Movies;
