import axios from "axios";
import { API_BASE_URL } from "./Config";

const api = axios.create({
  baseURL: API_BASE_URL, 
  withCredentials: true, 
});

export const getCsrfToken = async () => {
    try {
      const response = await api.get("/csrf-token/");
      const csrfToken = response.data.csrfToken;
  
      console.log("CSRF Token initialized:", csrfToken);
    } catch (error) {
      console.error("Error fetching CSRF Token:", error);
    }
};

// Request Interceptor: Add CSRF and Authorization tokens to requests
api.interceptors.request.use(
  (config) => {
    // Get the JWT token from localStorage
    const authToken = localStorage.getItem("authToken");

    // Attach Authorization header if token is present
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }

    // Add CSRF token from cookies (if required by Django setup)
    const csrfToken = getCookie("csrftoken");
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle token expiration or errors
api.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle token expiration or authentication failures
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.detail === "Invalid token"
    ) {
      // Remove expired token
      localStorage.removeItem("authToken");

      // Optional: Redirect to login page
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

// Utility function to get cookies (for CSRF token retrieval)
const getCookie = (name: string): string | null => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
  return cookieValue ? decodeURIComponent(cookieValue) : null;
};

export default api;
