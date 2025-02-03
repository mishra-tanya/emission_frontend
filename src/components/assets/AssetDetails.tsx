import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box, MenuItem } from "@mui/material";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const AssetDetails: React.FC = () => {
    const { assetClass } = useParams<{ assetClass: string }>();
    const navigate = useNavigate();

    const assetFields: Record<string, { label: string; key: string, type?: string,status?:string }[]> = {
        business_loan: [
            { label: "Borrower Name", key: "borrower_name" },
            { label: "Outstanding Loan Amount", key: "outstanding_loan", type: "number" },
            { label: "Borrower Industry Sector", key: "borrower_industry_sector" },
            { label: "Borrower Total Value", key: "borrower_total_value", type: "number" },
            { label: "Borrower Revenue", key: "borrower_revenue", type: "number" },
            // select
            { label: "Borrower Region", key: "borrower_region", type: "select" },
            // optional
            { label: "Reported Emissions (Optional)", key: "reported_emissions", type: "number",status:"optional" },
            { label: "Physical Data Inactivity (Optional)", key: "physical_activity_data",  type: "number",status:"optional" },
        ],
        listed_equity: [
            { label: "Company Name", key: "company_name" },
            { label: "Outstanding Investment Amount", key: "outstanding_loan", type: "number" },
            { label: "Enterprise Value Including Cash", key: "evic", type: "number" },
            { label: "Geography", key: "geography" },
            // optional
            { label: "Reported Emissions (Optional)", key: "reported_emissions",  type: "number",status:"optional" },
            { label: "Revenue  (Optional)", key: "revenue", type: "number" ,status:"optional"},
            // select
            { label: "Sector", key: "sector", type: "select" },
        ],
        project_finance: [
            { label: "Project Name", key: "project_name" },
            { label: "Outstanding Loan", key: "outstanding_loan",type:'number'  },
            { label: "Total Project Cost", key: "total_project_cost" ,type:'number' },
            { label: "Project Phase", key: "project_phase" },
            // optional
            { label: "Reported Emissions (Optional)", key: "reported_emissions",type:'number' ,status:"optional"},
            { label: "Activity Data (Optional)", key: "activity_data" ,type:'number',status:"optional"},
            { label: "Emission Factor (Optional)", key: "emission_factor" ,type:'number',status:"optional"},
        ],
        commercial_real: [
            { label: "Building Name", key: "building_name" },
            { label: "Outstanding Loan Amount", key: "outstanding_loan" ,type:'number' },
            { label: "Total Property Value", key: "total_property_value" ,type:'number' },
            { label: "Floor Area", key: "floor_area",type:'number' },
            // optional
            { label: "Reported Energy Computation (Optional)", key: "energy_consumption",type:'number',status:"optional" },
            { label: "Emission Factor (Optional)", key: "emission_factor",type:'number',status:"optional"},
        ],
        mortages: [
            { label: "Project Name", key: "property_name" },
            { label: "Outstanding Loan Amount", key: "outstanding_loan" ,type:'number' },
            { label: "Total Property Value", key: "total_property_value" ,type:'number' },
            { label: "Floor Area", key: "floor_area",type:'number' },
            // select field
            { label: "Property Type", key: "property_type", },
            // optional
            { label: "Reported Energy Consumption (Optional)", key: "energy_consumption" ,type:'number',status:"optional"},
            { label: "Emission Factor (Optional)", key: "emission_factor" ,type:'number',status:"optional"},
        ],
        motor_vehicle: [
            { label: "Vehicle Name", key: "vehicle_name" },
            { label: "Outstanding Loan Amount", key: "outstanding_loan", type: "number" },
            { label: "Total Vehicle Cost", key: "total_vehicle_cost", type: "number" },
            // select
            { label: "Vehicle Type", key: "vehicle_type", type: "select" },
            // optional
            { label: "Emission Factor for Fuel (Optional)", key: "emission_factor", type: "number",status:"optional" },
            { label: "Annual Fuel Consumptio (Optional)n", key: "annual_fuel_consumption", type: "number",status:"optional" },

        ]
    };

    const selectOptions: Record<string, string[]> = {
        borrower_region: ["North America", "Europe", "Asia"],
        sector: ["Energy", "Manufacturing", "Retail"],
        vehicle_type: ["Petrol", "Diesel", "Hybrid", "Electric"]
    };

    const fields = assetFields[assetClass || ""] || [];

    const [inputValues, setInputValues] = useState<Record<string, string>>(
        Object.fromEntries(fields.map(field => [field.key, ""]))
    );

    const handleInputChange = (key: string, value: string) => {
        setInputValues(prev => ({ ...prev, [key]: value }));
    };

    const handleNext = () => {
        navigate("/submit", { state: { assetClass, inputValues } });
    };

    return (
        <>
            <Navbar />
          <Box sx={{m:2}}>

          <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 3, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h5" textAlign='center' gutterBottom sx={{fontWeight:'bold'}}>
                        Enter {assetClass?.replace("_", " ").toUpperCase()} Details
                    </Typography>

                    {fields.length > 0 ? (
                        
                        fields.map(field => (
                            field.type === "select" ? (
                                <TextField
                                    select
                                    key={field.key}
                                    fullWidth
                                    label={field.label}
                                    value={inputValues[field.key]}
                                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    {selectOptions[field.key]?.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </TextField>
                            ) : (
                                <TextField
                                    key={field.key}
                                    fullWidth
                                    label={field.label}
                                    type={field.type === "number" ? "number" : "text"}
                                    value={inputValues[field.key]}
                                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                />
                            )
                        ))
                    ) : (
                        <Typography color="error">Invalid Asset Class</Typography>
                    )}

                    <Box display="flex" justifyContent="space-between" mt={3}>
                        <Button variant="outlined" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                        <Button 
                            variant="contained" 
                            onClick={handleNext} 
                            disabled={fields.some(field => field.status !== "optional" && !inputValues[field.key])}
                        >
                            Next
                        </Button>
                    </Box>
                </CardContent>
            </Card>
          </Box>
            <Footer />
        </>
    );
};

export default AssetDetails;
