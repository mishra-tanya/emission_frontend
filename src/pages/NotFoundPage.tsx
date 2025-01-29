import React from "react";
import { useFetch } from "../hooks/fetchData";
import apiRoutes from "../routes/apiRoutes";

const NotFoundPage: React.FC = () => {
  const { data, error, isLoading } = useFetch<{ message: string }>(apiRoutes.login);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Response</h1>
      <p>{data?.message}</p>
    </div>
  );
};

export default NotFoundPage;
