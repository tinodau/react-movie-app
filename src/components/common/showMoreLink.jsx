import React from "react";
import { Typography } from "@material-ui/core";

const ShowMoreLink = () => {
  return (
    <Typography color="inherit" className="show-more">
      Show more <i className="fas fa-angle-double-right" />
    </Typography>
  );
};

export default ShowMoreLink;
