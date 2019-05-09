import React, { Component } from "react";
import { Menu, MoviesInTeathers } from "../../components";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import "./home.css";
import "./upcoming_movies"
import UpcomingMovies from "./upcoming_movies";

class Home extends Component {
  state = {
    tvsOnTheAir: []
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="body-container">
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Paper className="body-padding">
                <MoviesInTeathers />
                <Typography color="inherit" className="show-more">
                  Show more <i className="fas fa-angle-double-right" />
                </Typography>
                <Divider variant="middle" />

                {/* Upcoming Movies */}
                <Typography color="inherit" className="upcoming-movies-title">
                  Upcoming Movies
                </Typography>
                <UpcomingMovies />
                {/* Upcoming Movies */}

                <Divider variant="middle" />
                {/* TVs On Air */}

                <Typography color="inherit" className="tvs-on-air-title">
                  TVs On Air
                </Typography>
                {/* TVs On Air */}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>

    );
  }
}

export default Home;
