import React from "react";
import image3 from "../images/bgremove.png";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Link } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "material-ui-core";
const About = () => {
  return (

    // <!-- about Box starts  -->

    <Box className="about section" id="about">
      <Typography variant="h1" className="heading">
        <Typography variant="span">about</Typography> me
      </Typography>

      <Grid className="row">
        <Grid className="image">
          <img className="tilt" src={image3} alt="" />
        </Grid>

        <Grid className="info">
          <Typography variant="h3">
          Welcome to my portfolio! <br/>
            <Typography variant="span">
              I'm a software developer with expertise in MERN Stack, React JS,
              Next JS, JavaScript, TypeScript, Node JS, Express, MongoDB, HTML,
              CSS, SASS, and Bootstrap. With 2 Year of experience, I've worked
              on a range of projects, from small-scale applications to
              enterprise-level systems. I'm passionate about using my skills to
              solve complex problems and help clients achieve their goals
            </Typography>
          </Typography>
          {/* <Typography variant="h3">
            <Typography variant="span"> age : </Typography> 23
          </Typography>
          <Typography variant="h3">
            <Typography variant="span"> qualification : </Typography> BSCS
          </Typography>
          <Typography variant="h3">
            <Typography variant="span"> post : </Typography> front end developer
          </Typography>
          <Typography variant="h3">
            <Typography variant="span"> language : </Typography> English/Urdu
          </Typography> */}
          <a href="HAIDAR.pdf" color="inherit" download>
            <Button className="btn">
              download CV <DownloadIcon sx={{ fontSize: "3rem " }} />
            </Button>
          </a>
        </Grid>

        <Grid className="counter">
          <Grid className="box">
            <Typography variant="span">2 +</Typography>
            <Typography variant="h3">year of experience</Typography>
          </Grid>

          <Grid className="box">
            <Typography variant="span">15+</Typography>
            <Typography variant="h3">porject completed</Typography>
          </Grid>

          <Grid className="box">
            <Typography variant="span">12+</Typography>
            <Typography variant="h3">happy clients</Typography>
          </Grid>

          <Grid className="box">
            <Typography variant="span">7+</Typography>
            <Typography variant="h3">awards won</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
