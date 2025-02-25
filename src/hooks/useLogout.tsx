import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const useLogout = () => {
  const navigate = useNavigate();
  const BASENAME = import.meta.env.VITE_BASENAME;

  const logout = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    sessionStorage.removeItem('user_id');

    navigate(`${BASENAME}/login`);
  };

  return logout;
};

export default useLogout;
