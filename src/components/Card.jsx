import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import moment from 'moment';
import { useTranslation } from "react-i18next";

export default function SongCard(props) {
  const ranColor = Math.floor(Math.random() * 16777215).toString(16);
  const songObj = {...props.data};
  const { t } = useTranslation(["common"]);
  try {
  return (
    <Box sx={{ my: 1, mx: 1 }}>
      <Card sx={{ width: 375 }}>
        <CardHeader sx={{fontSize:'18px'}}
          avatar={
            <Avatar sx={{ bgcolor: "#" + ranColor }} aria-label="recipe">
              {songObj["name"].split("").shift()}
            </Avatar>
          }
          title={songObj["name"].length > 18 ? songObj["name"].substring(0,18)+'...' : songObj["name"]}
          subheader={moment(songObj["releaseDate"]).format('LL')}
        />
        <CardMedia
          component="img"
          height="204"
          image={''}
          sx={{objectFit:'fill'}}
          alt={songObj["album"]["name"]}
        />
        <CardContent>
          <Typography variant="body1" sx={{fontSize:'14px'}} color="text.secondary">
          {t("From the movie")} {songObj["album"]["name"].length > 32 ? songObj["album"]["name"].substring(0,32)+'...' : songObj["album"]["name"]}.
            <br/>{t("language")}: {songObj["language"]}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
    );
    }
    catch (error){
      //console.log(error);
    }
}
