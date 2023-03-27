import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import classes from "./UserSelect.module.css";

const UserSelect = () => {
  return (
    <div className={classes.contianer}>
      <div className={classes.logo}>
        <img
          src="https://api.freelogodesign.org/assets/thumb/logo/3756749_400.png?t=637674888290000000"
          alt="app-logo"
        />
        <h2>Careersheets</h2>
      </div>
      <div className={classes.title}>
        <h1>Choose  your role </h1>
      </div>
    
      <div className={classes.users}>
        <div className={classes.userCards}>
          <Card sx={{ maxWidth: 175,maxHeight:250, padding: "1em", marginBottom: "1em",borderRadius:"40px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://static.vecteezy.com/system/resources/thumbnails/011/280/129/small/student-holding-degree-flat-long-shadow-icon-vector.jpg"
                alt="job seeker"
                sx={{marginBottom:"1em"}}
                
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center",fontWeight:"bold",fontSize:"1.25rem"}}
                >
                  Job Seeker
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.userCards}>
          <Card sx={{ maxWidth: 175,maxHeight:250, padding: "1em", marginBottom: "1em",borderRadius:"40px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRe34P0nKF0Euaz4DLlj3WN4rcAuZGHnUicHoa8B2V5AqgEGfK3eX9ZekUcX3e_jRlm8&usqp=CAU"
                alt="collegeAdmin"
                sx={{marginBottom:"1em"}}
              />
              <CardContent sx={{paddingBottom:"2em"}}>
                <Typography
                
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center",fontWeight:"bold",fontSize:"1.25rem" }}
                >
                  College Admin
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserSelect;
