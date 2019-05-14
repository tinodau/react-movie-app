import React from "react";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const ShowMoreLink = ({ type, category }) => {
  return (
    <Typography color="inherit" className="show-more">
      <RouterLink to={`/${type}/${category}`} className="show-more-link">
        Show more <i className="fas fa-angle-double-right" />
      </RouterLink>
    </Typography>
  );
};

export default ShowMoreLink;
