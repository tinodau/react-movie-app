import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, KEY, POSTER_PORTRAIT_SMALL } from "../../services/api";
import "./tvsOnAir.css";
import { Grid, Typography } from "@material-ui/core";

// https://api.themoviedb.org/3/tv/on_the_air?api_key=<<api_key>>&language=en-US&page=1

class TvsOnAir extends Component {
  state = {
    tvsOnAir: []
  };
  // Get Movies in teathers from API
  componentDidMount() {
    axios
      .get(`${BASE_URL}/tv/on_the_air?${KEY}&language=en-US&page=1`)
      .then(res => {
        console.log(res.data.results);
        const tvsOnAir = res.data.results;
        this.setState({ tvsOnAir });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Typography color="inherit" className="tvs-on-air">
          TVs On Air
        </Typography>
        {this.state.tvsOnAir.slice(0, 2).map(tv => (
          <Grid container key={tv.id} spacing={24}>
            <Grid item xs={3}>
              <img
                style={{ width: "100%" }}
                src={`${POSTER_PORTRAIT_SMALL + tv.poster_path}`}
                alt={tv.title}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{tv.name}</Typography>
              <Typography align="justify" variant="body2">
                {tv.overview.slice(0, 250)}...
              </Typography>
            </Grid>
          </Grid>
        ))}
        {/* <GridList cellHeight={300} cols={5} spacing={16}>
          {this.state.tvsOnAir.slice(0, 5).map(tv => (
            <GridListTile key={tv.id} cols={tv.cols || 1}>
              <img
                src={`${POSTER_PORTRAIT_SMALL + tv.poster_path}`}
                alt={tv.title}
              />
              <GridListTileBar title={tv.title} />
            </GridListTile>
          ))}
        </GridList> */}
      </React.Fragment>
    );
  }
}

export default TvsOnAir;
