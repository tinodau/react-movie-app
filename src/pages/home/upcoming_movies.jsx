import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, KEY, POSTER_PORTRAIT_BIG } from "../../services/api";

import {
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    Paper,
    Typography,
    Divider
} from "@material-ui/core";

import "./home.css";

class UpcomingMovies extends Component {
    constructor() {
        super();
        this.state = {
            upcomingMovies: []
        };
    }

    componentDidMount() {
        // Get Upcoming Movies from API
        axios
            .get(`${BASE_URL}/movie/upcoming?${KEY}&language=en-US&page=1`)
            .then(res => {
                const upcomingMovies = res.data.results;
                this.setState({ upcomingMovies });
            });
    }

    render() {
        return (
            <React.Fragment>
                <GridList cellHeight={300} cols={5} spacing={16}>
                    {this.state.upcomingMovies.slice(0, 10).map(movie => (
                        <GridListTile key={movie.id} cols={movie.cols || 1} row={movie.row || 2}>
                            <img
                                src={`${POSTER_PORTRAIT_BIG + movie.poster_path}`}
                                alt={movie.title}
                            />
                            <GridListTileBar title={movie.title} />
                        </GridListTile>

                    ))}


                </GridList>
            </React.Fragment>
        );
    }
}

export default UpcomingMovies;
