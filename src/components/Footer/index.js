import React from "react";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";

import "./styles.css";

const Footer = () => {
  return (
    <Box
      className="footer-div1"
      sx={{
        position: "sticky",
        display: "flex",
        width: "100%",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          className="footer-div1"
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            width: "100%",
          }}
        >
          <Stack sx={{ display: "flex", alignItems: "center", width: "600px" }}>
            <Box className="links">
              <Link
                sx={{
                  mr: "10px",
                  textDecoration: "none",
                  color: "var(--font-grey)",
                }}
                href="#"
              >
                {" "}
                © 2023 Airbnb, Inc.{" "}
              </Link>
              <Link
                sx={{
                  mr: "10px",
                  textDecoration: "none",
                  color: "var(--font-grey)",
                }}
                href="#"
              >
                {" "}
                · Privacy{" "}
              </Link>
              <Link
                sx={{
                  mr: "10px",
                  textDecoration: "none",
                  color: "var(--font-grey)",
                }}
                href="#"
              >
                {" "}
                · Terms{" "}
              </Link>
              <Link
                sx={{
                  mr: "10px",
                  textDecoration: "none",
                  color: "var(--font-grey)",
                }}
                href="#"
              >
                {" "}
                · Sitemap{" "}
              </Link>
              <Link
                sx={{
                  mr: "10px",
                  textDecoration: "none",
                  color: "var(--font-grey)",
                }}
                href="#"
              >
                {" "}
                · Destinations{" "}
              </Link>
            </Box>
          </Stack>

          <Stack>
            <Box
              className="footer-text"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button sx={{ color: "var(--black)" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mr: 1 }}>
                  <BsGlobe size={24} />
                </Box>
                English (CA)
              </Button>
              <Button sx={{ color: "var(--black)" }}> $CAD </Button>
              <Button sx={{ color: "var(--black)" }}>
                Support & Resources
                <Box sx={{ display: "flex", justifyContent: "center", ml: 1 }}>
                  <IoChevronUpOutline size={24} />
                </Box>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
