import React from "react";
import { Box, Link } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "material-ui-core";


const Portfolio = () => {
  const data = [
    { id: 3, img: "/images/backend.png" ,link:"https://coursebackend.dhikrfikr.com/app/courses/"},
    { id: 4, img: "/images/coursefront.png",link:"https://newcourseapp.dhikrfikr.com/" },
    { id: 1, img: "/images/front_video.png",link:"https://frontvideo.dhikrfikr.com/" },
    { id: 2, img: "/images/backvideo.png",link:"https://backvideo.dhikrfikr.com/" },
    { id: 5, img: "/images/ivy.png",link:"https://ivybedsandblinds.com/" },
    { id: 6, img: "/images/crockery.png",link:"https://crockery-app.netlify.app/" },
    { id: 7, img: "/images/res.png",link:"https://resturant12.netlify.app/" },
    // { id: 8, img: "/images/chat.png",link:"https://chat-application092.netlify.app/" },
    { id: 9, img: "/images/galarry.png",link:"https://image-gallery092.netlify.app/" },
    { id: 10, img: "/images/shop.png" ,link:"https://e-commerce-092.netlify.app/"},
    { id: 11, img: "/images/weather.png",link:"https://weather-app092.netlify.app/" },
    // { id: 12, img: "/images/cart.png" ,link:"https://grocerclone1.netlify.app/"},
    { id: 13, img: "/images/quiz.png",link:"https://quiz-app-092.netlify.app/" },
    // { id: 14, img: "/images/rms.png",link:"https://resturant-management-system.netlify.app/" },
  ];
  return (
    <Box className="portfolio section" id="portfolio">
      <Typography variant="h1" className="heading">
        my <span>portfolio</span>{" "}
      </Typography>
      <Grid className="box-container">
      
        {data &&
          data.map((d) => {
            return (
              <Grid className="box" key={d.id}>
                <a href={d.link} target="_blank">
                <img src={d.img} alt="" />
                </a>
              </Grid>
            );
          })}
      </Grid>

    </Box>
  );
};

export default Portfolio;
