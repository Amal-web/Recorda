import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import EducationForm from "./EducationForm";

import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StatusForm from "./StatusForm";
import Skillform from "./Skillform";

export default function Add(props) {
  const [open, setOpen] = React.useState(false);

  const [education, setEducation] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [skills, setSkills] = React.useState(false);

  const handleClickOpen = (event) => {
    setOpen(true);
    console.log(props.Card);
    if (props.Card === "education") {
      setEducation(true);
    }
    if (props.Card === "status") {
      setStatus(true);
    }
    if (props.Card === "skills") {
      setSkills(true);
    }

    
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(education, "@value");

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        {education && <EducationForm onClose={handleClose} />}
        {status && <StatusForm onClose={handleClose} />}
        {skills && <Skillform  onClose={handleClose}/>}

        <Button
          sx={{ marginLeft: "auto", marginRight: "5em", bottom: "3.2em" }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Dialog>
    </div>
  );
}
