import { Box, Typography, } from '@mui/material';
import { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-header',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.about-content',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <Box sx={{ padding: '5rem 0', backgroundColor: '#f4f4f9', }}>
      <Box sx={{ textAlign: 'center', marginBottom: '3rem',m:3 }}>
        <Typography
          variant="h2"
          className="about-header"
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: '3rem',
              md: '3.5rem',
            },
            fontWeight: 'bold',
            color: '#2c3e50',
            letterSpacing: '1px',
            marginBottom: '1rem',
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.25rem',
              md: '1.5rem',
            },
            color: '#7f8c8d',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          We are a team of passionate developers and sustainability enthusiasts committed to building
          tools that enable organizations to calculate financed emissions, helping them contribute to
          a greener and more sustainable future. Our app uses the PCAF framework to calculate and
          track financed emissions for loans and investments, enabling businesses to understand and
          reduce their environmental impact.
        </Typography>
      </Box>

    </Box>
  );
};

export default About;
