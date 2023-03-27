import React from "react";
import classes from "./ProfileCard.module.css";
import { Box} from "@mui/material";

import Add from "../ProfileEdit/Add/Add";
import Edit from "../ProfileEdit/Edit/Edit";

const ProfileCard = (props) => {
  return (
    <div className={classes.profileCard}>
      <Box display="flex" sx={{ padding: "0.5em" }}>
        <Box sx={{marginLeft:"auto",display:"flex"}}>
          <Edit Card={props.CardName} />
          <Add Card={props.CardName} />
        </Box>
      </Box>
      <div className={classes.cardContent}>{props.children}</div>
    </div>
  );
};

export default ProfileCard;
