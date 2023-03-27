import React from "react";
import classes from "./Main.module.css";
import { Button } from "@mui/material";
// import { useCookies } from "react-cookie";
const Main = () => {
   
   
  return (
    <div id="main" className={classes.main}>
      
     

      <main className={classes.container}>

        
        <div className={classes.quote}>
          <h1>Track Your Application </h1>
          <p>
            "One important key to success is self-confidence. An important key
            to self-confidence is preparation."
          </p>
          <Button
            variant="contained"
            size="large"
            sx={{ margin: 1, borderRadius: 10, width: "8em", height: "3em" }}
          >
            Login{" "}
          </Button>
        </div>
        
        <div className={classes.image}>
          <img
            src="https://images.ctfassets.net/pdf29us7flmy/4WkJUOsDpXs8FuziSMnP6T/82cb8b0cdf309bf3851621768011c1c8/Career_Guide_Photos-2160x1215-GettyImages-1166177942.jpg?w=720&q=100&fm=jpg"
            alt="JOB INTERVIEW IMG"
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
