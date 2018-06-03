import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import Guide from "../containers/guide";
import PopularGuides from "../containers/guides";

export default props => (
  <Row between={"xs"}>
    <Col xs={12} md={6}>
      <Guide />
    </Col>
    <Col xs={12} md={4}>
      <PopularGuides />
    </Col>
  </Row>
);
