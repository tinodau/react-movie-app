import React, { Component } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import SearchForm from "./searchForm";

class Navbar extends Component {
  state = {
    anchorElMovie: null,
    anchorElTv: null
  };

  handleMovieMenuOpen = event => {
    this.setState({ anchorElMovie: event.currentTarget });
  };

  handleTvMenuOpen = event => {
    this.setState({ anchorElTv: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorElMovie: null, anchorElTv: null });
  };

  render() {
    const { anchorElMovie, anchorElTv } = this.state;
    const isMenuTvOpen = Boolean(anchorElTv);
    const isMenuMovieOpen = Boolean(anchorElMovie);

    const renderMovieMenu = (
      <Menu
        anchorEl={anchorElMovie}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isMenuMovieOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Popular Movie</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Top Rated Movie</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Movies On Air</MenuItem>
      </Menu>
    );

    const renderTvMenu = (
      <Menu
        anchorEl={anchorElTv}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isMenuTvOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Popular TV Series</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Top Rated TV Series</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>TVs On Air</MenuItem>
      </Menu>
    );

    return (
      <AppBar position="fixed" color="primary">
        <Grid container>
          <Grid item lg={1} />
          <Grid item lg={10}>
            <Toolbar>
              <Grid container spacing={8}>
                <Grid item lg={9}>
                  <Button color="inherit">Home</Button>
                  <Button
                    color="inherit"
                    aria-owns={isMenuMovieOpen ? "material-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMovieMenuOpen}
                  >
                    Movies
                  </Button>
                  <Button
                    color="inherit"
                    aria-owns={isMenuTvOpen ? "material-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleTvMenuOpen}
                  >
                    TV Shows
                  </Button>
                  <Button color="inherit">Genre</Button>
                </Grid>

                <Grid item lg={3}>
                  <SearchForm />
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
          <Grid item lg={1} />
        </Grid>
        {renderMovieMenu}
        {renderTvMenu}
      </AppBar>
    );
  }
}

export default Navbar;
