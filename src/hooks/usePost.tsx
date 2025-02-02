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
      let errorMessage = "Something went wrong";
      console.log("Field errors:", error);
      if (error.response?.data) {
        const errorDetails = error.response?.data || {};
     
        errorMessage = Object.values(errorDetails)
          .map((fieldErrors: any) => fieldErrors.join(", "))
          .join(", ");
      }
      console.error("Error response:", errorMessage);

      setState({
        data: null,
        error: errorMessage,
        isLoading: false,
      });
    }
  };

  return { ...state, postData };
}
