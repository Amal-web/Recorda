import React from "react";

import classes from "../CollegeAdmin/CollegeAdminHome.module.css";
import Leftbar from "./Leftbar"

import StudentCard from "./StudentCard";

const CollegeAdminHome = () => {
  return (
    <div className={classes.main}>
      <Leftbar/>
      <StudentCard />
    </div>
  );
};

export default CollegeAdminHome;
