import { fireAuth, fireDB } from "../../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  AUTH_ALERT,
  AUTH_APP_LOADING,
  AUTH_ERROR,
  AUTH_LOADING,
  USER_AUTH,
  USER_AUTH_FAIL,
  USER_LOGIN,
} from "../types";
import getUser from "../../utilityFuncitons/getUser";

export async function dispatchCreateUser(userData, dispatch) {
  try {
    dispatch({ type: AUTH_LOADING, payload: true });
    const { UID, password, name } = userData;
    const body = {
      email: `${UID}@uic.com`,
      password: password,
    };
    const result = await createUserWithEmailAndPassword(
      fireAuth,
      body.email,
      body.password
    );
    dispatch({ type: AUTH_LOADING, payload: false });
    dispatch({
      type: AUTH_ALERT,
      payload: "user is successfully registered!",
    });
    // save user to db
    const docRef = await addDoc(collection(fireDB, "users"), {
      authUid: result.user.uid,
      name: name,
      classUid: UID,
    });
    setTimeout(() => {
      dispatch({ type: AUTH_ALERT, payload: null });
    }, 5000);
  } catch (error) {
    console.log(error);
    switch (error.code) {
      case "auth/email-already-in-use":
        dispatch({
          type: AUTH_ERROR,
          payload: "you have already registered please sign in",
        });
        break;
      default:
        dispatch({
          type: AUTH_ERROR,
          payload: "Invalid register",
        });
        break;
    }
    setTimeout(() => {
      dispatch({ type: AUTH_ERROR, payload: null });
    }, 3000);
    dispatch({ type: AUTH_LOADING, payload: false });
  }
}

export async function dispatchLoginUser(userData, dispatch) {
  try {
    dispatch({ type: AUTH_LOADING, payload: true });
    const { UID, password } = userData;
    const body = {
      email: `${UID}@uic.com`,
      password: password,
    };
    const result = await signInWithEmailAndPassword(
      fireAuth,
      body.email,
      body.password
    );
    dispatch({ type: AUTH_LOADING, payload: false });
    dispatch({
      type: AUTH_ALERT,
      payload: "user is successfully signed!",
    });
    dispatch({ type: AUTH_APP_LOADING, payload: true });
    // get current user details
    const authUser = await getUser(result.user.uid);
    dispatch({ type: USER_LOGIN, payload: authUser });
    setTimeout(() => {
      dispatch({ type: AUTH_ALERT, payload: null });
    }, 5000);
    dispatch({ type: AUTH_APP_LOADING, payload: false });
  } catch (error) {
    console.log(error);
    switch (error.code) {
      case "auth/user-not-found":
        dispatch({ type: AUTH_ERROR, payload: "invalid or unregistered uid" });
        break;
      case "auth/wrong-password":
        dispatch({ type: AUTH_ERROR, payload: "invalid password" });
        break;
      default:
        dispatch({ type: AUTH_ERROR, payload: "Invalid User" });
        break;
    }
    setTimeout(() => {
      dispatch({ type: AUTH_ERROR, payload: null });
    }, 3000);
    dispatch({ type: AUTH_LOADING, payload: false });
    dispatch({ type: AUTH_APP_LOADING, payload: false });
  }
}

export async function dispatchGoogleSignIn(dispatch) {
  try {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(fireAuth, provider);
    dispatch({ type: AUTH_APP_LOADING, payload: true });
    // save user to db
    const docRef = await addDoc(collection(fireDB, "users"), {
      authUid: response.user.uid,
      name: response.user.email,
      classUid: null,
    });
    // findUser and login
    const authUser = await getUser(response.user.uid);
    dispatch({ type: USER_LOGIN, payload: authUser });
    dispatch({ type: AUTH_APP_LOADING, payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_APP_LOADING, payload: false });
  }
}
export function dispatchAuthenticateUser(dispatch) {
  try {
    dispatch({ type: AUTH_APP_LOADING, payload: true });
    onAuthStateChanged(fireAuth, async (user) => {
      if (user) {
        const authUser = await getUser(user.uid);
        dispatch({ type: USER_AUTH, payload: authUser });
        dispatch({ type: AUTH_APP_LOADING, payload: false });
      } else {
        dispatch({ type: USER_AUTH_FAIL, payload: null });
        dispatch({ type: AUTH_APP_LOADING, payload: false });
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_APP_LOADING, payload: false });
  }
}
