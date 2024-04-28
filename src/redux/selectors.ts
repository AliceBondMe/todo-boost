import { RootState } from "./store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectTodos = (state: RootState) => state.todos.todos;
export const selectActiveTodos = (state: RootState) =>
  state.todos.todos.filter(({ completed }) => !completed);
export const selectCompletedTodos = (state: RootState) =>
  state.todos.todos.filter(({ completed }) => completed);
