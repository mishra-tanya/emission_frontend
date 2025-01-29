import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?:any
  helperText?:any
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  value,
  onChange,
  placeholder = "Enter your password",
  error,
  helperText
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <TextField
      type={isPasswordVisible ? "text" : "password"}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      fullWidth
      variant="outlined"
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleVisibility} edge="end">
              {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
