import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import AppsIcon from "@mui/icons-material/Apps";

const NavigationDrawer = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDivider-root": {
          display: "none",
        },
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "transparent",
          border: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar disableGutters sx={{}} />
      <Divider />
      <List>
        <ListItem
          key={"MenuItemModule"}
          component={"a"}
          href={"/"}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <ViewModuleIcon />
            </ListItemIcon>
            <ListItemText primary={"Modules"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"MenuItemProvider"}
          component={"a"}
          href={"/providers"}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary={"Providers"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default NavigationDrawer;
