import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, KEY, POSTER_PORTRAIT_SMALL } from "../../services/api";
import "./tvs-on-air.css";
import { Grid, Typography } from "@material-ui/core";

class TvsOnAir extends Component {
  state = {
    tvsOnAir: []
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}/tv/on_the_air?${KEY}&language=en-US&page=1`)
      .then(res => {
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
        {this.state.tvsOnAir.slice(0, 3).map(tv => (
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
                {tv.overview.length > 150
                  ? tv.overview.slice(0, 150) + "..."
                  : tv.overview}
              </Typography>
            </Grid>
          </Grid>
        ))}

        <Typography color="inherit" className="show-more">
          Show more <i className="fas fa-angle-double-right" />
        </Typography>
      </React.Fragment>
    );
  }
}

export default TvsOnAir;
