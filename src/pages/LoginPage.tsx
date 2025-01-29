import React from "react";
import { Box } from "@mui/material";
import StyleType from "../components/common/StyleType";
import LoginForm from "../components/auth/LoginForm";

const LoginPage: React.FC = () => {
  return (
  <>
    <Box >
      <Box sx={{marginTop:10}}>
      <StyleType title="Sign In " />
      </Box>
      <LoginForm />
    </Box>
  </>
  );
};

export default LoginPage;
