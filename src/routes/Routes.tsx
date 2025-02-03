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

const router = createBrowserRouter([
    
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  {
    path:'/choice', element:<Choice/>
  },
  {
    path: '/asset',
    element: (
      <PrivateRoute element={<AssetClass />} />
    ),
  },
  {
    path: '/assets',
    element: (
      <PrivateRoute element={<AssetSelection />} />
    ),
  },
  {
    path: '/details/:assetClass',
    element: (
      <PrivateRoute element={<AssetDetails />} />
    ),
  },
  {
    path: '/submit',
    element: (
      <PrivateRoute element={<SubmitConfirmation />} />
    ),
  },
  {
    path: '/results',
    element: (
      <PrivateRoute element={<Results />} />
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute element={<Dashboard />} />
    ),
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
