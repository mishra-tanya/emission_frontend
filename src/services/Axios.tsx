import axios from "axios";
import { API_BASE_URL } from "./Config";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
});

// Function to fetch and store CSRF token
export const getCsrfToken = async () => {
  try {
    const response = await api.get("/csrf-token/");
    const csrfToken = response.data.csrfToken;
    if (csrfToken) {
      Cookies.set("csrftoken", csrfToken);  // Store CSRF token in cookies
    }
  } catch (error) {
    console.error("Error fetching CSRF Token:", error);
  }
};

// Initialize CSRF token on app load or before making any requests
getCsrfToken();

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const access = Cookies.get("access_token");
    if (access) {
      config.headers["Authorization"] = `Bearer ${access}`;  // Set Authorization header
    }
   
    // Add CSRF token from cookies (if required by backend)
    const csrfToken = Cookies.get("csrftoken");
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;  // Set CSRF token in header
    }

    // Ensure Content-Type is set to application/json for all POST, PUT, PATCH requests
    if (config.method === "post" || config.method === "put" || config.method === "patch") {
      config.headers["Content-Type"] = "application/json";
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
    if (error.response) {
      const status = error.response.status;
      const detail = error.response.data?.detail;

      if (status === 401 && detail === "Invalid token") {
        // Remove expired token and refresh token from cookies
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");

        // Optional: Redirect to login page
        window.location.href = "/login";
      }

      // Handle CSRF failure (e.g., 403)
      if (status === 403) {
        console.error("CSRF Token validation failed. Please reload the page.");
      }
    }

    return Promise.reject(error);
  }
);

// Utility function to get cookies (for CSRF token retrieval)
const getCookie = (name) => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
  return cookieValue ? decodeURIComponent(cookieValue) : null;
};

export default api;
