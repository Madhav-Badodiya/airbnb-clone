import React from "react";
import "./styles.css";
import logo from "../../assets/logo/long-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SearchAppBar from "../MobileSearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text1">Add guests</div>
        <div className="search-icon-div">
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-text">Airbnb your home</div>
        <div className="globe-div">
          <LanguageIcon />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <SearchAppBar />
    </div>
  );
};

export default Navbar;
