import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, KEY, POSTER_PORTRAIT_SMALL } from "../services/api";
import { Typography, Grid } from "@material-ui/core";

class UpcomingMovies extends Component {
  state = {
    upcomingMovies: []
  };

  componentDidMount() {
    // Get Upcoming Movies from API
    axios
      .get(`${BASE_URL}/movie/upcoming?${KEY}&language=en-US&page=1`)
      .then(res => {
        const upcomingMovies = res.data.results;
        this.setState({ upcomingMovies });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Typography color="inherit" className="upcoming-movies-title">
          Upcoming Movies
        </Typography>
        {this.state.upcomingMovies.slice(0, 3).map(movie => (
          <Grid container key={movie.id} spacing={24}>
            <Grid item xs={3}>
              <img
                style={{ width: "100%" }}
                src={`${POSTER_PORTRAIT_SMALL + movie.poster_path}`}
                alt={movie.title}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography align="justify" variant="body2">
                {movie.overview.length > 150
                  ? movie.overview.slice(0, 150) + "..."
                  : movie.overview}
              </Typography>
            </Grid>
          </Grid>
        ))}

        <Typography color="inherit" className="show-more">
          Show more <i className="fas fa-angle-double-right" />
        </Typography>
      </React.Fragment>
    );
  }
}

export default UpcomingMovies;
