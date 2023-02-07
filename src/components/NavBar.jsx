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

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation(["common"]);
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
          label={t("favorites")}
          icon={<FavoriteTwoToneIcon />}
        />
        <BottomNavigationAction label={t("home")} icon={<HomeTwoToneIcon />} />
        <BottomNavigationAction
          label={t("profile")}
          icon={<AccountCircleTwoToneIcon />}
        />
        <BottomNavigationAction
          label={t("notifications")}
          icon={<CircleNotificationsTwoToneIcon />}
        />
        <LangDropdown />
      </BottomNavigation>
    </Paper>
  );
}
