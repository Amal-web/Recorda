import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import ShareIcon from "@mui/icons-material/Share";

const drawerWidth = 240;
const navItems = [
  "Application Status",
  "Interview Schedule",
  "Wishlist",
  "Feed",
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgColor: "#11144C" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        App_Name
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#11144C" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 2,
              width: "40%",
              display: { xs: "none", sm: "block" },
            }}
          >
            App_Logo
          </Typography>
          <Box
            sx={{
              flexGrow: 3,
              width: "60%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2%",
            }}
          >
            <Button sx={{ color: "#fff" }}>
              <div
                sx={{
                  display: "flex",
                }}
              >
                <ShareIcon />
                <Typography variant="subtitle1">Refer</Typography>
              </div>
            </Button>
            <Button
              sx={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Typography variant="subtitle1">My Profile</Typography>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <div
                sx={{
                  display: "flex",
                }}
              >
                <LogoutIcon />
                <Typography variant="subtitle1">Logout</Typography>
              </div>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
