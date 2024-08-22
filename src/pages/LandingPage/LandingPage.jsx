import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppAppBar from "../../components/LandingPage/AppAppBar";
import Hero from "../../components/LandingPage/Hero";
import LogoCollection from "../../components/LandingPage/LogoCollection";
import Highlights from "../../components/LandingPage/Highlights";
import Pricing from "../../components/LandingPage/Pricing";
import Features from "../../components/LandingPage/Features";
import Testimonials from "../../components/LandingPage/Testimonials";
import FAQ from "../../components/LandingPage/FAQ";
import Footer from "../../components/LandingPage/Footer";

export default function LandingPage() {
  const [mode, setMode] = React.useState("light");
  
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
