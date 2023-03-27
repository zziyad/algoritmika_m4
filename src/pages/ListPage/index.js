import { useSelector } from 'react-redux';
import { useGetMovieByIdQuery } from '../../services/saveListApi';
import { selectAllSaveListId } from '../../store/movieSlice';

import './index.css';

function ListPage() {

    const saveListId = useSelector(selectAllSaveListId);
    const { data: movie, error, isLoading } = useGetMovieByIdQuery(saveListId[0]);

    console.log({ movie });

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>{error.message}</div>;
      }
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список {movie.title}</h1>
            <ul>
                {movie.movies?.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item}`} target="_blank" rel="noreferrer">{item}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;