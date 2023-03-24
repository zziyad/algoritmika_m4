import React, { useEffect, useState } from 'react';
import { useGetMoviesMutation } from '../../services/movieApi';
import MovieItem from '../MovieItem/MovieItem';
import Movies from '../Movies/Movies';
import './index.css';

function SearchBox() {
  const [query, setQuery] = useState('');

  const [getMovies, { data }] = useGetMoviesMutation();

  useEffect(() => {
    if (query) fetchMovie();
  }, [query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  }
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();

  }

  const searchLineChangeHandler = (e) => {
    const query = e.target.value;
    setQuery(query);
  }

  return (
    <>
      <div className="search-box">
        <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={query}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!query}
          >
            Искать
          </button>
        </form>
      </div>

      <div>
        {data?.Search?.length > 0 && <Movies {...data} />}

          {/* // data?.Search?.map((movie) => <MovieItem {...movie} key={movie.imdbID} />) */}
        
      </div>
    </>
  );
}

export default SearchBox;