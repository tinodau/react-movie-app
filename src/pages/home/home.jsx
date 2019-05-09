import React, { Component } from "react";
import { Menu, MoviesInTeathers, TvsOnAir } from "../../components";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  GridList,
  GridListTile
} from "@material-ui/core";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="body-container">
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Paper className="body-padding">
                <MoviesInTeathers />
                <Typography color="inherit" className="show-more">
                  Show more <i className="fas fa-angle-double-right" />
                </Typography>
                <Divider variant="middle" />

                <GridList cellHeight="auto" cols={2} spacing={40}>
                  {/* <Divider variant="middle" /> */}
                  <GridListTile>
                    <Typography color="inherit" className="tvs-on-air-title">
                      Upcoming Movies
                    </Typography>
                  </GridListTile>

                  <GridListTile>
                    <TvsOnAir />
                  </GridListTile>
                </GridList>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
