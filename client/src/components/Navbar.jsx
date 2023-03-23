import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownCircleOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import ProfileImage from "assets/profile.jpg";
import { useTheme } from "@emotion/react";
import { AppBar } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return <AppBar sx={{ position: "static" }}></AppBar>;
};

export default Navbar;
