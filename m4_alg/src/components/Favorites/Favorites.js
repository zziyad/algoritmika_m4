import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllFavoriteMovies, removeMoviesFromFavorites } from '../../store/movieSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

function Favorites() {
  const favoritesList = useSelector(selectAllFavoriteMovies);
  const dispatch = useDispatch();

  console.log(favoritesList);

  const removeFromFavorites = (id) => {
    dispatch(removeMoviesFromFavorites(id))
  }

  const saveFavorites = () => {
    // const appState = state.getState();
    // console.log(appState);
  }

  return (
    <div className="favorites">
      <input placeholder="Новый список" className="favorites__name" />
      <ul className="favorites__list">
        {favoritesList?.map((item, index) => {
          return (
            <div key={index}>
              <li >{item.Title} ({item.Year}) <button onClick={() => removeFromFavorites(item.imdbID)}>X</button></li>
            </div>
          );
        })}
      </ul>
      <Link to={'/list'}>
        <button type="button" className="favorites__save" onClick={() => saveFavorites()}>Сохранить список</button>
      </Link>
    </div>
  );
}

export default Favorites;