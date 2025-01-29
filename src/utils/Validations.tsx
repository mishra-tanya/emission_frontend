export const validateForm = (data: { username: string; password: string }) => {
    const errors: { [key: string]: string } = {};
  
    if (!data.username) errors.username = "Email is required.";
    if (!data.password) errors.password = "Password is required.";
    if (data.password.length < 6) errors.password = "Password must be at least 6 characters.";
  
    return errors;
  };
  