import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import {Stack,Avatar} from '@mui/material/';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {Color} from '../Assets/Constants/Color'

const NavBar = (props) => {
  const {sidMenuWidth} = props;
  return (
      <AppBar position="fixed" style={{ backgroundColor: Color.bg_secondary,paddingLeft:"240px"}} elevation={0} >
        <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <MenuItem onClick={""}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="secondary" variant="dot" 
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#ff5858"
              }
            }}
          >
            <NotificationsNoneOutlinedIcon sx={{ color: "#2175ff"}} />
          </Badge>
        </IconButton>
      </MenuItem>

      <MenuItem onClick={""}>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        
          <SettingsIcon sx={{ color: "#000000"}} />
      
      </IconButton>
    </MenuItem>

    <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
    <Box
      style={{
        backgroundColor: "#EEE9DA",
        borderRadius: 10,
      }}
    >
      <Avatar
        alt="profile user"
        sx={{
          width: 36,
          height: 36,
          color: "#000000",
          background: "#EEE9DA",
        }}
      />
    </Box>
    <Box>
  
        <Typography
          style={{ fontSize: "16px",fontWeight:"700" }}
          sx={{ color: "#000000" }}
        >
          Ajith kr
        </Typography>
  
        <Typography
          style={{ fontSize: "10px" }}
          sx={{ color:"#2175ff" }}
        >
          andywarhol@mail.com
        </Typography>
 
    </Box>
  </Stack>
        </Box>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar
