import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Education = () => {
  return (
    <Box className="education section" id="education">
      <Typography variant="h1" className="heading">
        my <Typography variant="span">education</Typography>
      </Typography>

      <Grid className="box-container">
        <Grid className="box">
          <SchoolIcon className="i" />
          <Typography variant="span">2015</Typography>
          <Typography variant="h3">Matric</Typography>
          <Typography>
            i passed the matric exam from govt high school manga mandi with B
            grade from the lahore board. and get the Good marks from the lahor
            board.
          </Typography>
        </Grid>

        <Grid className="box">
          <SchoolIcon className="i" />
          <Typography variant="span">2017</Typography>
          <Typography variant="h3">Intermediate</Typography>
          <Typography>
            i passed the F.Sc exam from mansorah degree college with B+ grade
            from the lahore board. and get the Good marks from the lahor board.
          </Typography>
        </Grid>

        <Grid className="box">
          <SchoolIcon className="i" />
          <Typography variant="span">2021</Typography>
          <Typography variant="h3">
            Bachelor of Science in Computer Science (BSCS)
          </Typography>
          <Typography>
            i passed the bachelor Degree from universty of sargodha with 2.7
            cgpa . and get good evaluation from final year project.
          </Typography>
        </Grid>

        <Grid className="box">
          <SchoolIcon className="i" />
          <Typography variant="span">2021</Typography>
          <Typography variant="h3">front end developer - React JS</Typography>
          <Typography>
            I began my journey as a Front End Developer - React JS at RB SOL, where I gained
            expertise in HTML, CSS, SASS, JavaScript, and Bootstrap. My time
            there taught me the importance of creating user-friendly, scalable
            web applications. I continue to apply these skills in my work as a
            developer today.
          </Typography>
        </Grid>
        {/* <Grid className="box">
          <SchoolIcon className="i" />
          <Typography variant="span">2021</Typography>
          <Typography variant="h3">react js intern</Typography>
          <Typography>
            i learn react react js and some of its pakages like framer motion,
            material ui ,react boot strap and complete some project on . and
            continue my learning.
          </Typography>
        </Grid> */}
        <Grid className="box">
          <SchoolIcon className="i" />
          <Typography variant="span">2022</Typography>
          <Typography variant="h3"> front end developer - React JS</Typography>
          <Typography>
            I'm a Front End Developer - React JS at Arain X Ltd, with expertise in
            HTML, CSS, SASS, Bootstrap, Tailwind CSS, Material-UI, JavaScript,
            TypeScript, React.js, Next.js, and Node.js. I'm passionate about
            creating innovative and customized web applications that exceed
            client expectations.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
