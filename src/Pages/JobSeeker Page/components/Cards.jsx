import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Popup from './Utils/Popup';
import AddApplication from './AddApplication'

const Cards = () => {
  


  return (
    <>
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
            <Box>
              <Popup
                content={<EditIcon />}
                body={<AddApplication />}
                title="Edit Post"
              />
              {/* <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F94A29",
                  "&:hover": {
                    backgroundColor: "#CD0404",
                  },
                }}
                
              >
                <EditIcon />
              </Button> */}
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
              <Typography variant="subtitle1">Lastly Updated: 12/12/2023</Typography>
              <Typography variant="subtitle1">Origin: Linkedin</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px",
              height: "20%",
            }}
          >
            <Typography variant="h5">Round:1 Online Test Selected</Typography>
            <Typography variant="subtitle1">
              Click on the View to See more...
            </Typography>
          </Box>
          <Box
            sx={{
              height: "25%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E93B81",

                "&:hover": {
                  backgroundColor: "#E93B81",
                },
              }}
            >
              <VisibilityIcon sx={{ padding: "0 5px" }} />
              View
            </Button>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#49FF00",
                padding: "8px",
                borderRadius: "7px",
              }}
            >
              Status: Selected
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Box
        sx={{
          margin: "10px 0",
          minHeight: "40vh",
          width: "80%",
          backgroundColor: "#2b3467",
          borderRadius: "7px",
          boxShadow: "5px 5px 10px #2C3333",
          border: "5px solid #F9D923",
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
                <ApartmentIcon /> Inno-Valley
              </Typography>
              <Typography variant="subtitle1">
                <LocationOnIcon />
                Coimbatore
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F94A29",
                  "&:hover": {
                    backgroundColor: "#CD0404",
                  },
                }}
              >
                <EditIcon />
              </Button>
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
              height: "20%",
            }}
          >
            <Typography variant="h5">Round:1 Online Test Selected</Typography>
            <Typography variant="subtitle1">
              Click on the View to See more...
            </Typography>
          </Box>
          <Box
            sx={{
              height: "25%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E93B81",

                "&:hover": {
                  backgroundColor: "#E93B81",
                },
              }}
            >
              <VisibilityIcon sx={{ padding: "0 5px" }} />
              View
            </Button>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#F9D923",
                padding: "8px",
                borderRadius: "7px",
              }}
            >
              Status: Pending
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          margin: "10px 0",
          minHeight:'40vh',
          width: "80%",
          backgroundColor: "#2b3467",
          borderRadius: "7px",
          boxShadow: "5px 5px 10px #2C3333",
          border: "5px solid #FF6464",
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
                <ApartmentIcon /> Hexaware Technologies
              </Typography>
              <Typography variant="subtitle1">
                <LocationOnIcon />
                Coimbatore
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F94A29",
                  "&:hover": {
                    backgroundColor: "#CD0404",
                  },
                }}
              >
                <EditIcon />
              </Button>
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
              height: "20%",
            }}
          >
            <Typography variant="h5">Round:1 Online Test Selected</Typography>
            <Typography variant="subtitle1">
              Click on the View to See more...
            </Typography>
          </Box>
          <Box
            sx={{
              height: "25%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
              marginBottom: "5px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E93B81",

                "&:hover": {
                  backgroundColor: "#E93B81",
                },
              }}
            >
              <VisibilityIcon sx={{ padding: "0 5px" }} />
              View
            </Button>
            <Typography
              variant="subtitle1"
              sx={{
                backgroundColor: "#FF6464",
                padding: "8px",
                borderRadius: "7px",
              }}
            >
              Status: Rejected
            </Typography>
          </Box>
        </Box> 
      </Box>*/}
      {/* <Outlet/> */}
    </>
  );
};

export default Cards;
