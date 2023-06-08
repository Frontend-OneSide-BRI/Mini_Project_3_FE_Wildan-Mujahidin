import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess(state, action) {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } =
  moviesSlice.actions;

export default moviesSlice.reducer;

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_READ}`,
        },
      }
    );
    dispatch(fetchMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

export const fetchFilterMovies = (searchQuery) => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_READ}`,
        },
      }
    );
    dispatch(fetchMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
