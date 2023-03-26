import React, { useState } from 'react';
import { selectAllFavoriteMovies, selectAllMoviIdList, removeMoviesFromFavorites } from '../../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateMovieMutation } from '../../services/saveListApi'
import './index.css';

function Favorites() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [createMovie] = useCreateMovieMutation();
  const favoritesList = useSelector(selectAllFavoriteMovies);
  const moviIdList = useSelector(selectAllMoviIdList);
  const dispatch = useDispatch();

  const removeFromFavorites = (id) => {
    dispatch(removeMoviesFromFavorites(id))
  }

  
  const saveFavorites = async () => {
    const mylist = {
      title,
      movies: moviIdList
    }
    const result = await createMovie(mylist);

    if (result.data) {
      const id = result.data.id;
      navigate(`/list/${id}`);
    }
  }
  
  return (
    <div className="favorites">
      <input
        placeholder="Новый список"
        className="favorites__name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul className="favorites__list">
        {favoritesList?.map((item) => {
          return (
            <div key={item.imdbID}>
              <li >{item.Title} ({item.Year}) <button onClick={() => removeFromFavorites(item.imdbID)}>X</button></li>
            </div>
          );
        })}
      </ul>

      {favoritesList.length > 0 &&
        <button type="button"
          className="favorites__save"
          onClick={() => saveFavorites()}
        >
          Сохранить список
        </button>
      }

    </div>
  );
}

export default Favorites;