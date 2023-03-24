import { useDispatch, useSelector } from 'react-redux';
import { selectAllFavoriteMovies } from '../../store/movieSlice';

import './index.css';

function ListPage() {

    const favoritesList = useSelector(selectAllFavoriteMovies);
    // const dispatch = useDispatch();

    // const [movies] = useState([
    //     { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
    // ])

    // const componentDidMount() {
    //     const id = this.props.match.params;
    //     console.log(id);
    //     // TODO: запрос к сервер на получение списка
    //     // TODO: запросы к серверу по всем imdbID
    // }

    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {favoritesList?.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;