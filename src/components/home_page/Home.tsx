// import { useEffect } from 'react';
// import gsap from 'gsap';
import { Box, Typography } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import useGsapAnimation from '../common/animation/PopUp';

const Home = () => {
const BASENAME = import.meta.env.VITE_BASENAME;
  
  // useEffect(() => {
  //   const createFloatingItems = () => {
  //     const container = document.querySelector('.floating-container') as HTMLElement;
  
  //     const symbols = ['💰', '➕', '💸', '🎯'];
  //     for (let i = 0; i < 10; i++) {
  //       const item = document.createElement('div');
  //       item.className = 'floating-item';
  //       item.style.position = 'absolute';
  //       item.style.fontSize = `${Math.random() * 20 + 20}px`;
  //       item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
  //       container?.appendChild(item);
  
  //       const startX = Math.random() * (window.innerWidth - 50);
  //       const startY = window.innerHeight + Math.random() * 100;
  //       item.style.left = `${startX}px`;
  //       item.style.top = `${startY}px`;
  
  //       gsap.to(item, {
  //          y: -Math.random() * window.innerHeight, 
  //         x: `+=${Math.random() * 50 - 25}`,
  //         duration: Math.random() * 4 + 4,
  //         repeat: -1,
  //         ease: 'power1.inOut',
  //         onRepeat: () => {
  //           item.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
  //         },
  //       });
  //     }
  //   };
  
  //   createFloatingItems();
  // }, []);
  
  // useGsapAnimation({
  //   target: '.box',
  //   from: { opacity: 0, scale: 0 },
  //   to: { opacity: 1, scale: 1, duration: 2 },
  // });

  return (
    <>
      <Box
        className="floating-container hide-on-mobile"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
      </Box>

      <Box className="box" style={{ marginTop: '4%', color: 'white', position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            fontSize: {
              xs: '4rem',
              sm: '5rem',
              md: '6rem',
            },
            fontWeight:{
              xs:'bold',
              sm:'normal'
            }
          }}
        >
          Financed Emission <br /> Computation Tool
        </Typography>
      </Box>

      <Box className="box" style={{ marginTop: 18, color: 'white', textAlign: 'center', zIndex: 2 }}>
        <Typography variant='h5' sx={{  textAlign: 'center',  fontSize: { xs: '1rem', sm: '1rem',md: '1.5rem', },
           }}>
          The application aims to help users <br />calculate the financed emissions
          associated with loans and investments, <br />following the PCAF framework
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Link to={`${BASENAME}/login`} style={{ textDecoration: 'none' }}>
    <Typography
      sx={{
        marginTop: 4,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',
        border: '1px solid white',
        borderRadius: '20px',
        padding: '0.5rem 1rem',
        transition: 'all 0.3s ease',
        marginBottom: 5,
        '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
      }}
    >
      Get Started
      <ArrowOutward sx={{ marginLeft: '0.5rem' }} />
    </Typography>
  </Link>
</Box>

    </>
  );
};

export default Home;
