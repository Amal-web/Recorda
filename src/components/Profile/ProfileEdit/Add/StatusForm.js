import React, {useState} from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const StatusForm = (props) => {
  const [inputs, setInputs] = useState();
  const statusFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={statusFormSubmitHandler}>
        <DialogTitle>Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              name="Status"
              autoFocus
              margin="dense"
              id="name"
              label="Eg.Working"
              fullWidth
              variant="standard"
              sx={{ width: "35.5em" }}
              onChange={inputChangeHandler}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} type="submit">Change</Button>
        </DialogActions>
      </form>
    </div>
  );
};

export default StatusForm;
