"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { Hidden } from "@mui/material";



 const NavBar =()=> {
  return (
    <Box sx={{ flexGrow: 4}}>
      <AppBar position="static"  sx={{background: "black"}} >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color=""
            aria-label="menu"
            sx={{ mr: 6,mt:4 }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            fontWeight={700}
            color="white"
          >
            OFA
          </Typography>
          <Stack spacing={2} direction="row" mr={6}>
      <Button variant="text" color="white" sx={{fontWeight:700,}} >Register as A Professional</Button>
      <Button variant="text" color="white" sx={{fontWeight:700}}>Help</Button>
      <Button variant="text" color="white"  sx={{fontWeight:700}}>Login/Signup</Button>
    </Stack>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
export default NavBar