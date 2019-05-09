import React, { Component } from "react";
import axios from "axios";
import {
  Typography,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import { BASE_URL, KEY, POSTER_PORTRAIT_BIG } from "../../services/api";
import "./movies-in-teathers.css";

class MoviesInTeathers extends Component {
  state = {
    moviesInTheathers: []
  };

  // Get Movies in teathers from API
  componentDidMount() {
    axios
      .get(`${BASE_URL}/movie/now_playing?${KEY}&language=en-US&page=1`)
      .then(res => {
        const moviesInTheathers = res.data.results;
        this.setState({ moviesInTheathers });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Typography color="inherit" className="in-teathers-title">
          In Teathers
        </Typography>
        <GridList cellHeight={300} cols={5} spacing={16}>
          {this.state.moviesInTheathers.slice(0, 5).map(movie => (
            <GridListTile key={movie.id} cols={movie.cols || 1}>
              <img
                src={`${POSTER_PORTRAIT_BIG + movie.poster_path}`}
                alt={movie.title}
              />
              <GridListTileBar title={movie.title} />
            </GridListTile>
          ))}
        </GridList>

        <Typography color="inherit" className="show-more">
          Show more <i className="fas fa-angle-double-right" />
        </Typography>
      </React.Fragment>
    );
  }
}

export default MoviesInTeathers;
