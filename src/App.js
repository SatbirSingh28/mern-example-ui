import React from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import memories from "./images/memories.png";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
    </Container>
  );
}

export default App;
