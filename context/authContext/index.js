import { createContext, useContext, useReducer } from "react";
import authReducer from "./reducer";
import {
  dispatchCreateUser,
  dispatchGoogleSignIn,
  dispatchLoginUser,
  dispatchAuthenticateUser,
} from "./actions";

const AuthContext = createContext();
const initialState = {
  isAuthenticated: null,
  auth: {
    user: null,
    authLoading: false,
  },
  alert: null,
  authError: null,
  authLoading: false,
  appLoading: null,
};
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  //   actions
  function createUser(userData) {
    dispatchCreateUser(userData, dispatch);
  }

  function loginUser(userData) {
    dispatchLoginUser(userData, dispatch);
  }

  function socialLogin() {
    dispatchGoogleSignIn(dispatch);
  }

  function authenticateUser() {
    dispatchAuthenticateUser(dispatch);
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        createUser,
        loginUser,
        socialLogin,
        authenticateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
