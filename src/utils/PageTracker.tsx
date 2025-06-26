// PageTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageview } from "../utils/Analytics";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initGA(); 
  }, []);

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default PageTracker;
