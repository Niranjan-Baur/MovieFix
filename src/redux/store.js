import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import movieSlice from "./slices/movieSlice";

export const store = configureStore({ 
    reducer:{
        movies: movieSlice
    }
})