import React from "react";
import PropTypes from "prop-types";

import * as R from "ramda";
import { Col, Row } from "react-styled-flexboxgrid";

import Seperator from "../Separator/separator";
import Tag from "../Tag/tag";

import { Title, SubjectTitle, Author } from "./style";
const NoResult = props => <div>No Guides were found...</div>;

const Guides = props => {
  const { isLoading, data } = props;
  if (isLoading) return <div>loading...</div>;
  if (!R.isNil(data) && !R.isEmpty(data)) {
    return (
      <div>
        <Col xs={12} md={12}>
          <Title>Popular Guides</Title>
        </Col>
        <Seperator />
        <Col>
          {data.map(({ tags, name, image, title }) => (
            <div style={{ margin: "32px 0" }}>
              <div>
                <SubjectTitle>{title}</SubjectTitle>
              </div>
              <div style={{ display: "flex" }}>
                {tags.map((tag, index) => (
                  <Tag
                    last={R.length(tags) === index + 1}
                    key={index}
                    data={tag}
                  />
                ))}
              </div>
              <Author> By {name}</Author>
              <Seperator />
            </div>
          ))}
        </Col>
      </div>
    );
  }
  return <NoResult />;
};

Guides.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Guides;
