import React from "react";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import { FormControl, MenuItem, Select, Box } from "@mui/material";

export default function LangDropdown() {
  const [lang, setlang] = React.useState("en");
  const handleChange = (event) => {
    setlang(event.target.value);
  };

  return (
    <Box sx={{ my: 2, position: "absolute", right: "2%", bottom: "0" }}>
      <FormControl>
        <Select
          labelId="langLabel"
          id="langSelect"
          sx={{width:'auto'}}
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={"en"} ><LanguageTwoToneIcon /> En</MenuItem>
          <MenuItem value={"hi"}>Hindi</MenuItem>
          <MenuItem value={"ur"}>Urdu</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
