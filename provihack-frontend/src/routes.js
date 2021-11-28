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
import AuthProvider from './contexts/AuthContext/AuthProvider'
import useAuthProvider from './hooks/useAuthProvider'
import SearchResults from './pages/SearchResults'

function MainRoutes() {
  function ProtectedRoutes(props) {
    const token = useAuthProvider()
    return token ? props.children : <Navigate to="/login" />
  }
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/search"
          element={
            <ProtectedRoutes>
              <SearchResults />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default MainRoutes
