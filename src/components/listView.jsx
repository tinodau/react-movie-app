import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import ShowMoreLink from "./common/showMoreLink";

class ListView extends Component {
  isMovie() {
    return this.props.category === "Movie" ? "movie" : "tv";
  }
  render() {
    const {
      sectionTitle,
      moviesList,
      totalMovies,
      synopsisCharacters,
      posterSize
    } = this.props;

    return (
      <React.Fragment>
        <Typography color="inherit" className="section-title">
          {sectionTitle}
        </Typography>
        {moviesList.slice(0, totalMovies).map(data => (
          <Grid container key={data.id} spacing={24}>
            <Grid item xs={3}>
              <RouterLink to={`/${this.isMovie()}/${data.id}`}>
                <img
                  style={{ width: "100%" }}
                  src={`${posterSize + data.poster_path}`}
                  alt={data.title}
                />
              </RouterLink>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">
                <RouterLink
                  to={`/${this.isMovie()}/${data.id}`}
                  className="title-link"
                >
                  {data.name || data.title}
                </RouterLink>
              </Typography>
              <Typography align="justify" variant="body2">
                {data.overview.length > synopsisCharacters
                  ? data.overview.slice(0, synopsisCharacters) + "..."
                  : data.overview}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <ShowMoreLink />
      </React.Fragment>
    );
  }
}

export default ListView;
