import * as React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//////////////



import Autocomplete from "@mui/material/Autocomplete";

const data = [
  {
    collegeName: "Sri Ranganathar Institute of Engineering and Technology ",
    id: "1",
  },
  {
    collegeName: "PSG College of Arts and Science, Coimbatore",
    id: "2",
  },
  {
    collegeName: "Coimbatore Institute of Technology",
    id: "3",
  },
  {
    collegeName: "Coimbatore Institute of Technology (CIT), Coimbatore",
    id: "3",
  },
  {
    collegeName: "Karpagam College of Engineering, Coimbatore",
    id: "4",
  },
  {
    collegeName:
      "Sri Krishna College of Engineering & Technology (SKCET), Coimbatore",
    id: "5",
  },
  {
    collegeName: "SNS College of Technology, Coimbatore",
    id: "6",
  },
  {
    collegeName: "Jansons Institute of Technology, Coimbatore",
    id: "7",
  },
  {
    collegeName: "Kumaraguru College of Technology, Coimbatore",
    id: "8",
  },
  {
    collegeName:
      " Hindusthan College of Engineering and Technology (HCET), Coimbatore",

    id: "9",
  },
  {
    collegeName: "Nehru Institute of Engineering and Technology, Coimbatore",
    id: "10",
  },
];


const EducationForm = (props) => {
  const [inputs, setInputs] = React.useState({
    degree: "",
    graduated: "",
    graduationYear: "",
  });
  const [collegeName, setCollegeName] = React.useState("");

  const collegeNameHandler = (event, values) => {
    setCollegeName(values);
  };

  const inputChangeHandler = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.name, "name");
    console.log(event.target.value, "value");
  };

  const educationFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(collegeName);
    console.log(inputs);
    setInputs({
      degree: "",
      graduated: "",
      graduationYear: "",
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={educationFormSubmitHandler}>
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              name="collegeName"
              options={data}
              getOptionLabel={(option) => option.collegeName}
              onChange={collegeNameHandler}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="College"
                  variant="standard"
                  name="collegeName"
                />
              )}
            />

            <TextField
              name="degree"
              margin="dense"
              id="name"
              label="Degree"
              fullWidth
              variant="standard"
              onChange={inputChangeHandler}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Graduated
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="graduated"
                onChange={inputChangeHandler}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="NO" />
              </RadioGroup>
            </FormControl>
            <TextField
              name="graduationYear"
              margin="dense"
              id="name"
              label="Graduation year"
              type="text"
              fullWidth
              variant="standard"
              sx={{ width: "35.5em" }}
              onChange={inputChangeHandler}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} type="submit">
            Add
          </Button>
        </DialogActions>
      </form>
    </React.Fragment>
  );
};

export default EducationForm;
