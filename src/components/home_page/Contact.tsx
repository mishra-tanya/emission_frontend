import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import StyleType from "../common/StyleType";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact:"",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
    contact: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.match(/^\S+@\S+\.\S+$/),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
      contact: !formData.message.trim()
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        contact:""
      });
    }
  };

  return (
    <Box
    id="contact"
    ref={(contactRef)}
      sx={{
        color: "#ffffff",
        padding: "2rem 1rem",
        marginTop: "3rem",
      }}
    >
     <StyleType title="Contact Us" />
        <Grid item xs={12} md={6}>
          
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  helperText={errors.name && "Name is required"}
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Contact No."
                  name="contact"
                  variant="outlined"
                  fullWidth
                  value={formData.contact}
                  onChange={handleChange}
                  error={errors.contact}
                  helperText={errors.contact && "Contact is required"}
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email && "Invalid email"}
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  fullWidth
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  helperText={errors.subject && "Subject is required"}
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message && "Message is required"}
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#1e8449",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

    </Box>
  );
};

export default Contact;
