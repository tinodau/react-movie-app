import React, { Component } from "react";
import axios from "axios";
import { Menu } from "../../components";
import { BASE_URL, KEY, POSTER_PORTRAIT_BIG } from "../../services/api";

import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Paper,
  Typography,
  Divider
} from "@material-ui/core";

import "./home.css";
import "./upcoming_movies"

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
                {/* Movies in Teathers */}
                <Typography color="inherit" className="in-teathers-title">
                  In Teathers
                </Typography>
                <GridList cellHeight={300} cols={5}>
                  {this.state.moviesInTheathers.slice(0, 5).map(tile => (
                    <GridListTile key={tile.id} cols={tile.cols || 1}>
                      <img
                        src={`${POSTER_PORTRAIT_BIG + tile.poster_path}`}
                        alt={tile.title}
                      />
                      <GridListTileBar title={tile.title} />
                    </GridListTile>
                  ))}
                </GridList>
                <Typography color="inherit" className="in-teathers-more">
                  More
                </Typography>
                {/* Movies in Teathers */}

                <Divider variant="middle" />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
      
    );
  }
}

export default Home;
