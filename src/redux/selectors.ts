import { RootState } from "./store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectTodos = (state: RootState) => state.todos.todos;
