import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { gsap } from "gsap";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import StyleType from "../components/common/StyleType";
import { ArrowOutward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Choice: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const BASENAME = import.meta.env.VITE_BASENAME;

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.3,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  return (
   <>
   <Navbar/>
   <Box sx={{ maxWidth: "900px", margin: "auto", padding: "2rem 1rem" }}>
    <StyleType title="Select An Option"/>
    <hr /><br />
      <Grid
        container
        spacing={4}
        alignItems="center"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <Grid item xs={12} md={6}>
         <StyleType title='Compute for a loan'/>
          <Typography variant="body1" color="textSecondary">
          To compute for a loan, first, select an asset class by clicking on
           the "Start Computation" button. 
           <br />
           Once an asset class is chosen, you 
           will need to fill in the required details, such as outstanding loan 
           amount, borrower details, property values, or sector information. 
           <br />
           Some fields may require manual input, while others offer dropdown selections. 
           <br />
          After entering the necessary information, click on the "Next" button 
          to proceed with the calculation.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to={`${BASENAME}/asset`} style={{ textDecoration: 'none' }}>
          <Typography
            component={Link}
            to={`${BASENAME}/asset`}
            sx={{
              marginTop: 4,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              backgroundColor: 'black',
              color:'white',
              border: '1px solid white',
              borderRadius: '20px',
              padding: '0.5rem 1rem',
              transition: 'all 0.3s ease',
              marginBottom: 5,
            }}
          >
            Start Computation
            <ArrowOutward sx={{ marginLeft: '0.5rem' }} />
          </Typography>
        </Link>
      </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={image1} alt="Visual 1" width="100%" style={{ borderRadius: "8px",maxHeight:"450px" }} />
        </Grid>
        
      </Grid>

      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{ mt: 5 }}
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <Grid item xs={12} md={6}>
          <img src={image2} alt="Visual 2" width="100%" style={{ borderRadius: "8px",maxHeight:"450px"  }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyleType title=" View Dashboard"/>
          <Typography variant="body1" color="textSecondary">
          The dashboard provides an overview of your loan computations, asset details,
           and financial insights. 
           <br />You can track your submitted data, review key metrics,
            and analyze trends based on the selected asset classes. <br />
           The dashboard helps in monitoring progress and making informed financial decisions.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to={`${BASENAME}/dashboard`} style={{ textDecoration: 'none' }}>
          <Typography
            component={Link}
            to={`${BASENAME}/dashboard`}
            sx={{
              marginTop: 4,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              backgroundColor: 'black',
              color:'white',
              border: '1px solid white',
              borderRadius: '20px',
              padding: '0.5rem 1rem',
              transition: 'all 0.3s ease',
              marginBottom: 5,
            }}
          >
            View Dashboard
            <ArrowOutward sx={{ marginLeft: '0.5rem' }} />
          </Typography>
        </Link>
      </Box>
        </Grid>
      </Grid>
    </Box>
   <Footer/>
   </>
  );
};

export default Choice;
