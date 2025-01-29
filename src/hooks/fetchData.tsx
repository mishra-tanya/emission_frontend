import { useState, useEffect } from "react";
import api from "../services/Axios";

interface FetchState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await api.get<T>(url); 
        if (isMounted) {
          setState({ data: response.data, error: null, isLoading: false });
        }
      } catch (error: any) {
        if (isMounted) {
          setState({
            data: null,
            error: error.response?.data?.message || error.message || "An error occurred",
            isLoading: false,
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
}
