import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  Switch,
  Redirect,
} from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { GlobalProvider } from './contexts/GlobalContext'
import useGlobal from './hooks/useGlobal'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'

function MainRoutes() {
  function ProtectedRoutes(props) {
    const { token } = useGlobal()

    return token ? props.children : <Navigate to="/login" />
  }
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
  )
}

export default MainRoutes
