import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import ShowMoreLink from "./common/showMoreLink";

class ListView extends Component {
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
              <img
                style={{ width: "100%" }}
                src={`${posterSize + data.poster_path}`}
                alt={data.title}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{data.name || data.title}</Typography>
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
