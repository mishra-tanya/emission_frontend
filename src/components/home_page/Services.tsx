import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import services from './data/Services_data';
import StyleType from '../common/StyleType';

const Services = () => {
  const serviceRef = useRef<any[]>([]);

  const handleScroll = () => {
    serviceRef.current.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2, 
          ease: 'power3.out',
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ padding: '5rem 0', backgroundColor: 'white',m:2 }}>
        <StyleType title="Why Finance Emission Computation" />

      <Grid container spacing={3} justifyContent="center" >
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={service.id} sx={{m:1}}>
            <Card variant='outlined'
              ref={(el) => (serviceRef.current[index] = el)}
              sx={{
                opacity: 0,
                transform: 'translateY(50px)', 
                transition: '0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 3,
                },
                padding: '1rem',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {service.title}
                </Typography>
              <Typography  sx={{fontSize:'14px',color:'grey',textAlign:'center'}}>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
