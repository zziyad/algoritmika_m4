const initialState = {
  favorites: [],
  movies: [
    {
      imdbID: 'tt3896198',
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    },
    {
      imdbID: 'tt0068646',
      title: "The Godfather",
      year: 1972,
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    }
  ]
};


export default function reducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_TO_FAVORITES':
      const favoritesMovies = [...state.favorites];
      const product = favoritesMovies.find(product => product.imdbID === action.payload.imdbID);
      if (product) {
        return state;
      }

      favoritesMovies.push({
        imdbID: action.payload.imdbID,
        title: action.payload.title,
        year: action.payload.year,
        poster: action.payload.poster
      });

      return {
        ...state,
        favorites: favoritesMovies
      };

    case 'REMOVE_FROM_FAVORITES':
      const favoritesMovie = [...state.favorites];
      favoritesMovie.pop(action.payload.imdbID);

      return {
        ...state,
        favorites: favoritesMovie,
      };

    


    default:
      return state;
  }
}