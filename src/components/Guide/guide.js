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

const Guide = props => {
  const { isLoading, data, styles } = props;

  if (isLoading) return <div>loading...</div>;
  if (!R.isNil(data)) {
    const { avatar, name, eventTime, image, title, body } = data;
    return (
      <Card className={styles.card}>
        <CardHeader
          avatar={
            <Avatar
              src="https://material-ui.com/static/images/uxceo-128.jpg"
              aria-label="Recipe"
              className={styles.avatar}
              size={32}
            >
              R
            </Avatar>
          }
          title={name}
          subheader={eventTime}
        />
        <CardMedia className={styles.media} image={image} />
        <CardContent>
          <Typography component="p">{title}</Typography>
        </CardContent>
        <CardContent>
          <Typography paragraph>{body}</Typography>
        </CardContent>
      </Card>
    );
  }
  return <NoResult />;
};

Guide.propTypes = {
  styles: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Guide;
