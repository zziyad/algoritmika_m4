import { useSelector } from 'react-redux';
import { selectAllFavoriteMovies } from '../../store/movieSlice';

import './index.css';

function ListPage() {

    const favoritesList = useSelector(selectAllFavoriteMovies);

    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {favoritesList?.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank" rel="noreferrer">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;