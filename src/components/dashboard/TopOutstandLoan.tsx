import { useFetch } from "../../hooks/fetchData";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@mui/material";

export function TopOutstandingLoans() {
  const { data, isLoading, error } = useFetch<Array<{ project_name: string; outstanding_loan: number }>>("/top-outstanding-loans");

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Card variant="outlined" sx={{minHeight:439,maxHeight:440, width: "100%", p: 2 }}>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
              Top 5 Outstanding Loans
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: 340 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>S. No.</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>Project Name</TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>Outstanding Loan</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((loan, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{loan.project_name}</TableCell>
                      <TableCell align="center">{loan.outstanding_loan.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}