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

// Thunk action creator to fetch movies from the API
export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch(fetchMoviesStart());
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjA1YWQwNGNhYzM2NWE4ZWNmNTk5NjA2YjUxNTUyOCIsInN1YiI6IjYzYjRlMzdhYTkxMTdmMDViMGRhZTljNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfOYlNIlsS28bPmjh6_VIu3Ogd-BKpb1t0pYRd2VV_Q`,
        },
      }
    );
    dispatch(fetchMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};
