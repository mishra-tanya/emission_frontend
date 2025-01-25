import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "#ffffff",
        padding: "2rem 1rem",
        marginTop: "3rem",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Company
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            We are committed to providing sustainable solutions to help businesses thrive while protecting the planet.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Quick Links
          </Typography>
          <Link href="/" underline="none" sx={{ display: "block", color: "#ffffff", marginBottom: "0.5rem" }}>
            Home
          </Link>
          <Link href="/about" underline="none" sx={{ display: "block", color: "#ffffff", marginBottom: "0.5rem" }}>
            About Us
          </Link>
          <Link href="/services" underline="none" sx={{ display: "block", color: "#ffffff", marginBottom: "0.5rem" }}>
            Services
          </Link>
          <Link href="/contact" underline="none" sx={{ display: "block", color: "#ffffff" }}>
            Contact
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
            Email: contact@yourcompany.com
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "0.5rem" }}>
            Phone: +123-456-7890
          </Typography>
          <Typography variant="body2">Address: 123 Greenway, Sustainability City</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#ffffff" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#ffffff" }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#ffffff" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#ffffff" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          borderTop: "1px solid #7f8c8d",
          paddingTop: "1rem",
        }}
      >
        <Typography variant="body2" sx={{ color: "#bdc3c7" }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
