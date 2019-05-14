import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";

const ListView = ({
  sectionTitle,
  type,
  moviesList,
  totalMovies,
  synopsisCharacters,
  posterSize
}) => {
  return (
    <React.Fragment>
      <Typography color="inherit" className="section-title">
        {sectionTitle}
      </Typography>
      {moviesList.slice(0, totalMovies).map(data => (
        <Grid container key={data.id} spacing={16}>
          <Grid item xs={3}>
            <RouterLink to={`/${type}/${data.id}`}>
              <img
                style={{ width: "100%" }}
                src={`${posterSize + data.poster_path}`}
                alt={data.title}
              />
            </RouterLink>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">
              <RouterLink to={`/${type}/${data.id}`} className="title-link">
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
    </React.Fragment>
  );
};

export default ListView;
