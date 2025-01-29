import { Box, Typography, } from '@mui/material';
import useGsapAnimation from '../common/animation/PopUp';
import StyleType from '../common/StyleType';

const About = () => {
 
  useGsapAnimation({
    target: '.box',
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1, duration: 2 },
  });
  
  return (
    <Box sx={{ padding: '5rem 0', backgroundColor: '#f4f4f9', }}>
      <StyleType title="About Us" />
        <Typography
        className='box'
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
            textAlign:'center',
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

  );
};

export default About;
