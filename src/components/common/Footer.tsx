import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { MenuItems } from "./data/menuItems";
import { socials } from "./data/socials";

const Footer = () => {

  const menuItems=MenuItems();

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
          {menuItems.map((quickLink)=>(
              <Link href={quickLink.to} underline="none" sx={{ display: "block", color: "#ffffff", marginBottom: "0.5rem" }}>
              {quickLink.text}
            </Link>
          ))}
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
            {socials.map((social)=>(
              <IconButton href={social.link} target="_blank" sx={{ color: "#ffffff" }}>
             {social.icon}
            </IconButton>
            ))}
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
          © {new Date().getFullYear()} Finance Emission Computation. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
