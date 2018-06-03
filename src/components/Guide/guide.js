import React from "react";
import PropTypes from "prop-types";

import * as R from "ramda";

import {
  Author,
  Title,
  Image,
  Paragraph,
  Timestemp,
  CreatorBar
} from "./style";

const NoResult = props => <div>No Guides were found...</div>;

const Guide = props => {
  const { isLoading, data } = props;

  if (isLoading) return <div>loading...</div>;
  if (!R.isNil(data)) {
    const { avatar, name, eventTime, image, title, body } = data;
    return (
      <div style={{ maxWidth: 480 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={avatar} size="40px" radius="33%" />
          <CreatorBar>
            <Author>{name}</Author>
            <Timestemp>{eventTime}</Timestemp>
          </CreatorBar>
        </div>
        <div style={{ display: "flex", height: 200 }}>
          <Image src={image} radius="16px" />
        </div>
        <div style={{ display: "flex" }}>
          <Title>{title}</Title>
        </div>
        <div style={{ display: "flex" }}>
          <Paragraph>{body}</Paragraph>
        </div>
      </div>
    );
    // return (
    //   <Card className={styles.card}>
    //     <CardHeader
    //       avatar={
    //         <Avatar
    //           src="https://material-ui.com/static/images/uxceo-128.jpg"
    //           aria-label="Recipe"
    //           className={styles.avatar}
    //           size={32}
    //         >
    //           R
    //         </Avatar>
    //       }
    //       title={name}
    //       subheader={eventTime}
    //     />
    //     <CardMedia className={styles.media} image={image} />
    //     <CardContent>
    //       <Typography component="p">{title}</Typography>
    //     </CardContent>
    //     <CardContent>
    //       <Typography paragraph>{body}</Typography>
    //     </CardContent>
    //   </Card>
    // );
  }
  return <NoResult />;
};

Guide.propTypes = {
  // styles: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Guide;
