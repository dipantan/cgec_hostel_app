export const fetchUser = state => {
  return {
    username: state.auth.username,
    password: state.auth.password,
  };
};
export const fetchIsAuthenticated = state => state.auth.isAuthenticated;
export const fetchToken = state => state.auth.token;
export const fetchLoading = state => state.auth.loading;
export const fetchError = state => state.auth.error;
