import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        allMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { allMovies } = movieSlice.actions
export default movieSlice.reducer