import ReactGA from "react-ga4";
import { GA_MEASUREMENT_ID } from "../services/Config";

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  } else {
    console.warn("GA Measurement ID not found");
  }
};

export const trackPageview = (url: string) => {
  console.log("Tracking pageview:", url);
  ReactGA.send({ hitType: "pageview", page: url });
};

export const trackEvent = (action: string, category: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
