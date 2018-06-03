import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  font-weight: bold;
  font-size: .75rem;
  color: ${({ theme }) => theme.colors.pumpkinOrange};
  margin-bottom: 0.5rem;
`;
export default props => (
  <Tag>
    {props.data}{!props.last ? "-" : ""}
  </Tag>
);
