import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import { FormControl, MenuItem, Select, Box } from "@mui/material";

export default function LangDropdown() {
 // const [lang, setlang] = React.useState("en");

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
    <Box sx={{ my: 2, position: "absolute", right: "2%", bottom: "0" }}>
      <FormControl>
        <Select
          labelId="langLabel"
          id="langSelect"
          sx={{width:'auto'}}
          value={localStorage.getItem("i18nextLng")}
          onChange={handleLanguageChange}
        >
          <MenuItem value={"en"} ><LanguageTwoToneIcon /> En</MenuItem>
          <MenuItem value={"hi"}>Hindi</MenuItem>
          <MenuItem value={"ur"}>Urdu</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
