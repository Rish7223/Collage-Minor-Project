import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../../context/authContext";
const SignupForm = () => {
  const [userName, setUserName] = useState("");
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const { authState, createUser, socialLogin } = useAuthContext();

  function handleSubmit(event) {
    event.preventDefault();
    // code...
    const body = { UID: uid, password: password, name: userName };
    createUser(body);
    setPassword("");
    setUid("");
    setUserName("");
  }
  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <div
              role="button"
              id="google"
              onClick={() => {
                socialLogin();
              }}
            >
              <span className="icon">
                <FcGoogle />
              </span>
              <span>Sign in with Google</span>
            </div>
          </div>
          <span>or use your UID for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="UID"
            value={uid}
            onChange={(event) => setUid(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <p className="errorMsg">
            {authState.authError && authState.authError}
          </p>
          <button type="submit">
            {authState.authLoading ? (
              <img src="/icons/loadingSpinner.svg" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
