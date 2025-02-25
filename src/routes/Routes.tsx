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

const BASENAME = import.meta.env.VITE_BASENAME;

const router = createBrowserRouter([
  { path: `${BASENAME}/`, element: <HomePage /> },
  { path: `${BASENAME}/register`, element: <RegisterPage /> },
  { path: `${BASENAME}/login`, element: <LoginPage /> },
  { path: `${BASENAME}/choice`, element: <Choice /> },
  {
    path: `${BASENAME}/asset`,
    element: <PrivateRoute element={<AssetClass />} />,
  },
  {
    path: `${BASENAME}/assets`,
    element: <PrivateRoute element={<AssetSelection />} />,
  },
  {
    path: `${BASENAME}/details/:assetClass`,
    element: <PrivateRoute element={<AssetDetails />} />,
  },
  {
    path: `${BASENAME}/submit`,
    element: <PrivateRoute element={<SubmitConfirmation />} />,
  },
  {
    path: `${BASENAME}/results`,
    element: <PrivateRoute element={<Results />} />,
  },
  {
    path: `${BASENAME}/dashboard`,
    element: <PrivateRoute element={<Dashboard />} />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
