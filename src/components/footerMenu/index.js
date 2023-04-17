import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaSearch, FaRegHeart, FaRegUserCircle } from "react-icons/fa";

const FooterMenu = () => {
  return (
    <Box
      className="footer-div1"
      sx={{
        height: "70px",
        display: "flex",
        justifyContent: "space-evenly",
        flexGrow: 1,
      }}
    >
      <Button sx={{ display: "block" }} className="button-div">
        <FaSearch size={24} style={{ margin: "5px", color: "grey" }} />
        <Typography variant="body2" style={{ color: "grey" }}>
          Explore
        </Typography>
      </Button>
      <Button sx={{ display: "block" }} className="button-div">
        <FaRegHeart size={24} style={{ margin: "5px", color: "grey" }} />
        <Typography variant="body2" style={{ color: "grey" }}>
          Wishlist
        </Typography>
      </Button>
      <Button sx={{ display: "block" }} className="button-div">
        <FaRegUserCircle size={24} style={{ margin: "5px", color: "grey" }} />
        <Typography variant="body2" style={{ color: "grey" }}>
          Login
        </Typography>
      </Button>
    </Box>
  );
};

export default FooterMenu;
