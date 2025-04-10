import { Bar } from "react-chartjs-2";
import { useFetch } from "../../hooks/fetchData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import LoadingSpinner from "../common/LoadingSpinner";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface EmissionData {
  asset_class: string;
  financed_emissions_1: number;
  project_name: string;
}

export function AssetFinanceEmissionChart() {
  const { data, isLoading,  } = useFetch<EmissionData[]>("/top-asset-finance");

  if (isLoading) return <LoadingSpinner size={33} />;

  const emissionsByAssetClass: Record<string, number> = {};

  data?.forEach(({ financed_emissions_1, project_name }: EmissionData) => {
    emissionsByAssetClass[project_name] = (emissionsByAssetClass[project_name] || 0) + financed_emissions_1;
  });

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
    return num.toLocaleString();
  };

  const generateColors = (length: number) => Array.from({ length }, (_, i) => `hsl(${(i * 360) / length}, 70%, 50%)`);

  const labels = Object.keys(emissionsByAssetClass);
  const datasetValues = Object.values(emissionsByAssetClass);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Financed Emissions (tCO₂e)",
        data: datasetValues,
        backgroundColor: generateColors(labels.length),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: (value: string | number) => formatNumber(Number(value)),
        },
      },
    },
  };

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Card variant="outlined" sx={{ width: "100%", p: 1, maxHeight: 440, overflowY: "auto", overflowX: "auto" }}>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", p: 3, textAlign: "center" }}>
              Top Financed Emissions
            </Typography>
            <Box sx={{ height: "300px", width: "100%" }}>
              <Bar data={chartData} options={chartOptions} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
