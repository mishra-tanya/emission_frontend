import { Home, Info, Login, MiscellaneousServices, Person } from "@mui/icons-material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export const menuItems = [
         { text: 'Home', icon: <Home />, to: '/' },
         { text: 'About', icon: <Info />, to: '#about' },
         { text: 'Contact', icon: <Person />, to: '#contact' },
         { text: 'Service', icon: <MiscellaneousServices />, to: '#service' },
         { text: 'Login', icon: <Login />, to: '/login' }
     ];

export const socials=[
    {link:'/', platform:'facebook', icon:<Facebook/>},
    {link:'/', platform:'Instagram', icon:<Instagram/>},
    {link:'/', platform:'Twitter', icon:<Twitter/>},
    {link:'/', platform:'LinkedIn', icon:<LinkedIn/>},
  
  ]
 