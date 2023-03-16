import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './index.css';
import { state } from '../../store/store';

function Movies() {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        const appState = state.getState();
        setMovie(appState.movies);
    }, [])

    return (
        <ul className="movies">
            {movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}

export default Movies;