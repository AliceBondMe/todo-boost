import { createSlice } from "@reduxjs/toolkit";

export interface todosState {
  todos: {
    id: string;
    title: string;
    text: string;
    deadline: string;
    completed: boolean;
  }[];
}

const todosInitialState: todosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    fetchTodos(state, action) {
      state.todos = action.payload;
    },
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
});

export const { fetchTodos, addTodo, editTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
