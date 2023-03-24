import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '../services/movieApi'
import moviesReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});
