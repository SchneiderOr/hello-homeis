import styled from "styled-components";
import { lighten } from "polished";
export default styled.span`
  display: flex;
  background: ${({ background, theme }) =>
    background || lighten(0.3, theme.colors.b60)};
  border: ${({ border }) => border || "none"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1px"};
  margin: 0.5rem 0;
`;
  
