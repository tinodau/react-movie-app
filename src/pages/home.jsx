import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, KEY, POSTER_PORTRAIT_BIG } from "../services/api";
import Navbar from "../components/common/navbar";
import GaleryView from "../components/galeryView";
import UpcomingMovies from "../components/upcomingMovies";
import TvsOnAir from "../components/tvsOnAir";
import Footer from "../components/footer";
import {
  Grid,
  Paper,
  Divider,
  GridList,
  GridListTile
} from "@material-ui/core";

export default class Home extends Component {
  state = {
    moviesInTeathers: [],
    popularMovies: []
  };

  getMoviesInTeathers() {
    axios
      .get(`${BASE_URL}/movie/now_playing?${KEY}&language=en-US&page=1`)
      .then(res => {
        const moviesInTeathers = res.data.results;
        this.setState({ moviesInTeathers });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getPopularMovies() {
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

  componentDidMount() {
    this.getMoviesInTeathers();
    this.getPopularMovies();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Grid container spacing={8} className="body-container">
          <Grid item lg={1} />
          <Grid item lg={10}>
            <Paper className="body-padding">
              <GaleryView
                sectionTitle="Movies in Teathers"
                moviesList={this.state.moviesInTeathers}
                totalMovies={5}
                posters={POSTER_PORTRAIT_BIG}
                posterHeight={300}
              />
              <Divider variant="middle" />

              <GridList cellHeight="auto" cols={2} spacing={40}>
                <GridListTile>
                  <UpcomingMovies />
                </GridListTile>

                <GridListTile>
                  <TvsOnAir />
                </GridListTile>
              </GridList>

              <Divider variant="middle" />
              <GaleryView
                sectionTitle="Popular This Week"
                moviesList={this.state.popularMovies}
                totalMovies={7}
                posters={POSTER_PORTRAIT_BIG}
                posterHeight={220}
              />
            </Paper>
          </Grid>
          <Grid item lg={1} />
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}
