import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/Registration';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
    
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <NotFoundPage /> },

]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
