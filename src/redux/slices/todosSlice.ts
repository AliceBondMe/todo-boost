import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  editTodo,
  editTodoStatus,
  fetchTodos,
} from "../operations";

export interface TodoData {
  id: string;
  title: string;
  text: string;
  deadline: string;
  completed: boolean;
}

export interface TodosState {
  todos: TodoData[];
  isLoading: boolean;
  error: any;
}

const todosInitialState: TodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.todos.push(action.payload);
      })
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodo.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTodo.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        const editedTodoIndex = state.todos.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.todos[editedTodoIndex] = action.payload;
      })
      .addCase(editTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTodo.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(
        editTodoStatus.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          const editedTodoIndex = state.todos.findIndex(
            ({ id }) => id === action.payload.id
          );
          state.todos[editedTodoIndex].completed = action.payload.completed;
        }
      )
      .addCase(editTodoStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTodoStatus.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.todos = state.todos.filter(({ id }) => id !== action.payload);
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const todosReducer = todosSlice.reducer;
