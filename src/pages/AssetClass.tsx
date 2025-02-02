import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AssetSelection from "../components/assets/AssetSelection";

const AssetClass: React.FC = () => {
  

    return (
        <>
            <Navbar />
           <AssetSelection/>
            <Footer/>
        </>
    );
};

export default AssetClass;
