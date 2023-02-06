import * as React from "react";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import CircleNotificationsTwoToneIcon from "@mui/icons-material/CircleNotificationsTwoTone";

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper elevation={2} sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ width: "100%", bgcolor: "#f1f3f4" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteTwoToneIcon />}
        />
        <BottomNavigationAction label="Home" icon={<HomeTwoToneIcon />} />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleTwoToneIcon />}
        />
        <BottomNavigationAction
          label="Notifications"
          icon={<CircleNotificationsTwoToneIcon />}
        />

      </BottomNavigation>
    </Paper>
  );
}
