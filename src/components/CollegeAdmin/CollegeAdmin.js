import React from "react";
import CollegeAdminHome from "./CollegeAdminHome";
import classes from "./CollegeAdmin.module.css"
import MainNavigation from "./MainNavigation";

const CollegeAdmin = () => {
  return (
    <React.Fragment>
      <div className={classes.home}>
        <MainNavigation />
        <CollegeAdminHome />
      </div>
    </React.Fragment>
  );
};

export default CollegeAdmin;
