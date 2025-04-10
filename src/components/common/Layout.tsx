import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Outlet /> 
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
