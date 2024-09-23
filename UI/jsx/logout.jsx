import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token or user data from localStorage
    localStorage.removeItem('token');
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Logout;
