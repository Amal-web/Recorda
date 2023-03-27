import React from "react";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import { Box } from "@mui/material";

const JobseekerPage = () => {
  return (
    <div className="components">
      <Navbar className="Navbar" />
      <Box className="UserBody">
        <Box>
          <LeftSideBar />

        </Box>
        <RightSideBar />
      </Box>
    </div>
  );
};

export default JobseekerPage;
