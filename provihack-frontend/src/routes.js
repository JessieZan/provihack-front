import { Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { GlobalProvider } from "./contexts/GlobalContext";
import useGlobal from "./hooks/useGlobal";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";

function MainRoutes() {
  function ProtectedRoutes(props) {
    const { token } = useGlobal();

    return token ? props.children : <Navigate to="/login" />;
  }
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sobreNos" element={<SobreNos />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoutes>
              <SearchResults />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </GlobalProvider>
  );
}

export default MainRoutes;
