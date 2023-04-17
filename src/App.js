import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import LocationCards from "./components/LocationCards";
import { Box, Container } from "@mui/material";
import Footer from "./components/Footer";
import FooterMenu from "./components/footerMenu";

const App = () => {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Filter />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 100,
          overflowY: "scroll",
        }}
      >
        <Container maxWidth="xl" sx={{ mb: 3 }}>
          <LocationCards />
        </Container>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <FooterMenu />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Footer />
      </Box>
    </div>
  );
};

export default App;
