import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import ShowMoreLink from "./common/showMoreLink";

class GaleryView extends Component {
  isMovie() {
    return this.props.category === "Movie" ? "movie" : "tv";
  }

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
        <Typography color="inherit" className="section-title">
          {sectionTitle}
        </Typography>
        <GridList cellHeight={posterHeight} cols={totalMovies} spacing={16}>
          {moviesList.slice(0, totalMovies).map(movie => (
            <GridListTile key={movie.id} cols={movie.cols || 1}>
              <RouterLink to={`/${this.isMovie()}/${movie.id}`}>
                <img
                  height={posterHeight}
                  width="100%"
                  src={`${posters + movie.poster_path}`}
                  alt={movie.title}
                />
                <GridListTileBar title={movie.title} />
              </RouterLink>
            </GridListTile>
          ))}
        </GridList>
        <ShowMoreLink />
      </React.Fragment>
    );
  }
}

export default GaleryView;
