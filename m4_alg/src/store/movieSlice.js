import { createSlice } from '@reduxjs/toolkit'


const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    favorites: [],
    moviIdList: []
  },
  reducers: {
    addMoviesToFavorites: (state, { payload }) => {
      const movies = state.favorites.find(product => product.imdbID === payload.imdbID);
      if (movies) return state;
      state.moviIdList.push(payload.imdbID);
      state.favorites.push(payload);
    },
    removeMoviesFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== payload);
    }
  },

})

export const { addMoviesToFavorites, removeMoviesFromFavorites } = moviesSlice.actions;
export const selectAllFavoriteMovies = (state) => state.movies.favorites;
export const selectAllMoviIdList = (state) => state.movies.moviIdList;
export default moviesSlice.reducer;