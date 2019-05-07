import React, { Component } from "react";
import axios from "axios";
import { Menu } from "../../components";
import { BASE_URL, KEY, POSTER_PORTRAIT_BIG } from "../../services/api";

import { Grid, GridList, GridListTile, Paper } from "@material-ui/core";

import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      moviesInTheathers: []
    };
  }

  componentDidMount() {
    // Get Movies in teathers from API
    axios
      .get(`${BASE_URL}/movie/now_playing?${KEY}&language=en-US&page=1`)
      .then(res => {
        console.log(res.data.results);
        const moviesInTheathers = res.data.results;
        this.setState({ moviesInTheathers });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="body-container">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className="body-padding">
                {/* {this.state.moviesInTheathers.map(movie => (
                  <li key={movie.id}>{movie.original_title}</li>
                ))} */}
                <GridList cellHeight={160} cols={3}>
                  {this.state.moviesInTheathers.map(tile => (
                    <GridListTile key={tile.id} cols={tile.cols || 1}>
                      <img
                        src={`${POSTER_PORTRAIT_BIG + tile.poster_path}`}
                        alt={tile.title}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
