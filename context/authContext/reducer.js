import {
  USER_LOGIN,
  USER_AUTH,
  USER_AUTH_FAIL,
  AUTH_ALERT,
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_APP_LOADING,
} from "../types";
const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN:
    case USER_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        auth: {
          ...state.auth,
          user: payload,
        },
      };
    case USER_AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        auth: {
          ...state.auth,
          user: payload,
        },
      };
    case AUTH_APP_LOADING:
      return {
        ...state,
        appLoading: payload,
      };
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: payload,
      };
    case AUTH_ALERT:
      return {
        ...state,
        alert: payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        authError: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
