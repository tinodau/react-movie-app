import React, { Component } from "react";
import axios from "axios";
import {
  Typography,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import { BASE_URL, KEY, POSTER_PORTRAIT_BIG } from "../../services/api";
import "./popular-movies.css";

class PopularMovies extends Component {
  state = {
    popularMovies: []
  };

  // Get Movies in teathers from API
  componentDidMount() {
    axios
      .get(`${BASE_URL}/movie/popular?${KEY}&language=en-US&page=1`)
      .then(res => {
        const popularMovies = res.data.results;
        this.setState({ popularMovies });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Typography color="inherit" className="popular-movies">
          Popular Movies
        </Typography>
        <GridList cellHeight={220} cols={7} spacing={8}>
          {this.state.popularMovies.slice(0, 7).map(movie => (
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

export default PopularMovies;
