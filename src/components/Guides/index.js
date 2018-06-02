import React from "react";
import PropTypes from "prop-types";

import * as R from "ramda";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const NoResult = props => <div>No Guides were found...</div>;

const Guides = props => {
  const { isLoading, data, styles } = props;
  if (isLoading) return <div>loading...</div>;
  if (!R.isNil(data)) {
    return data.map(({ avatar, name, eventTime, image, title, body }) => (
      <div>
        <div>{avatar}</div>
        <div>{name}</div>
        <div></div>
        <div></div>
      </div>
    ));
  }
  return <NoResult />;
};

Guides.propTypes = {
  styles: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Guides;
