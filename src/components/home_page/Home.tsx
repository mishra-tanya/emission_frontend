// Home.tsx
import { Box, Typography } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const BASENAME = import.meta.env.VITE_BASENAME || '';

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '90vh',
        backgroundColor: 'black', 
        overflow: 'hidden',
        paddingX: 2,
      }}
    >
      <Box
        className="floating-container hide-on-mobile"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Box
        sx={{
          marginTop: { xs: '20%', sm: '10%' },
          color: 'white',
          textAlign: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: '3.5rem',
              md: '4.5rem',
              lg: '5rem',
            },
            fontWeight: 'bold',
          }}
        >
          Financed Emission <br /> Computation Tool
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: 4,
          color: 'white',
          textAlign: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.2rem',
              md: '1.4rem',
            },
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Easily calculate and track financed emissions for business loans using
          our streamlined, user-friendly platform.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 6,
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box
          component={RouterLink}
          to={`${BASENAME}/login`}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'white',
            border: '1px solid white',
            borderRadius: '20px',
            padding: '0.6rem 1.4rem',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.15)',
            },
          }}
        >
          Get Started
          <ArrowOutward sx={{ marginLeft: '0.5rem' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
