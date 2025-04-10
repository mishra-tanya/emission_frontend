import { Box, Grid } from "@mui/material";
import { EmissionsByAssetClass } from "../components/dashboard/AssetGroupPie";
import { WeightedDataQualityScore } from "../components/dashboard/DataQualityScore";
import { TotalFinancedEmissions } from "../components/dashboard/FinanceEmission";
import { TopOutstandingLoans } from "../components/dashboard/TopOutstandLoan";
import StyleType from "../components/common/StyleType";
import { AssetFinanceEmissionChart } from "../components/dashboard/TopFinanceEmissions";

function Dashboard() {
  return (
    <>
    <StyleType title="Overview Dashboard"/>
   <Box sx={{p:3}} >

 <Grid container spacing={3} sx={{marginBottom:3}} justifyContent="center">
      <TotalFinancedEmissions />
      <WeightedDataQualityScore />
    </Grid>
    <Grid container spacing={3} sx={{marginBottom:3}} justifyContent="center">
      <TopOutstandingLoans />

      <EmissionsByAssetClass />
    <AssetFinanceEmissionChart/>

    </Grid>
   </Box>

    </>
  );
}

export default Dashboard;
