import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import EducationForm from "../Add/EducationForm";

import { IconButton } from "@mui/material";

import StatusForm from "../Add/StatusForm";
import Skillform from "../Add/Skillform";

import EditIcon from "@mui/icons-material/Edit";

export default function Edit(props) {
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

  return (
    <div>
      <IconButton onClick={handleClickOpen} >
          <EditIcon  />
        </IconButton>

      <Dialog open={open} onClose={handleClose}>
        {education && <EducationForm onClose={handleClose} />}
        {status && <StatusForm onClose={handleClose} />}
        {skills && <Skillform onClose={handleClose} />}

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
