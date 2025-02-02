import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { usePost } from "../../hooks/usePost";

const SubmitConfirmation: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { assetClass, inputValues } = location.state || {};
    
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
        console.log("Submitting request data:", requestData);

        try {
            const response = await postData(apiEndpoints[assetClass], requestData);

            if (response) {
                alert("Submitted Successfully!");
                console.log("Response:", response);
                navigate("/results", { state: { resultData: response } }); 
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
                        <Typography variant="h5" gutterBottom>
                            Confirm & Submit
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 2 }}>
                            <strong>Asset Class:</strong> {assetClass ? capitalize(assetClass) : "N/A"}
                        </Typography>

                        {inputValues && Object.keys(inputValues).length > 0 ? (
                            <Box sx={{ mt: 2 }}>
                                {Object.entries(inputValues).map(([key, value]) => (
                                    <Typography key={key} variant="body2" sx={{ mt: 1 }}>
                                        <strong>{capitalize(key)}:</strong> {value ? capitalize(String(value)) : "N/A"}
                                    </Typography>
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
