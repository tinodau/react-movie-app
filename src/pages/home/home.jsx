import React, { Component } from "react";
import {
  Menu,
  MoviesInTeathers,
  TvsOnAir,
  UpcomingMovies,
  PopularMovies,
  Footer
} from "../../components";
import {
  Grid,
  Paper,
  Divider,
  GridList,
  GridListTile
} from "@material-ui/core";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="body-container">
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Paper className="body-padding">
                <MoviesInTeathers />
                <Divider variant="middle" />

                <GridList cellHeight="auto" cols={2} spacing={40}>
                  <GridListTile>
                    <UpcomingMovies />
                  </GridListTile>

                  <GridListTile>
                    <TvsOnAir />
                  </GridListTile>
                </GridList>
                <Divider variant="middle" />
                <PopularMovies />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
