import React, { useContext } from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

function NavBar() {
  const navigate = useNavigate();
  const authData = useContext(AuthContext);
  const { isAuthenticated, login, logout } = authData;

  const handleLogout = () => {
    logout();
  };

  return (
      <nav>
        <Link to="/">
        <span className="logo-container">
          <img src={logo} alt="logo" />
          <h3>Banana Security</h3>
        </span>
        </Link>

        <div>
            {!isAuthenticated ? (
                <>
                    <button type="button" onClick={() => navigate('/signin')}>
                        Inloggen
                    </button>
                    <button type="button" onClick={() => navigate('/signup')}>
                        Registreren
                    </button>
                </>
            ) : (
                <button type="button" onClick={handleLogout}>
                    Uitloggen
                </button>
            )}
        </div>
      </nav>
  );
}

export default NavBar;
