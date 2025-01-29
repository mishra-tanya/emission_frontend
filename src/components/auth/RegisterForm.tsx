import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { usePost } from "../../hooks/usePost";
import { TextField, Button, Box, Typography } from "@mui/material";
import PasswordInput from "../common/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/Validations";
import apiRoutes from "../../routes/apiRoutes"; 

interface FormState {
  first_name: string;
  last_name: string;
  username: string;
  country: string;
  address: string;
  email:string;
  phone: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const { formData, handleChange, resetForm } = useForm<FormState>({
    first_name: "",
    last_name: "",
    username: "",
    email:"user@hd.dw",
    password: "",
    country: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate();

  const { postData, isLoading, error, data } = usePost<{ message: string }>();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);  

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const response = await postData(apiRoutes.register, formData);
    if (response) {
      console.log("Registration Successful:", response);
      resetForm();

      alert("Registration successful! Please Sign In now.");
      navigate("/login"); 
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 550, mx: "auto", padding: '30px' }}>
      <TextField
        name="first_name"
        label="First Name"
        value={formData.first_name}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
        error={!!errors.first_name}
        helperText={errors.first_name}
      />
      <TextField
        name="last_name"
        label="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
        error={!!errors.last_name}
        helperText={errors.last_name}
      />
      <TextField
        name="phone"
        label="Contact Number"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
        error={!!errors.phone}
        helperText={errors.phone}
      />
      <TextField
        name="address"
        label="Address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
        error={!!errors.address}
        helperText={errors.address}
      />
      <TextField
        name="country"
        label="Country"
        value={formData.country}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
        error={!!errors.country}
        helperText={errors.country}
      />
     
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
        {isLoading ? "Please wait Creating account..." : "Create an account"}
      </Button>

    <Box sx={{marginTop:3}}>
    {error && <Typography sx={{textAlign:'center',bgcolor:'#d32f2f',borderRadius:1,p:1,color:'white'}}>{error}</Typography>}
      {data && <Typography color="success.main">Registration Successful!</Typography>}
    </Box>

      <Box sx={{ marginBlock: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography>
          Already have an account? <Link to="/login"> Sign In Now</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
