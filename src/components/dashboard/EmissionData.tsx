import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

interface EmissionFactor {
  id: number;
  asset_class: string;
  emission_factors: Record<string, any>;
  data_quality_score: number;
  calculated_emission_total: number;
  created_at: string;
  user_id_id: number;
}

interface Props {
  data: EmissionFactor[];
  average_data_quality_score:number;
}

const EmissionDataTable: React.FC<Props> = ({ data,average_data_quality_score }) => {
  const [openRowId, setOpenRowId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenRowId(prev => (prev === id ? null : id));
  };

  const isHeading = (key: string, value: any) =>
    key.toLowerCase().startsWith("heading") && typeof value === "string";

  return (
    <>
     <Card sx={{ mb: 3, borderLeft: "5px solid #4caf50" }}>
        <CardContent>
          <Typography variant="h6">Average Data Quality Score (Emission)</Typography>
          <Typography variant="h4" fontWeight="bold" color="primary">
            {average_data_quality_score !== null ? average_data_quality_score : "Not Available"}
          </Typography>
        </CardContent>
      </Card>

    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead >
          <TableRow>
            <TableCell  sx={{fontWeight:"bold"}}>S.No.</TableCell>
            <TableCell  sx={{fontWeight:"bold"}}>Asset Class</TableCell>
            <TableCell  sx={{fontWeight:"bold"}}>Data Quality Score</TableCell>
            <TableCell  sx={{fontWeight:"bold"}}>Outstanding Loan</TableCell>
            <TableCell  sx={{fontWeight:"bold"}}>Borrower Name</TableCell>
            <TableCell  sx={{fontWeight:"bold"}}>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row,index) => (
            <React.Fragment key={row.id}>
              <TableRow hover>
                <TableCell>{index+1}</TableCell>
                <TableCell>{row.asset_class}</TableCell>
                <TableCell>{row.data_quality_score}</TableCell>
                <TableCell>{row.emission_factors.outstanding_loan_EUR_Million}</TableCell>
                <TableCell>{row.emission_factors.borrower_name}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleToggle(row.id)}>
                    {openRowId === row.id ? "Hide Details" : "Show Details"}
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={5} sx={{ p: 0, border: 0 }}>
                  <Collapse in={openRowId === row.id} timeout="auto" unmountOnExit>
                    <Box p={3} bgcolor="#fafafa">
                      <Typography variant="h6" gutterBottom>
                        Emission Factor Details
                      </Typography>

                      <Box>
                        {(() => {
                          const items: JSX.Element[] = [];
                          let group: JSX.Element[] = [];

                          Object.entries(row.emission_factors).forEach(([key, value], idx, arr) => {
                            if (isHeading(key, value)) {
                              if (group.length > 0) {
                                items.push(
                                  <Grid container spacing={2} key={`group-${idx}`} sx={{ mb: 2 }}>
                                    {group}
                                  </Grid>
                                );
                                group = [];
                              }

                              items.push(
                                <Typography
                                  key={key}
                                  variant="subtitle1"
                                  fontWeight="bold"
                                  sx={{ mt: 2, mb: 1, color: "#1976d2" }}
                                >
                                  {value}
                                </Typography>
                              );

                              items.push(<Divider key={`divider-${key}`} sx={{ mb: 2 }} />);
                            } else {
                              group.push(
                                <Grid item xs={12} sm={6} md={4} key={key}>
                                  <Typography variant="body2" fontWeight="bold">
                                    {key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                                  </Typography>
                                  <Typography variant="body1" color="text.secondary">
                                    {value}
                                  </Typography>
                                </Grid>
                              );
                            }

                            if (idx === arr.length - 1 && group.length > 0) {
                              items.push(
                                <Grid container spacing={2} key={`group-end-${idx}`} sx={{ mb: 2 }}>
                                  {group}
                                </Grid>
                              );
                            }
                          });

                          return items;
                        })()}
                      </Box>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default EmissionDataTable;
