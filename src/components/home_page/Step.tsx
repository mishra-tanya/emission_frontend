import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { steps } from "./data/Steps_data";
import StyleType from "../common/StyleType";

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
    <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212", 
          padding: "20px",
        }}
      >
      <StyleType  sx={{color:'white'}} title="Steps For Computation" />

      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#121212", 
          padding: "20px",
        }}
      >
        <Box
          sx={{
            maxWidth: "450px",
            backgroundColor: "#1E1E1E",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
          marginBottom:'30px'

          }}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption" sx={{ color: "#BDBDBD" }}>
                        Last step
                      </Typography>
                    ) : null
                  }
                >
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography sx={{ fontSize: "18px", color: "#BDBDBD" }}>
                    {step.description}
                  </Typography>
                  <Box sx={{ mb: 2, mt: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        mt: 1,
                        mr: 1,
                        backgroundColor: "#000",
                        color: "#FFF",
                        fontSize: "16px",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                      }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{
                        mt: 1,
                        mr: 1,
                        color: "#FFFFFF",
                        border: "1px solid #FFF",
                        fontSize: "16px",
                        padding: "8px 18px",
                        borderRadius: "8px",
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                      }}
                    >
                      Back
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper
              square
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: "#1E1E1E",
                textAlign: "center",
                borderRadius: "12px",
              }}
            >
              <Typography sx={{ color: "#BDBDBD", fontSize: "18px" }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button
                onClick={handleReset}
                sx={{
                  mt: 2,
                  backgroundColor: "#000",
                  color: "#FFF",
                  fontSize: "16px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Box>
    </>
  );
}
