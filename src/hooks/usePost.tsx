import { useState } from "react";
import api from "../services/Axios";

interface PostState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export function usePost<T>() {
  const [state, setState] = useState<PostState<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const postData = async (url: string, payload: any) => {
    setState({ ...state, isLoading: true });

    try {
      const response = await api.post<T>(url, payload);
      console.log(response.data);
      setState({ data: response.data, error: null, isLoading: false });
      return response.data;
    } catch (error: any) {
        console.error("Error response:", error.response?.data);
    
        const errorMessages = error.response?.data || {};
        const allErrors = Object.keys(errorMessages)
          .map((field) => `${field.charAt(0).toUpperCase() + field.slice(1)}: ${errorMessages[field].join(", ")}`)
          .join(", "); 
    
        setState({
          data: null,
          error: allErrors || "Something went wrong",
          isLoading: false,
        });
    }
  };

  return { ...state, postData };
}
