import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { todosReducer } from "./slices/todosSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
