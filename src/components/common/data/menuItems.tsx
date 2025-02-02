import { Assessment, Dashboard, Home, Info, Login, LogoutOutlined, MiscellaneousServices, Person } from "@mui/icons-material";
import useAuth from "../../../hooks/useAuth";
import useLogout from "../../../hooks/useLogout"; 

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

export const MenuItems = (): MenuItem[] => {
  const { isAuthenticated } = useAuth();
  const logout = useLogout();
  return isAuthenticated
    ? [
        { text: "Home", icon: <Home />, to: "/" },
        { text: "About", icon: <Info />, to: "#about" },
        { text: "Contact", icon: <Person />, to: "#contact" },
        { text: "Service", icon: <MiscellaneousServices />, to: "#service" },
        { text: "Add Asset Class", icon: <Assessment />, to: "/asset" },
        { text: "Dashboard", icon: <Dashboard />, to: "/dashboard" },
        { 
          text: "Logout", 
          icon: <LogoutOutlined />, 
          onClick: logout,
        },
      ]
    : [
        { text: "Home", icon: <Home />, to: "/" },
        { text: "About", icon: <Info />, to: "#about" },
        { text: "Contact", icon: <Person />, to: "#contact" },
        { text: "Service", icon: <MiscellaneousServices />, to: "#service" },
        { text: "Login", icon: <Login />, to: "/login" },
      ];
};
