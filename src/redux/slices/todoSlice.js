// This is an demo slice for redux-toolkit,
// Create or modify this slice for our own...

import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';
import axios from 'axios';
import { getTodosfromAPI } from '../../api/api';

// ======================== this is an synchronous slice ===================================
// =========================================================================================

// const initialState = {
//     todos: [{id: 1, text: 'hello'}],
//   };

// export const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     },
//   },
// });

// ========================== this is an Asynchronous slice ================================
// =========================================================================================

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const data = await getTodosfromAPI()
  console.log(data)
  return data
});

const initialState = {
  isLoading: false,
  isError: false,
  data: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log('Error', action.payload, action.error);
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});


export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
