import React from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { useFetch } from "../../hooks/fetchData";
import EmissionDataTable from "./EmissionData";

interface EmissionFactor {
  id: number;
  asset_class: string;
  emission_factors: Record<string, any>;
  data_quality_score: number;
  calculated_emission_total: number;
  created_at: string;
  user_id_id: number;
}
interface EmissionApiResponse {
  average_data_quality_score: number;
  data: EmissionFactor[];
}
const EmissionPage: React.FC = () => {
  const { data, isLoading, error } = useFetch<EmissionApiResponse>("/emission-data/");
  
// console.log(data);
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{textAlign:"center",m:"4",fontWeight:"bold"}} gutterBottom>
        Emission Data
      </Typography>

      {isLoading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {data && 
      <EmissionDataTable
       data={data.data}
       average_data_quality_score={data.average_data_quality_score}
     />}
    </Container>
  );
};

export default EmissionPage;
