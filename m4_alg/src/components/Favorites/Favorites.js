import React, { useEffect, useState } from 'react';
import './index.css';
import { state } from '../../store/store';

function Favorites() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    state.subscribe(() => {
      const store = state.getState();
      setMovies(store.favorites);
    })
  }, [])

  const removeFromFavorites = (imdbID) => {
    state.dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: { imdbID }
    })
  }

  const saveFavorites = () => {
    const appState = state.getState();
    console.log(appState.favorites);
  }

  return (
    <div className="favorites">
      <input placeholder="Новый список" className="favorites__name" />
      <ul className="favorites__list">
        {movies.map((item, index) => {
          return (
            <div key={index}>
              <li >{item.title} ({item.year}) <button onClick={() => removeFromFavorites(item.imdbID)}>X</button></li>
            </div>
          );
        })}
      </ul>
      <button type="button" className="favorites__save" onClick={() => saveFavorites()}>Сохранить список</button>
    </div>
  );
}

export default Favorites;