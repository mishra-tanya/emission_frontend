import { Box, Typography,  } from "@mui/material";

const Footer = () => {

  return (
    
    <Box
      sx={{
        backgroundColor: "black",
        color: "#ffffff",
        padding: "2rem 1rem",
      }}
    >
  
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "#bdc3c7" }}>
          © {new Date().getFullYear()} Finance Emission Computation. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
