import React from "react";
import PropTypes from "prop-types";

import * as R from "ramda";
import { Col, Row } from "react-styled-flexboxgrid";

import Image from "../Image/image";
import Seperator from "../Separator/separator";
import Tag from "../Tag/tag";

import {
  
  GuideContainer,
  Title,
  SubjectTitle,
  Author
} from "./style";

const NoResult = props => <div>No Guides were found...</div>;
const Loading = props => <div>Loading...</div>;

const Guide = ({ avatar, tags, name, image, title }) => (
  <Col>
    <Row>
      <GuideContainer>
        <Col xs={9}>
          <SubjectTitle>{title}</SubjectTitle>
          {tags.map((tag, index) => (
            <Tag last={R.length(tags) === index + 1} key={index} data={tag} />
          ))}
          <Author> By {name}</Author>
        </Col>
        <Col xs={3}>{image && <Image src={image} size={"64px"} />}</Col>
      </GuideContainer>
    </Row>
    <Row>
      <Seperator />
    </Row>
  </Col>
);


const Guides = props => {
  const { isLoading, data } = props;

  if (isLoading) return <Loading />;
  if (!R.isNil(data) && !R.isEmpty(data)) {
    return (
      <Col>
        <Title>Popular Guides</Title>
        <Seperator />
        {data.map(Guide)}
      </Col>
    );
  }
  return <NoResult />;
};

Guides.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Guides;
