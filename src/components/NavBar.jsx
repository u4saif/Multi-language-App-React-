import * as React from "react";
import { useTranslation } from "react-i18next";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import CircleNotificationsTwoToneIcon from "@mui/icons-material/CircleNotificationsTwoTone";
import LangDropdown from "./LangDropdown";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [value, setValue] = React.useState("/");
  const { t } = useTranslation(["common"]);
  const navigate = useNavigate();
  return (
    <Paper elevation={3} sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ width: "100%", bgcolor: "#f1f3f4" }}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction 
          label={t("home")}
          value="/" 
          icon={<HomeTwoToneIcon />} />
        <BottomNavigationAction
          label={t("favorites")}
          value="/favorites"
          icon={<FavoriteTwoToneIcon />}
        />
        <BottomNavigationAction
          label={t("profile")}
          value="/profile"
          icon={<AccountCircleTwoToneIcon />}
        />
        <BottomNavigationAction
          label={t("notifications")}
          value="/notifications"
          icon={<CircleNotificationsTwoToneIcon />}
        />
        <LangDropdown />
      </BottomNavigation>
    </Paper>
  );
}
