import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Cards = () => {
    
  let d = new Date();
  const [time, settime] = useState({ hour: d.getHours() ,min: d.getMinutes()});

  setInterval(() => {
    console.log(time);
    settime({ hour: d.getHours(), min: d.getMinutes()});
  }, 1000*60);
  return (
    <div>
      <Box
        sx={{
          margin: "10px 0",
          minHeight: "40vh",
          width: "80%",
          backgroundColor: "#2b3467",
          borderRadius: "7px",
          boxShadow: "5px 5px 10px #2C3333",
          border: "5px solid #49FF00",
        }}
      >
        <Box
          sx={{
            padding: "3%",
            height: "100%",
            color: "white",
          }}
        >
          <Box
            sx={{
              height: "25%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6">
                <ApartmentIcon /> I-Bacus-Tech
              </Typography>
              <Typography variant="subtitle1">
                <LocationOnIcon />
                Coimbatore
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: "30%",
              padding: "0 10px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography variant="subtitle1">
                Designation: NodeJS Developer
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle1">Application Link:</Typography>
                <a
                  className="linktag"
                  rel="noopener noreferrer"
                  href="https://google.com"
                  target="_blank"
                >
                  <LanguageIcon />
                </a>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle1">Date: 12/12/2023</Typography>
              <Typography variant="subtitle1">Origin: Linkedin</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px",
              height: "30%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bolder",
                }}
              >
                Round:1 Online Test
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: "80%",
                  backgroundColor: "#11144C",
                  border: "5px Solid #49FF00",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    component="h1"
                    variant="h5"
                    sx={{ fontWeight: "bolder" }}
                  >
                    Interview Date
                  </Typography>

                  <Typography
                    component="h1"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    10 March
                    <br /> 2023
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    10:00 AM
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Typography variant="h6">Time Left</Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#DC0000",
                        fontWeight: "bolder",
                      }}
                    >
                      {`${time.hour} : ${time.min} `}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Cards;
