import { useFetch } from "../../hooks/fetchData";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { AttachMoney } from "@mui/icons-material";  
import LoadingSpinner from "../common/LoadingSpinner";

export function TotalFinancedEmissions() {
  const { data, isLoading } = useFetch<{ total_financed_emissions: number }>("/total-finance-emission");

  if (isLoading) return <LoadingSpinner size={33} />;

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Card variant="outlined" sx={{ width: "100%", p: 4 }}>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Box sx={{ mr: 2 }}>
                <AttachMoney sx={{ fontSize: 40, color: "#00796b" }} />
              </Box>
              
              <Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                  Total Financed Emissions
                </Typography>
                <Typography variant="h4" component="div" sx={{ color: "#00796b", fontWeight: "bold" }}>
                  {data?.total_financed_emissions??"N/A"} tCO₂e/year
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
