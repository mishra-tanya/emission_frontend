import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "./data/Faqs_data";

const FAQs = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f9",
        padding: "3rem 1rem",
      }}
    >
        <Box sx={{ textAlign: 'center', marginBottom: '3rem',m:3 }}>
              <Typography
                variant="h2"
                className="about-header"
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3rem',
                    md: '3.5rem',
                  },
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  letterSpacing: '1px',
                  marginBottom: '1rem',
                }}
              >
                Frequently Asked Questions
              </Typography>
              </Box>
      <Box
        sx={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {faqData.map((faq, index) => (
          <Accordion variant='outlined' key={index} sx={{ marginBottom: "1rem", borderRadius: "8px" }}>
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon  sx={{color:"white"
              }}/>}
              sx={{
                backgroundColor: "black",
                borderRadius:'5px',
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "white",
                  color:'black'
                },
              }}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#ffffff", color: "#2c3e50" }}>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQs;
