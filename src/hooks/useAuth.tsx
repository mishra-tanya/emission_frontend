import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; 

interface DecodedToken {
  user_id: string;
  exp: number;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = Cookies.get("access_token");

    if (accessToken) {
      try {
        const decoded: DecodedToken = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;
        if (decoded.exp > currentTime) {
          setIsAuthenticated(true);
          setUserId(decoded.user_id);
        } else {
          setIsAuthenticated(false);
          setLoading(false); 
          setUserId(null);
        }
        setLoading(false); 
      } catch (error) {
        console.error("Invalid token:", error);
        setIsAuthenticated(false);
        setUserId(null);
      }
    } else {
      setIsAuthenticated(false);
      setUserId(null);
    }
  }, []);

  return { isAuthenticated, userId, loading };
};

export default useAuth;
