import { createSlice } from '@reduxjs/toolkit'


const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    favorites: [],
    saveList: []
  },
  reducers: {
    addMoviesToFavorites: (state, { payload }) => {
      const movies = state.favorites.find(product => product.imdbID === payload.imdbID);
      if (movies) return state;
      state.favorites.push(payload);
    },
    removeMoviesFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload);
    }
  },

})

export const { addMoviesToFavorites, removeMoviesFromFavorites } = moviesSlice.actions;
export const selectAllFavoriteMovies = (state) => state.movies.favorites;
export default moviesSlice.reducer;