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

export default function SongCard() {
  const ranColor = Math.floor(Math.random() * 16777215).toString(16);
  const songObj = {
    _id: "63da5f3b850e1e1ff374ba7d",
    id: "IrEzzCfb",
    name: "Maan Meri Jaan",
    type: "",
    album: {
      id: "38893739",
      name: "Champagne Talk",
      url: "https://www.jiosaavn.com/album/champagne-talk/8O,CIqHgSR0_",
    },
    year: "2022",
    releaseDate: "2022-10-12",
    duration: "194",
    label: "Warner Music India",
    primaryArtists: "King",
    primaryArtistsId: "14327531",
    featuredArtists: "",
    featuredArtistsId: "",
    explicitContent: 1,
    playCount: 37965348,
    language: "hindi",
    hasLyrics: "true",
    url: "https://www.jiosaavn.com/song/maan-meri-jaan/ORouSw5zUVE",
    copyright: "2022 Warner Music India, ℗ 2022 Warner Music India",
    image: [
      {
        quality: "50x50",
        link: "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-50x50.jpg",
      },
      {
        quality: "150x150",
        link: "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-150x150.jpg",
      },
      {
        quality: "500x500",
        link: "https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg",
      },
    ],
    downloadUrl: [
      {
        quality: "12kbps",
        link: "https://aac.saavncdn.com/734/31a101fae38e184208e5f95e3e6c756d_12.mp4",
      },
      {
        quality: "48kbps",
        link: "https://aac.saavncdn.com/734/31a101fae38e184208e5f95e3e6c756d_48.mp4",
      },
      {
        quality: "96kbps",
        link: "https://aac.saavncdn.com/734/31a101fae38e184208e5f95e3e6c756d_96.mp4",
      },
      {
        quality: "160kbps",
        link: "https://aac.saavncdn.com/734/31a101fae38e184208e5f95e3e6c756d_160.mp4",
      },
      {
        quality: "320kbps",
        link: "https://aac.saavncdn.com/734/31a101fae38e184208e5f95e3e6c756d_320.mp4",
      },
    ],
  };
  return (
    <Box sx={{ my: 1, mx: 1 }}>
      <Card sx={{ maxWidth: 275 }}>
        <CardHeader
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
          alt={songObj["album"]["name"]}
        />
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {songObj["primaryArtists"]} is the artist of this song.
          </Typography>
          <Typography variant="body2" color="text.secondary">
              It is released on {songObj["releaseDate"]} by {songObj["label"]}
              in {songObj["language"]} language.
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
