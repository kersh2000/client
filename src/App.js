import './App.css'
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import CreatePage from './components/pages/CreatePage';
import ExplorePage from './components/pages/ExplorePage';
import ViewPage from './components/pages/ViewPage';
import HomePage from './components/pages/HomePage';
import LogInPage from './components/pages/LogInPage';
import RegisterPage from './components/pages/RegisterPage';
import LogoutPage from './components/pages/LogoutPage';

const useAuth = () => useContext(AuthContext);

function Navigation() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn || location.pathname === '/') {
    return null;
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/view">View</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={<LogoutPage />}
        />
        <Route
          path="/login"
          element={<LogInPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/create"
          element={isLoggedIn ? <CreatePage /> : <LogoutPage />}
        />
        <Route
          path="/explore"
          element={isLoggedIn ? <ExplorePage /> : <LogoutPage />}
        />
        <Route
          path="/view"
          element={isLoggedIn ? <ViewPage /> : <LogoutPage />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <LogoutPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
