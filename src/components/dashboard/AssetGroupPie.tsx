import { Pie } from "react-chartjs-2";
import { useFetch } from "../../hooks/fetchData";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import LoadingSpinner from "../common/LoadingSpinner";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

interface EmissionsData {
  [key: string]: number;
}

export function EmissionsByAssetClass() {
  const { data, isLoading,  } = useFetch<EmissionsData>("/grouped-finance-emission");

  if (isLoading) return <LoadingSpinner size={33} />;
  if(!data) return null;

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Emissions by Asset Class (tCO₂e/year)",
        data: Object.values(data),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF5733", "#C70039","#64e883"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Card variant="outlined" sx={{ height: 440, width: "100%", p: 4 }}>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}>
              Emissions by Asset Class
            </Typography>
            <Box sx={{ height: 300, width: "100%" }}>
              <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
