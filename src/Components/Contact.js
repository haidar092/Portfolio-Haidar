import React from "react";
import { Box, Button } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { Card, TextField } from "material-ui-core";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SendIcon from "@mui/icons-material/Send";
const Contact = () => {
  return (
    <Box className="contact section" id="contact">
      <Typography variant="h1" className="heading">
        <span>contact</span> me{" "}
      </Typography>

      <Grid className="row">
        <Grid className="content">
          <Typography variant="h3" className="title">
            contact info
          </Typography>

          <Grid className="info">
            <Typography variant="h3">
              <AttachEmailIcon className="i" /> alihaidar14157@gmail.com{" "}
            </Typography>
            <Typography variant="h3">
              <PhoneInTalkIcon className="i" /> +92345-4465819{" "}
            </Typography>
            <Typography variant="h3">
              <PhoneInTalkIcon className="i" /> +92302-4872539{" "}
            </Typography>
            <Typography variant="h3">
              <ShareLocationIcon className="i" /> Lahore,punjab pakistan{" "}
            </Typography>
          </Grid>
        </Grid>
        <Card variant="outlined" style={{ margin: "16px 30px" }}>
          <form action="">
            <Grid>
              <TextField
                required
                id="outlined-required"
                label="Name"
                className="box"
              />
            </Grid>
            <Grid>
              <TextField
                required
                id="outlined-required"
                type="email"
                label="Email"
                className="box"
              />
            </Grid>

            <Grid>
              <TextField
                required
                id="outlined-required"
                label="Project"
                className="box"
              />
            </Grid>

            <TextareaAutosize
              name=""
              id=""
              cols="30"
              rows="10"
              className="box "
              placeholder="message"
            ></TextareaAutosize>
            <Button className="btn" type="submit">
              send <SendIcon fontSize="lg" />
            </Button>
          </form>
        </Card>
      </Grid>
    </Box>
  );
};

export default Contact;
