const Base_URL: string = "http://62.146.182.21";
import axios from "axios";

// Base URL of your API
// export const Base_URL = "http://your-backend-url.com"; // Replace with your backend URL

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: Base_URL, // Base URL for your API requests
  withCredentials: true, // Send cookies with cross-origin requests
});

// Optional: Add interceptors for request/response logging or error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (e.g., display an error message)
    console.error(error);
    return Promise.reject(error);
  }
);

export default Base_URL;
