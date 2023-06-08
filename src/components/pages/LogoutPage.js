import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem('userId', null);
    logout();

    navigate('/login');
  }, [logout, navigate]);

  return (
    <div>
      <h1>Welcome to the Main Menu Page</h1>
      <div>
        <Link to="/login" key="login">
          <button>Log In</button>
        </Link>
        <Link to="/register" key="register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LogoutPage;
