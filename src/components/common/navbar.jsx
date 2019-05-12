import React from "react";
import { AppBar, Grid, Toolbar, Button } from "@material-ui/core";
import SearchForm from "./searchForm";

function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Grid container>
        <Grid item lg={1} />
        <Grid item lg={10}>
          <Toolbar>
            <Grid container spacing={8}>
              <Grid item lg={9}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Movies</Button>
                <Button color="inherit">TV Shows</Button>
              </Grid>

              <Grid item lg={3}>
                <SearchForm />
              </Grid>
            </Grid>
          </Toolbar>
        </Grid>
        <Grid item lg={1} />
      </Grid>
    </AppBar>
  );
}

export default Navbar;
