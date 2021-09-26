import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../../context/authContext";
const SigninForm = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const { authState, loginUser, socialLogin } = useAuthContext();

  function handelSubmit(event) {
    event.preventDefault();
    const body = {
      UID: uid,
      password: password,
    };
    loginUser(body);
    setUid("");
    setPassword("");
  }
  return (
    <div className="form-container sign-in-container">
      <form action="#" onSubmit={handelSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <div role="button" id="google" onClick={() => socialLogin()}>
            <span className="icon">
              <FcGoogle />
            </span>
            <span>Sign in with Google</span>
          </div>
        </div>
        <span>or use your account</span>
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
        <p className="errorMsg">{authState.authError && authState.authError}</p>
        <button type="submit">
          {authState.authLoading ? (
            <img src="/icons/loadingSpinner.svg" />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
