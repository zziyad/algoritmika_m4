import { state } from '../../store/store';
import './index.css';

function MovieItem({ imdbID, title, year, poster }) {
    const addToFavorites = (id) => {
        state.dispatch({
            type: "ADD_TO_FAVORITES",
            payload: { imdbID, title, year, poster }
        })
    };

    
    return (
        <article className="movie-item" key={imdbID}>
            <img className="movie-item__poster" src={poster} alt={title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                <button type="button" className="movie-item__add-button" onClick={() => addToFavorites(imdbID)} > Добавить в список</button>
            </div>
        </article >
    );
}

export default MovieItem;