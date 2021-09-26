import "../styles/global.css";
import AuthProvider from "../context/authContext";
function MainPage({ Component, PageProps }) {
  return (
    <AuthProvider>
      <Component {...PageProps} />
    </AuthProvider>
  );
}

export default MainPage;
