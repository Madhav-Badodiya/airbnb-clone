import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default function SearchAppBar() {
  return (
    <Box
      className="mobile-search-bar"
      sx={{
        ".MuiPaper-root": {
          minWidth: "450px",
          borderRadius: "4rem",
          backgroundColor: "var(--white)",
        },
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="open drawer">
            <SearchIcon />
          </IconButton>
          <Search sx={{ color: "black", display: "flex" }}>
            <Typography sx={{ m: "0.3rem" }} variant="subtitle1" gutterBottom>
              Anywhere
              <Typography
                sx={{ color: "grey" }}
                variant="subtitle2"
                gutterBottom
              >
                Any week • Add guests
              </Typography>
            </Typography>
          </Search>
          <TuneIcon
            sx={{
              color: "black",
              borderRadius: "50%",
              border: "0.2px solid grey",
              padding: "0.48rem",
              cursor: "pointer",
            }}
            size="large"
            edge="end"
            aria-label="open drawer"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
