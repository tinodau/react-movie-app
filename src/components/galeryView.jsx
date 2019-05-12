import React, { Component } from "react";
import {
  Typography,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import ShowMoreLink from "./common/showMoreLink";

class GaleryView extends Component {
  render() {
    const {
      sectionTitle,
      moviesList,
      totalMovies,
      posters,
      posterHeight
    } = this.props;

    return (
      <React.Fragment>
        <Typography color="inherit" className="in-teathers-title">
          {sectionTitle}
        </Typography>
        <GridList cellHeight={posterHeight} cols={totalMovies} spacing={16}>
          {moviesList.slice(0, totalMovies).map(movie => (
            <GridListTile key={movie.id} cols={movie.cols || 1}>
              <img src={`${posters + movie.poster_path}`} alt={movie.title} />
              <GridListTileBar title={movie.title} />
            </GridListTile>
          ))}
        </GridList>
        <ShowMoreLink />
      </React.Fragment>
    );
  }
}

export default GaleryView;
