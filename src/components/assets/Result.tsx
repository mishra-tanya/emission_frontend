import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box, Grid } from "@mui/material";

const formatLabel = (key: string) => {
  return key
    .replace(/_/g, " ") 
    .replace(/([a-z])([A-Z])/g, "$1 $2") 
    .replace(/\b\w/g, (char) => char.toUpperCase()); 
};

const BASENAME = import.meta.env.VITE_BASENAME;

const hasNestedContent = (value: any) => {
  return typeof value === "object" && value !== null && Object.keys(value).length > 0;
};

const renderValue = (value: any, level = 0): React.ReactNode => {
  if (hasNestedContent(value)) {
    return (
      <Box sx={{ ml: level === 0 ? 0 : 2 }}>
        {Object.entries(value).map(([nestedKey, nestedValue]) => (
          <Box key={nestedKey} sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "bold", minWidth: "150px" }}>
              {formatLabel(nestedKey)}:
            </Typography>
            <Typography>{renderValue(nestedValue, level + 1)}</Typography>
          </Box>
        ))}
      </Box>
    );
  }
  return <Typography>{String(value)}</Typography>;
};

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultData } = location.state || {};

  const groupedData: Record<string, [string, any][]> = {};
  let currentHeading: string  = "General";

  if (resultData) {
    for (const [key, value] of Object.entries(resultData)) {
      const headingMatch = key.match(/^Heading\d+/i);
      
      if (typeof value === "string" && headingMatch) {
        currentHeading = value; // Now safely assigning string
        groupedData[currentHeading] = [];
      }
      else {
        if (!groupedData[currentHeading]) {
          groupedData[currentHeading] = [];
        }
        groupedData[currentHeading].push([key, value]);
      }
    }
  }

  return (
    <Box sx={{ m: 2 }}>
      <Card sx={{ maxWidth: 900, margin: "auto", mt: 5, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            Submission Results
          </Typography>

          {resultData ? (
            <Box sx={{ mt: 2 }}>
              {Object.entries(groupedData).map(([heading, items]) => (
                <Box key={heading} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 1, backgroundColor: "#003366",textAlign:'center', color: "#fff", p: 1 }}>
                    {heading}
                  </Typography>
                  {items.map(([key, value]) => (
                    <Grid container key={key} sx={{ mt: 1 }}>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ backgroundColor: "#055bab", color: "white", padding: "5px", textAlign: "left" }}>
                          <Typography sx={{ fontWeight: "bold" }}>{formatLabel(key)}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ backgroundColor: "#a8ceff", padding: "5px", textAlign: "left" }}>
                          <Typography sx={{ mx: 1 }}>{renderValue(value)}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              ))}
            </Box>
          ) : (
            <Typography variant="h6" color="error">
              No results found.
            </Typography>
          )}

          <Box display="flex" justifyContent="center" mt={3}>
            <Button variant="contained" sx={{ mr: 3 }} onClick={() => navigate(`${BASENAME}/asset`)}>
              Compute Another Loan
            </Button>
            <Button variant="contained" onClick={() => navigate(`${BASENAME}/dashboard`)}>
              Go to Dashboard
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};


export default Results;
