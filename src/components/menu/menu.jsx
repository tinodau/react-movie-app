import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="fixed" color="primary">
          {/* <Toolbar variant="dense"> */}
          <div className="container">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                MovieApp
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Menu;
