import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/common/navbar";
import GaleryView from "../components/galeryView";
import ListView from "../components/listView";
import Footer from "../components/footer";
import {
  BASE_URL,
  KEY,
  POSTER_PORTRAIT_BIG,
  POSTER_PORTRAIT_SMALL
} from "../services/api";
import {
  Grid,
  Paper,
  Divider,
  GridList,
  GridListTile
} from "@material-ui/core";
import ShowMoreLink from "../components/common/showMoreLink";

export default class Home extends Component {
  state = {
    moviesInTeathers: [],
    popularMovies: [],
    tvsOnAir: [],
    upcomingMovies: []
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

  getTvsOnAir() {
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

  getUpcomingMovies() {
    axios
      .get(`${BASE_URL}/movie/upcoming?${KEY}&language=en-US&page=1`)
      .then(res => {
        const upcomingMovies = res.data.results;
        this.setState({ upcomingMovies });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getTvsOnAir();
    this.getMoviesInTeathers();
    this.getPopularMovies();
    this.getUpcomingMovies();
  }

  render() {
    const isMobile = window.innerWidth < 480;

    return (
      <React.Fragment>
        <Navbar />
        <Grid container className="body-container">
          <Grid item lg={1} />
          <Grid item lg={10}>
            <Paper className="body-padding">
              <GaleryView
                sectionTitle="Movies in Teathers"
                type="movie"
                moviesList={this.state.moviesInTeathers}
                totalMovies={isMobile ? 2 : 5}
                posters={POSTER_PORTRAIT_BIG}
                posterHeight={300}
              />
              <ShowMoreLink type="movie" category="now-playing" />
              <Divider variant="middle" />

              <GridList cellHeight="auto" cols={2} spacing={40}>
                <GridListTile>
                  <ListView
                    sectionTitle="Upcoming Movies"
                    type="movie"
                    moviesList={this.state.upcomingMovies}
                    totalMovies={3}
                    synopsisCharacters={150}
                    posterSize={POSTER_PORTRAIT_SMALL}
                  />
                  <ShowMoreLink type="movie" category="upcoming" />
                </GridListTile>

                <GridListTile>
                  <ListView
                    sectionTitle="TVs On Air"
                    type="tv"
                    moviesList={this.state.tvsOnAir}
                    totalMovies={3}
                    synopsisCharacters={150}
                    posterSize={POSTER_PORTRAIT_SMALL}
                  />
                  <ShowMoreLink type="tv" category="on-air" />
                </GridListTile>
              </GridList>

              <Divider variant="middle" />
              <GaleryView
                sectionTitle="Popular Movies This Week"
                type="movie"
                moviesList={this.state.popularMovies}
                totalMovies={isMobile ? 6 : 7}
                posters={POSTER_PORTRAIT_BIG}
                posterHeight={220}
              />
              <ShowMoreLink type="movie" category="popular" />
            </Paper>
          </Grid>
          <Grid item lg={1} />
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}
