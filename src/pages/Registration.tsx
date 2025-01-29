import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import Navbar from "../components/common/Navbar";
import { Box } from "@mui/material";
import StyleType from "../components/common/StyleType";

const RegisterPage: React.FC = () => {
  return (
  <>
    <Box >
      <Navbar/>
      <Box>
      <StyleType title="Create Your Account" />
      </Box>
      <RegisterForm />
    </Box>
  </>
  );
};

export default RegisterPage;
