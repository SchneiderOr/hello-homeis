import styled, { css } from "styled-components";
import { lighten } from "polished";
const calculateSize = css`
  width: ${props => props.size || props.width};
  height: ${props => props.size || props.height};
`;

export default styled.img`
  ${calculateSize};
  ${({ fit }) => fit && "object-fit: cover;"};
  border-radius: ${props => props.radius};
  background: ${({ theme, src }) => {
    if (!src) {
      return lighten(0.35, theme.colors.b60);
    }
  }};
`;
