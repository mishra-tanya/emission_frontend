import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { TextField, Button, Box, Typography } from "@mui/material";
import PasswordInput from "../common/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/Validations";
import apiRoutes from "../../routes/apiRoutes";
import { usePost } from "../../hooks/usePost";
// import Cookies from "js-cookie"; 

interface FormState {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { formData, handleChange, resetForm } = useForm<FormState>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { postData, isLoading, error, data } = usePost<{ token: string }>();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await postData(apiRoutes.login, formData); 
    if (response && response.token) {
      console.log("Login Successful:", response);

      // Cookies.set("token", response.token, { expires: 7 }); 

      resetForm();

      alert("Login successful!");
      navigate("/dashboard"); 
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 550, mx: "auto", padding: "30px" }}>
      <TextField
        name="username"
        label="Email"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
        type="email"
        error={!!errors.username}
        helperText={errors.username}
      />
      <PasswordInput
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
        <Box sx={{marginTop:3}}>
          {error && <Typography sx={{textAlign:'center',bgcolor:'#d32f2f',borderRadius:1,p:1,color:'white'}}>{error}</Typography>}
            {data && <Typography color="success.main">Registration Successful!</Typography>}
          </Box>

      <Box sx={{ marginBlock: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: "center", gap: 1 }}>
        <Typography>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Typography>
        <Typography>
          Don't have an account? <Link to="/register">Create Now</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
