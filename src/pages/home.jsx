import React, { Component } from "react";
import "../services/api";
import axios from "axios";
import { BASE_URL, KEY } from "../services/api";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      moviesInTheathers: []
    };
  }
  // state = {
  //   moviesNowPlaying: []
  // };

  componentDidMount = () => {
    // Get Movies in teathers from API
    axios
      .get(`${BASE_URL}/movie/now_playing?${KEY}&language=en-US&page=1`)
      .then(res => {
        const moviesInTheathers = res.data.results;
        this.setState({ moviesInTheathers });
      });
  };

  render() {
    return (
      <div>
        {this.state.moviesInTheathers.map(movie => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </div>
    );
  }
}

export default Home;
