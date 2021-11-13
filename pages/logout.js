import { signOut } from "@firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AppLoading from "../components/UI/AppLoading";
import { useAuthContext } from "../context/authContext";
import { fireAuth } from "../firebase/config";
const Logout = () => {
  const { authState } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    signOut(fireAuth);

    router.push("/login");
  }, []);
  return (
    <div>
      <AppLoading />
    </div>
  );
};

export default Logout;
