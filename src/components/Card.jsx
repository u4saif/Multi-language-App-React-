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

export default function SongCard(props) {
  const ranColor = Math.floor(Math.random() * 16777215).toString(16);
  const songObj = {...props.data};
  try {
  return (
    <Box sx={{ my: 1, mx: 1 ,height:"300"}}>
      <Card sx={{ width: 375 }}>
        <CardHeader sx={{fontSize:'18px',height:'20px',overflow:'hidden'}}
          avatar={
            <Avatar sx={{ bgcolor: "#" + ranColor }} aria-label="recipe">
              {songObj["name"].split("").shift()}
            </Avatar>
          }
          title={songObj["name"]}
          subheader={songObj["releaseDate"]}
        />
        <CardMedia
          component="img"
          height="154"
          image={songObj["image"][2]["link"]}
          sx={{objectFit:'fill'}}
          alt={songObj["album"]["name"]}
        />
        <CardContent>
          <Typography variant="body1" sx={{fontSize:'14px',height:'20px',overflow:'hidden'}} color="text.secondary">
            From the movie {songObj["album"]["name"]}.
            language: {songObj["language"]} .
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
      console.log(error);
    }
}
