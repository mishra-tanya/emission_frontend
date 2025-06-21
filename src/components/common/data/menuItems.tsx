import { Assessment, Dashboard, Home, Login, LogoutOutlined, MiscellaneousServices, Web } from "@mui/icons-material";
import useAuth from "../../../hooks/useAuth";
import useLogout from "../../../hooks/useLogout";

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

const BASENAME = import.meta.env.VITE_BASENAME || "";

const getPath = (path: string) => (path.startsWith("#") ? path : `${BASENAME}${path}`);

export const MenuItems = (): MenuItem[] => {
  const { isAuthenticated } = useAuth();
  const logout = useLogout();

  return isAuthenticated
    ? [
        { text: "Home", icon: <Home />, to: getPath("/") },
        { text: "IndiaESG.org", icon: <Web />, to: "https://indiaesg.org/"},
        { text: "About", icon: <MiscellaneousServices />, to: getPath("#service") },
        { text: "Add Asset Class", icon: <Assessment />, to: getPath("/asset") },
        { text: "Dashboard", icon: <Dashboard />, to: getPath("/dashboard") },
        { text: "Logout", icon: <LogoutOutlined />, onClick: logout },
      ]
    : [
        { text: "Home", icon: <Home />, to: getPath("/") },
        { text: "IndiaESG.org", icon: <Web />, to: "https://indiaesg.org/"},
        { text: "About", icon: <MiscellaneousServices />, to: getPath("#service") },
        { text: "Login", icon: <Login />, to: getPath("/login") },
      ];
};
