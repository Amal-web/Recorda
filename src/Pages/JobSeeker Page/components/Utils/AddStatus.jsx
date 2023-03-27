import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DropDown from "./Dropdown";
import { Typography } from "@mui/material";
import ReusableDate from "./Date";
import ResuableButton from "./Button";
import Timer from './Timer'

const AddStatus = (props) => {
  return (
    <div>
      <Box sx={{}}>
        <Box>
          <TextField
            id="outlined-read-only-input"
            label="Round"
            placeholder="Round No"
            focused
          />
          <TextField
            id="outlined-read-only-input"
            label="Type"
            placeholder="Face To Face"
            focused
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alginItems: "flex-start",
          }}
        >
          <TextField
            id="outlined-read-only-input"
            label="Notes"
            placeholder="Please write the important Notes"
            focused
            multiline
            rows={4}
          />
          <DropDown
            sx={{
              marginTop: "10px",
            }}
            options={["Pending", "Selected", "Rejected"]}
            title={"Status"}
          />
        </Box>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          
        }}>
          <ReusableDate label="Enter the date" />
          <div
            onClick={() => {
              props.DataTransfer({ name: "Ash" });
            }}
          >
            <Timer/>
          </div>
        </Box>
            <ResuableButton content={"Add Status"} />
      </Box>
    </div>
  );
};

export default AddStatus;
