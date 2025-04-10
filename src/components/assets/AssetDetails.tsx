import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box, MenuItem, Grid } from "@mui/material";
import { assetFields } from "./data/AssetFieldData";
import { selectOptions } from "./data/SelectOption";

const AssetDetails: React.FC = () => {
    const { assetClass } = useParams<{ assetClass: string }>();
    const navigate = useNavigate();
    const BASENAME = import.meta.env.VITE_BASENAME;

    const fields = assetFields[assetClass || ""] || [];

    const [inputValues, setInputValues] = useState<Record<string, string>>(
        Object.fromEntries(fields.map(field => [field.key, ""]))
    );

    const handleInputChange = (key: string, value: string) => {
        const field = fields.find(f => f.key === key);
        console.log(field)
        if (field?.type === "number") {
            const numValue = Number(value);
            if (value !== "" && numValue < 0) {
                return;
            }
        }
        setInputValues(prev => ({ ...prev, [key]: value,  }));
        
    };

    const handleNext = () => {
        navigate(`${BASENAME}/submit`, { state: { assetClass, inputValues } });
    };
    const inputStyles = {
        '& input[type=number]': {
          MozAppearance: 'textfield',
          WebkitAppearance: 'none',
          appearance: 'none',
          '&::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '&::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        }
      };
      console.log(inputValues)

    return (
        <>
            <Box sx={{ m: 4 }}>
                <Typography
                    textAlign="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5rem', sm: '2.125rem', md: '3rem' }
                    }}
                >
                    Enter {assetClass?.replace("_", " ").toUpperCase()} Asset Class Details
                </Typography>

                <Typography
                textAlign="center"
                sx={{
                    color:"red",
                    fontSize: { xs: '8px', sm: '11px', md: '11px' }
                }}
                >
                   Marked with * are Mandatory Fields
                </Typography>

                <Card sx={{ margin: "auto", px: 2, mt: 5, boxShadow: 3 }}>
                    <CardContent>
                        

                        <br />

                        <Grid container spacing={2}  >
    {fields.map((field, index) => (
        field.heading ? (
            <Grid item xs={12} key={`heading-${index}`} sx={{mt:4, textDecoration:"underline"}}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {field.heading}:
                </Typography>
            </Grid>
        ) : (
            <Grid item xs={12} sm={6} key={field.key}>
                {field.type === "select" ? (
                    <TextField
                        select
                        fullWidth
                        label={field.label}
                        value={inputValues[field.key]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        variant="outlined"
                    >
                        <MenuItem value="">Select</MenuItem>
                        {selectOptions[field.key]?.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                ) : (
                    <TextField
                        fullWidth
                        label={field.label}
                        type={field.type === "number" ? "number" : "text"}
                        value={inputValues[field.key]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        variant="outlined"
                        sx={inputStyles}
                        inputProps={{
                            min: field.min ?? 0,
                            onWheel: (e) => e.target instanceof HTMLElement && e.target.blur(), 
                          }}
                    />
                )}
            </Grid>
        )
    ))}
</Grid>



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
        </>
    );
};

export default AssetDetails;
