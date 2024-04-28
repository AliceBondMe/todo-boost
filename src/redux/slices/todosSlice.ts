import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../operations";
import { Deadline } from "../../pages/AllTodosPage";

export interface TodoData {
  id: string;
  title: string;
  text: string;
  deadline: Deadline;
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
  reducers: {
    // fetchTodos(state, action) {
    //   state.todos = action.payload;
    // },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    editTodo(state, action) {
      const editedTodoIndex = state.todos.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.todos[editedTodoIndex] = action.payload;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(({ id }) => id !== action.payload.id);
    },
  },
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
      });
  },
});

export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
