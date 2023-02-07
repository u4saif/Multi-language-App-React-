import React from "react";
import LangDropdown from "../components/LangDropdown";
import NavBar from "../components/NavBar";
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography';
export default function Home() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <NavBar />
      <Typography variant="h4" align="center" sx={{my:2}}>
          {t("welcomeBack")}
        </Typography>
      <LangDropdown />
    </>
  );
}
