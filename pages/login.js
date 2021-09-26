import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import SigninForm from "../components/auth/SigninForm";
import SignupForm from "../components/auth/SignupForm";
import Alert from "../components/UI/Alert";
import AppLoading from "../components/UI/AppLoading";
import { useAuthContext } from "../context/authContext";
const Login = () => {
  const { authState, authenticateUser } = useAuthContext();
  const router = useRouter();
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(true);

  useEffect(() => {
    authenticateUser();
    if (authState.isAuthenticated) {
      router.push("/");
    }
  }, [authState.isAuthenticated]);
  return authState.appLoading !== null && !authState.appLoading ? (
    <>
      <Head>
        <title>Authentication | UIC Project</title>
      </Head>
      <div id="login">
        {authState.alert && <Alert message={authState.alert} />}
        <h2>Welcome to UIC Department</h2>
        <div className="container" id="container">
          {isLoginFormOpen ? <SigninForm /> : <SignupForm />}

          <div className="overlay-container">
            <div className="overlay">
              {!isLoginFormOpen ? (
                <div className="overlay-panel overlay-right">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="ghost"
                    id="signIn"
                    onClick={() => {
                      setIsLoginFormOpen(!isLoginFormOpen);
                    }}
                  >
                    Sign In
                  </button>
                </div>
              ) : (
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className="ghost"
                    id="signUp"
                    onClick={() => {
                      setIsLoginFormOpen(!isLoginFormOpen);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <script src="main.js"></script> */}
      </div>
    </>
  ) : (
    <AppLoading />
  );
};

export default Login;
