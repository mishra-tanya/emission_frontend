import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const formatLabel = (key: string) => {
  return key
    .replace(/_/g, " ") 
    .replace(/([a-z])([A-Z])/g, "$1 $2") 
    .replace(/\b\w/g, (char) => char.toUpperCase()); 
};

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

  return (
    <>
      <Navbar />
      <Box sx={{ m: 2 }}>
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Submission Results
            </Typography>

            {resultData ? (
              <Box sx={{ mt: 2 }}>
                {Object.entries(resultData).map(([key, value]) => (
                  <Box key={key} sx={{ display: "flex", alignItems: "center",}}>
                    {!hasNestedContent(value) && (
                      <Typography sx={{ fontWeight: "bold", minWidth: "150px", }}>
                        {formatLabel(key)}:
                      </Typography>
                    )}
                    {renderValue(value)}
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography variant="h6" color="error">
                No results found.
              </Typography>
            )}

            <Box display="flex" justifyContent="center" mt={3}>
              <Button variant="contained" onClick={() => navigate("/asset")}>
                Compute Another Loan
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  );
};

export default Results;
