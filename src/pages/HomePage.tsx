import { Box } from "@mui/material";
import Home from "../components/home_page/Home";
import Services from "../components/home_page/Services";
import VerticalLinearStepper from "../components/home_page/Step";

export default function HomePage() {
    
  return (
    <>
       <Box sx={{backgroundColor:'black',py:5}}>
        <Home/>
        </Box>
        {/* <About/> */}
        <Services/>
        <VerticalLinearStepper/>
        {/* <FAQs/> */}
        {/* <Contact/> */}
    </>
  )
}
