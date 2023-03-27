import React from "react";
import classes from "./Header.module.css"
import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";



const Header = () => {
  return (
    <AppBar  position="sticky" sx={{background:"#accbee", maxWidth:"100%" }} className={classes.header}>
      <Toolbar>
        <h4 className={classes.logoName}>Careersheets</h4>
        
        <Box display={"flex"} marginLeft="auto">
          
          <Button variant="contained" sx={{ margin :1, borderRadius: 10}} className={classes.button}>SignUp</Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
