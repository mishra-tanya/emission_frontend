import { AccountBalance, Analytics, Build } from '@mui/icons-material';

const services = [
  {
    id: 1,
    title: 'Calculate Emissions',
    description: 'Input loan and borrower details to instantly calculate financed emissions for business loans.',
    icon: <Build sx={{ fontSize: '3rem', color: '#f39c12' }} />,
  },
  {
    id: 2,
    title: 'View Computation Results',
    description: 'Get a clear breakdown of emission calculations based on industry, loan amount, and attribution.',
    icon: <Analytics sx={{ fontSize: '3rem', color: '#e74c3c' }} />,
  },
  {
    id: 3,
    title: 'Access Your Dashboard',
    description: 'Monitor and manage all your emission calculations in one place with user-friendly dashboard.',
    icon: <AccountBalance sx={{ fontSize: '3rem', color: '#2980b9' }} />,
  },
];

export default services;
