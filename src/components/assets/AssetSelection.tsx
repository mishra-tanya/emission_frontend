import React, { useState } from "react";
import { Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AssetSelection: React.FC = () => {
    const [assetClass, setAssetClass] = useState<string>("");
    const navigate = useNavigate();
    const BASENAME = import.meta.env.VITE_BASENAME;

    const handleNext = () => {
        if (assetClass) {
            navigate(`${BASENAME}/details/${assetClass}`);
        }
    };

    return (
       <>
       <Box sx={{m:2}}>

       <Card sx={{ maxWidth: 900, margin: "auto", marginBlock: 15, p: 3, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Select Asset Class
                </Typography>

                <FormControl fullWidth>
                    <InputLabel>Choose Asset</InputLabel>
                    <Select value={assetClass} onChange={(e) => setAssetClass(e.target.value)}>
                        <MenuItem value="business_loan">Business Loans</MenuItem>
                        {/* <MenuItem value="listed_equity"> Listed Equity and Corporation Bond</MenuItem>
                        <MenuItem value="project_finance">Project Finance</MenuItem>
                        <MenuItem value="commercial_real">Commercial Real Estate</MenuItem>
                        <MenuItem value="mortages">Mortages</MenuItem>
                        <MenuItem value="motor_vehicle">Motor Vehicle Loans</MenuItem> */}

                    </Select>
                </FormControl>

                <Button variant="contained" sx={{ mt: 3 }} fullWidth onClick={handleNext} disabled={!assetClass}>
                    Next
                </Button>
            </CardContent>
        </Card>
       </Box>
       </>
    );
};

export default AssetSelection;
