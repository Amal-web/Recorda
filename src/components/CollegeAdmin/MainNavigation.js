import * as React from "react";

import Sideview from "./sideview";

import classes from "./MainNavigation.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";

import LogoutIcon from "@mui/icons-material/Logout";

function MainNavigation() {
  // const [leftBar, setLefttbar] = React.useState(true);

  // const handleOpenNavMenu = (event) => {
  //   setLefttbar((prevState) => !prevState);

  // };

  return (
    <React.Fragment>
      <div className={classes.navbar}>
        <AppBar
          position="static"
          sx={{ background: "#12a4d9", maxWidth: "100%" }}
          className={classes.bar}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ maxWidth: "100%" }}>
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 500,
                  fontSize: "1.75rem",
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "1.5em",
                }}
              >
                Careersheets
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none", width: "100%" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <Sideview />
                </IconButton>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "flex", justifyContent: "end" },
                }}
              >
                <Box sx={{ fontSize:"1rem" }}>
                  <Button sx={{ color: "white" }}>
                    <ShareIcon />
                  </Button>
                  <p className={classes.iconName}>SHARE</p>
                </Box>
                <Box sx={{ marginRight: "1.5em" ,fontSize:"1rem" }}>
                  <Button sx={{ color: "white" }}>
                    <LogoutIcon />
                  </Button>
                  <p className={classes.iconName}>LOGOUT</p>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton sx={{ p: 0, marginRight: "1em" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mitchellcc.edu/sites/default/files/styles/interior-slider/public/Office%20Administration.jpg?itok=_RY3_3Cb"
                  />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
export default MainNavigation;
