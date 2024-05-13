import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  user: {
    id: string | null;
    email: string | null;
  };
  token: string | null;
  isLoggedIn: boolean;
}

const authInitialState: AuthState = {
  user: { id: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state, action) {
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    refresh(state, action) {
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user.email = null;
      state.user.id = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, refresh, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
