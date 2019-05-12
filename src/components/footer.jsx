import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const Footer = () => {
  return (
    // <Grid item xs={12} boxShadow={3}>
    <Grid item xs={12}>
      <Paper square={true} className="footer">
        <Typography variant="subtitle2" style={{ color: "#fff" }}>
          Movie React App (2019)
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Footer;
