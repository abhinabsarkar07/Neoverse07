import React, { useState } from "react";

//import the mui libraries
import { Button, Card, CardMedia, Grid } from "@mui/material";

//import the components
import TopBar from "../../Components/TopBar/TopBar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

//import the css folder
import "./Photography.css"

// Photo data for the cards
const photoData = [
  
  { category: "Wedding", src: "https://photos.fife.usercontent.google.com/pw/AP1GczOYMQW1QdOXWbP8TxWS2qu4lETLLKVHgaPrbNGW0h1rvXBj6UEOUqToFw=w636-h957-s-no-gm?authuser=0" },
  // Add more photos with different categories and URLs
];

function Photography() {
  const [selectedCategory, setSelectedCategory] = useState("Wedding");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPhotos =
    selectedCategory === "All"
      ? photoData
      : photoData.filter((photo) => photo.category === selectedCategory);

  return (
    <>
      <TopBar />
      <div className="Gallery_Header">
        <h1>Lets Snap Out Your Memories</h1>
      </div>

      <div className="menu-tabs_container">
        <div className="menu-tabs">
          <Button
            className="menu-tabs_button"
            variant="contained"
            onClick={() => handleCategoryChange("Wedding")}
          >
            Wedding
          </Button>
          <Button
            className="menu-tabs_button"
            variant="contained"
            onClick={() => handleCategoryChange("Nature")}
          >
            Nature
          </Button>
          <Button
            className="menu-tabs_button"
            variant="contained"
            onClick={() => handleCategoryChange("Monochrome")}
          >
            Monochrome
          </Button>
          <Button
            className="menu-tabs_button"
            variant="contained"
            onClick={() => handleCategoryChange("Macro")}
          >
            Macro
          </Button>
          <Button
            className="menu-tabs_button"
            variant="contained"
            onClick={() => handleCategoryChange("Story")}
          >
            Story
          </Button>
        </div>
      </div>

      <div className="gallery_view">
        <Grid container spacing={2}>
          {filteredPhotos.map((photo, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="auto"
                  image={photo.src}
                  alt={photo.category}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <Footer />
    </>
  );
}

export default Photography;
