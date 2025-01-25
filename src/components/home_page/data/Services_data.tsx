import { AccountBalance, Analytics, Build, } from '@mui/icons-material';

const services = [
 
  {
    id: 1,
    title: 'Easy Computations',
    description: 'Tools to assess and manage the climate risks associated with your financial decisions.',
    icon: <Build sx={{ fontSize: '3rem', color: '#f39c12' }} />,
  },
  {
    id: 2,
    title: 'Data Analytics',
    description: 'Comprehensive analytics to provide insights into financed emissions and sustainability metrics.',
    icon: <Analytics sx={{ fontSize: '3rem', color: '#e74c3c' }} />,
  },
  
  {
    id: 3,
    title: 'Finance Tracking',
    description: 'Helping businesses calculate and reduce financed emissions using advanced tools.',
    icon: <AccountBalance sx={{ fontSize: '3rem', color: '#2980b9' }} />,
  },
 
];

export default services;