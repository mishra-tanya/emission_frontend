import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { initGA, trackPageview } from '../../utils/Analytics';
import PageTracker from '../../utils/PageTracker';

const Layout = () => {
   const location = useLocation();

  useEffect(() => {
    initGA(); 
  }, []);

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <PageTracker/>
        <Outlet /> 
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
