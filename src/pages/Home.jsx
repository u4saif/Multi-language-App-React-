import React, { useEffect, useRef, useState } from "react";
import LangDropdown from "../components/LangDropdown";
import NavBar from "../components/NavBar";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import SongCard from "../components/Card";
import { Box } from "@mui/material";
import getData from "../services/HomeService";

export default function Home() {
  const { t } = useTranslation(["common"]);
  const [songs, setSongs] = useState([]);
  const dataLoaded = useRef(true);
  useEffect(() => {
    if (dataLoaded.current) {
      getData().then((res) => {
        setSongs(res.data["message"]);
        console.log(songs);
      });
      dataLoaded.current=false;
    }
  }, [songs]);

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
        {songs.map((song, i) => {
          return <SongCard key={i} data={song} />;
        })}
      </Box>
      <LangDropdown />
    </Box>
  );
}
