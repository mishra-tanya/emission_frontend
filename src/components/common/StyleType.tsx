import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";

interface HeaderProps {
  title: string;
  sx?: object; 
}

const StyleType: React.FC<HeaderProps> = ({ title, sx = {} }) => {
  const headerRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" } 
    );
  }, []);

  return (
    <Box
      ref={headerRef}
      sx={{ textAlign: "center", marginBottom: "3rem", m: 3, }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "2.5rem",
            sm: "3rem",
            md: "3.5rem",
          },
          fontWeight: "bold",
          color: "#2c3e50",
          letterSpacing: "1px",
          marginBottom: "1rem",
           ...sx
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default StyleType;
