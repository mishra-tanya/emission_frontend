import { Box } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Home from "../components/home_page/Home";
import About from "../components/home_page/About";
import Services from "../components/home_page/Services";
import Footer from "../components/common/Footer";
import Contact from "../components/home_page/Contact";
import FAQs from "../components/home_page/Faqs";
import VerticalLinearStepper from "../components/home_page/Step";

export default function HomePage() {
    
  return (
    <>
       <Box sx={{backgroundColor:'black',}}>
        <Navbar/>
        <Home/>
        </Box>
        <About/>
        <Services/>
        <VerticalLinearStepper/>
        <FAQs/>
        <Contact/>
        <Footer/>
    </>
  )
}
