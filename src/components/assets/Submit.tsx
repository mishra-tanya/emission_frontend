import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box, Grid } from "@mui/material";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { usePost } from "../../hooks/usePost";

const SubmitConfirmation: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { assetClass, inputValues } = location.state || {};
    const BASENAME = import.meta.env.VITE_BASENAME;
    
    const capitalize = (str: string) =>
        str.replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase());

    const apiEndpoints: { [key: string]: string } = {
        "motor_vehicle": "/add-motor/",
        "mortages": "/add-mortages/",
        "commercial_real": "/add-commercial-estate/",
        "project_finance": "/add-project-finance/",
        "listed_equity": "/add-listed-equity/",
        "business_loan": "/add-business-loan/",
    };

    const requestData = {
        asset_class: capitalize(assetClass),
        emission_factor: inputValues,
        data_quality_score: 1
    };

    const { postData, isLoading } = usePost<{ message: string }>();

    const handleSubmit = async () => {
        if (!assetClass || !apiEndpoints[assetClass]) {
            alert("Invalid asset class selected.");
            return;
        }
        // console.log("Submitting request data:", requestData);

        try {
            const response = await postData(apiEndpoints[assetClass], requestData);

            if (response) {
                alert("Submitted Successfully!");
                // console.log("Response:", response);
                navigate(`${BASENAME}/results`, { state: { resultData: response } }); 
            } else {
                alert("Submission failed.");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("An error occurred while submitting data.");
        }
    };

    return (
        <>
            <Navbar />
            <Box sx={{ m: 2 }}>
                <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 3, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
                            Confirm & Submit
                        </Typography>

                        <Typography variant="h5" sx={{ mt: 2 ,textAlign:'center',p:1,bgcolor:'#001836',color:'white'}}>
                            <strong>Asset Class: </strong>  
                            <Typography>{assetClass ? capitalize(assetClass) : "N/A"}</Typography>
                        </Typography>

                        {inputValues && Object.keys(inputValues).length > 0 ? (
                            <Box sx={{ mt: 2 }}>
                                {Object.entries(inputValues).map(([key, value]) => (
                                    <Grid container key={key} sx={{ mt: 1 }}>
                                        <Grid item xs={6}>
                                            <Box sx={{ backgroundColor: "#055bab", color: "white", padding: "0 5px",p:1, textAlign: "left" }}>
                                                <Typography variant="body2">{capitalize(key)}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box sx={{ backgroundColor: "#a8ceff", padding: "0 5px",p:1, textAlign: "left", }}>
                                                <Typography variant="body2" sx={{mx:1}}>{value ? capitalize(String(value)) : "N/A"}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Box>
                        ) : (
                            <Typography variant="body2" sx={{ mt: 2, color: "error.main" }}>
                                No details provided.
                            </Typography>
                        )}

                        <Box display="flex" justifyContent="space-between" mt={3}>
                            <Button variant="outlined" onClick={() => navigate(-1)}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleSubmit}
                                disabled={isLoading}
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Footer />
        </>
    );
};

export default SubmitConfirmation;
