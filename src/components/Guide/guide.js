import React from "react";
import PropTypes from "prop-types";

import * as R from "ramda";

import { Col, Row } from "react-styled-flexboxgrid";

import { Author, Image, Content, SubjectTitle, Timestemp } from "./style";
const NoResult = props => <div>No Guides were found...</div>;

const Guide = props => {
  const { isLoading, data } = props;

  if (isLoading) return <div>loading...</div>;
  if (!R.isNil(data) && !R.isEmpty(data)) {
    const { avatar, name, eventTime, image, title, body } = data;
    return (
      <Col>
        <Row middle="xs">
          <Col>
            <Image src={avatar} size="2.5rem" radius="33%" />
          </Col>
          <Col>
            <Author>{name}</Author>
            <Timestemp>{eventTime}</Timestemp>
          </Col>
        </Row>

        <Row>
          <Image src={image} width="100%" height="200" radius="1rem" fit />
        </Row>

        <Row>
          <SubjectTitle>{title}</SubjectTitle>
        </Row>

        <Row>
          <Content>{body}</Content>
        </Row>
      </Col>
    );
  }
  return <NoResult />;
};

Guide.propTypes = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Guide;
