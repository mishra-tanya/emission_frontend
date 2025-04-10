import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/Registration';
import LoginPage from '../pages/LoginPage';
import AssetClass from '../pages/AssetClass';
import AssetSelection from '../components/assets/AssetSelection';
import AssetDetails from '../components/assets/AssetDetails';
import SubmitConfirmation from '../components/assets/Submit';
import PrivateRoute from '../hooks/AuthRoutes';
import Choice from '../pages/Choice';
import Results from '../components/assets/Result';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/common/Layout';
import NotFoundPage from '../pages/NotFoundPage';

const BASENAME = import.meta.env.VITE_BASENAME;
const router = createBrowserRouter([
  {
    path: `${BASENAME}/`,
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },

      // public
      { path: 'register', element: <RegisterPage /> },
      { path: 'login', element: <LoginPage /> },

      // private/authenticated
      { path: 'choice', element: <PrivateRoute element={<Choice />} /> },
      { path: 'asset', element: <PrivateRoute element={<AssetClass />} /> },
      { path: 'assets', element: <PrivateRoute element={<AssetSelection />} /> },
      { path: 'details/:assetClass', element: <PrivateRoute element={<AssetDetails />} /> },
      { path: 'submit', element: <PrivateRoute element={<SubmitConfirmation />} /> },
      { path: 'results', element: <PrivateRoute element={<Results />} /> },
      { path: 'dashboard', element: <PrivateRoute element={<Dashboard />} /> },
      
      // not found
      { path: '*', element: <NotFoundPage /> },
    ]
  }
]);


const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
