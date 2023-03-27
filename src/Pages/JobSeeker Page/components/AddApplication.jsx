import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DropDown from "./Utils/Dropdown";
import { Typography } from "@mui/material";
import ReusableDate from "./Utils/Date";
import ResuableButton from "./Utils/Button";
import ResuableStatus from "./Utils/AddStatus";

export default function FormPropsTextFields() {
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const [status, setStatus] = React.useState([]);
  const [statusValue, setStatusValue] = React.useState([]);
  const val = [];

  const DataTransfer = (data) => {
    setButtonDisable(false);
    return val.push(data);
  };

  const handleInputField = () => {
    if (!buttonDisable) {
      setStatus([
        ...status,
        <ResuableStatus DataTransfer={DataTransfer} key={Date.now()} />,
      ]);
    }
    return setButtonDisable(true);
  };

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "white",
        minHeight: "50vh",
        width: "100%",
        padding: "25px",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <Box>
          <Box>
            <TextField
              required
              id="outlined-required"
              label="Company Name"
              placeholder="Google"
              autoFocus
              focused
            />
            <TextField
              id="outlined-disabled"
              label="Designation"
              placeholder="Software Developer"
              focused
            />
          </Box>
          <Box>
            <TextField
              id="outlined-read-only-input"
              label="Where Did You Apply"
              placeholder="Linkedin"
              focused
            />
            <TextField
              id="outlined-number"
              label="Job Link "
              type="text"
              placeholder="https://google.com"
              focused
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            id="outlined-number"
            label="Status "
            type="text"
            value="Pending"
            disabled
            helperText="Add Status to change the text"
          />
          <Box sx={{ marginTop: "-6px" }}>
            <ReusableDate label="Applied Date" />
          </Box>
        </Box>
      </Box>
      
      <Typography variant="h6">Application Status</Typography>
      <Box sx={{ display: "inline-block" }} onClick={handleInputField}>
        <ResuableButton
          variant="contained"
          content="Add Stages"
          buttonType={buttonDisable}
        />
      </Box>
      <Box>{status.map((x) => x)}</Box>
    </Box>
  );
}
