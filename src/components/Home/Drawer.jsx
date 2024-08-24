import { Link } from "react-router-dom";
import { Drawer as MuiDrawer, Toolbar, Divider, List, IconButton, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon, Home as HomeIcon, AccountBalance as AccountBalanceIcon, Settings as SettingsIcon, MonitorHeart as MonitorHeartIcon, BarChart as BarChartIcon, Help as HelpIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function CustomDrawer({ open, toggleDrawer }) {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end", px: [1] }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <ListItemButton component={Link} to="/home/dashboard">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={Link} to="/home/institution">
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          <ListItemText primary="Institution" />
        </ListItemButton>

        <ListItemButton component={Link} to="/home/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton component={Link} to="/home/monitor">
          <ListItemIcon><MonitorHeartIcon /></ListItemIcon>
          <ListItemText primary="Monitor" />
        </ListItemButton>

        <ListItemButton component={Link} to="/home/analytics">
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>

        <ListItemButton component={Link} to="/home/support">
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
