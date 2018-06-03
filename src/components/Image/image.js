import React from "react";
import styled, { css } from "styled-components";

const calculateSize = css`
  width: ${props => props.size || props.width};
  height: ${props => props.size || props.height};
`;

export default styled.img`
  ${calculateSize};
  border-radius: ${props => props.radius};
  background-size: contain;
`;
