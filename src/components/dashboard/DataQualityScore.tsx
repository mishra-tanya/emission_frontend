import { useFetch } from "../../hooks/fetchData";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { Assessment } from "@mui/icons-material";  
import LoadingSpinner from "../common/LoadingSpinner";

export function WeightedDataQualityScore() {
  const { data, isLoading } = useFetch<{ average_data_quality_score: number }>("/average-data-quality");

  if (isLoading) return <LoadingSpinner size={33} />;

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Card variant="outlined" sx={{ width: "100%", p: 4 }}>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Box sx={{ mr: 2 }}>
                <Assessment sx={{ fontSize: 40, color: "#1976d2" }} />
              </Box>
              
              <Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold" ,}}>
                  Average Data Quality Score (Outstanding Loan)
                </Typography>
                <Typography variant="h4" component="div" sx={{ color: "#1976d2", fontWeight: "bold" }}>
                  {data?.average_data_quality_score??"N/A"}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
