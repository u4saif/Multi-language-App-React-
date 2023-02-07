import React from "react";
import LangDropdown from "../components/LangDropdown";
import NavBar from "../components/NavBar";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import SongCard from "../components/Card";
import { Box } from "@mui/material";

export default function Home() {
  const { t } = useTranslation(["common"]);

  return (
    <Box sx={{ bgcolor: "#E7EBF0" }}>
      <NavBar />
      <Typography variant="h4" align="center" sx={{ my: 2 }}>
        {t("welcomeBack")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </Box>
      <LangDropdown />
    </Box>
  );
}
