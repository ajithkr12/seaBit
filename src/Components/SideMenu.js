import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../Assets/Images/Logo.png";
import {Color} from '../Assets/Constants/Color'

const SideMenu = ({ menuSeleted, drawerWidth, menuItem, onChange }) => {
  //   const drawerWidth = "20%";
  return (
    <Drawer
      elevation={0}
      variant="permanent"
      sx={{
        width: "240px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: "240px", boxSizing: "border-box", borderWidth: 0,boxShadow: "1px 0 1px 0px #f0f8ff" },
      }}
    >

      <Box
        style={{
          display:"flex",
          justifyContent:'center',
          alignItems:"center",
          width: "240px",
          height:"64px",

        }}
      >
      <img alt="Logo" src={logo} style={{width:"110px"}}/>
        </Box>
      <Box
        sx={{ overflow: "auto" }}
        style={{
          marginTop: "102px",
        }}
      >
        <List>
          {menuItem.map((item, index) => (
            <ListItem
              key={index}
              style={{ marginTop: "25px", height: "45px" }}
              disablePadding
            >
              <Box
                sx={{
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
                style={{
                  backgroundColor:
                    item.value === menuSeleted ? Color.bg_primary : Color.bg_secondary,
                  marginLeft: "30px",
                  width: "300px",
                }}
              >
                <ListItemButton onClick={() => onChange(item.value)}>
                  <ListItemIcon>
                    <Box
                      style={{
                        paddingRight: "10px",
                      }}
                      component="img"
                      sx={{
                        height: "22.31px",
                        width: "22.16px",
                      }}
                      alt="Logo"
                      src={item.image}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          marginTop: "8px",
                          fontWeight: 700,
                          fontSize: "14px",
                        }}
                        variant="h6"
                        display="block"
                        gutterBottom
                      >
                        {item.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
