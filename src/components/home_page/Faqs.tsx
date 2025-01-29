import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "./data/Faqs_data";
import StyleType from "../common/StyleType";

const FAQs = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f9",
        padding: "3rem 1rem",
      }}
    >
       <StyleType title="Frequently Asked Questions" />
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
                borderRadius:'8px',
                backgroundColor: "white",
                "&:hover": {
                  color:'grey'
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
