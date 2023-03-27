import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {

    const {title,options,variant}=props

  const [status, setStatus] = React.useState("Pending");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "8px " }}>
      <FormControl fullWidth variant={variant}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "white",
          }}
        >
          {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          value={status}
          onChange={handleChange}
          
          
        >
          {options.map((data) => {
            return (
              <MenuItem value={data} key={data}>
                {data}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
