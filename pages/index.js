import { signOut } from "@firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppLoading from "../components/UI/AppLoading";
import { useAuthContext } from "../context/authContext";
import { fireAuth } from "../firebase/config";
export default function HomePage() {
  const { authState, authenticateUser } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    authenticateUser();
    if (authState.isAuthenticated !== null && !authState.isAuthenticated) {
      router.push("/login");
    } else {
      router.push("https://uicminorproject.netlify.app/profile/profile.html");
    }
  }, [authState.isAuthenticated]);
  console.log(authState.appLoading);
  return authState.appLoading !== null && !authState.appLoading ? (
    <div id="home">redirecting to profile page!</div>
  ) : (
    <AppLoading />
  );
}
