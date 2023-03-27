import React, { useState } from 'react';
import { selectAllFavoriteMovies, selectAllMoviIdList, removeMoviesFromFavorites } from '../../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCreateMovieMutation } from '../../services/saveListApi';
import './index.css';

function Favorites() {

  const [title, setTitle] = useState('');
  const [createMovie, { data, isLoading }] = useCreateMovieMutation();
  // const navigate = useNavigate();
  const favoritesList = useSelector(selectAllFavoriteMovies);
  const movies = useSelector(selectAllMoviIdList);
  const dispatch = useDispatch();
  const [showLink, setShowLink] = useState(false);


  const removeFromFavorites = (id) => {
    dispatch(removeMoviesFromFavorites(id))
  }


  const saveFavorites = async () => {
    if (title.trim() === '') return alert('Укажите имя списка ');
    const mylist = { title, movies }
    await createMovie(mylist);
    setShowLink(true);
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

      {!showLink ? (
        <button type="submit" disabled={isLoading} onClick={() => saveFavorites()}>
          {isLoading ? 'Creating movie...' : 'Create movie'}
        </button>
      ) : (
        <Link to={`/list/${data.id}`}>Go to movie list {title}</Link>
      )}

    </div>
  );
}

export default Favorites;