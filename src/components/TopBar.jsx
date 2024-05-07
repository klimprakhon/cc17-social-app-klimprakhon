import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function AppBar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <MuiAppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center" gap="10px">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" marginLeft={2}>
            FakeBuck
          </Typography>
        </Box>
        <Box>
          <Avatar onClick={handleClick} />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
