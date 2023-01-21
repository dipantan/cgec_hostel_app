import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    password: null,
    token: null,
    error: null,
    loading: false,
    isAuthenticated: false,
  },
  reducers: {
    // redux action creators
    login: (state, action) => {
      state.auth.loading = true;
    },
    loginSuccess: (state, action) => {
      state.auth.loading = false;
      state.auth.token = action.payload.token;
      state.auth.username = action.payload.username;
      state.auth.password = action.payload.password;
      state.auth.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.auth.loading = false;
      state.auth.error = action.payload.error;
      state.auth.isAuthenticated = false;
    },
    logout: (state, action) => {
      state.auth.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.auth.loading = false;
      state.auth.token = null;
      state.auth.username = null;
      state.auth.password = null;
      state.auth.isAuthenticated = false;
    },
    logoutFailure: (state, action) => {
      state.auth.loading = false;
      state.auth.error = action.payload.error;
      state.auth.isAuthenticated = true;
    },
  },
});

export const {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;
export default authSlice.reducer;
