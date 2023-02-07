import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Box, NativeSelect } from "@mui/material";

export default function LangDropdown() {

  const { i18n } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

  return (
    <Box sx={{position:'absolute',top:10,right:10}}>
        <NativeSelect 
          id="langSelect"
          variant="standard"
          value={localStorage.getItem("i18nextLng")}
          onChange={handleLanguageChange}
        >
          <option  value={"en"} >En</option >
          <option  value={"hi"}>हिंदी</option >
          <option  value={"ur"}>اردو</option >
        </NativeSelect >
    </Box>
  );
}
