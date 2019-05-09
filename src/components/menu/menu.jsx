import React from "react";
import {
  AppBar,
  Divider,
  Toolbar,
  Typography,
  InputBase,
  Button
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import "./menu.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  search: {
    position: "relative",
    float: "right",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing.unit * 1,
      width: "auto"
    }
  },
  divider: {
    width: 1,
    height: 35,
    marginLeft: 20,
    marginRight: 20
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
      // "&:focus": {
      //   width: 220
      // }
    }
  }
});

function Menu(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        {/* <Toolbar variant="dense"> */}
        <div className="container">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              MovieApp
            </Typography>

            <Divider className={classes.divider} />

            <div className={classes.search} style={{ flexGrow: 1 }}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>

            <Divider className={classes.divider} />
            <Button color="inherit">Movies</Button>
            <Divider className={classes.divider} />
            <Button color="inherit">TV Shows</Button>
          </Toolbar>
        </div>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Menu);
