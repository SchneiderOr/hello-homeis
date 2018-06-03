import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { lighten } from "polished";
const setLinkColor = css`
  transition: color 0.125s ease-out, background 0.125s linear;
  color: ${({ theme }) => theme.colors.blue};
  &:hover {
    background: ${({ theme }) => lighten(0.35, theme.colors.b60)};
    color: ${({ theme }) => lighten(0.125, theme.colors.blue)};
  }
  &:focus {
    color: ${({ theme }) => lighten(0.25, theme.colors.blue)};
  }
`;

export default styled(RouterLink)`
  margin: 0 12px;
  text-decoration: none;
  font-weight: bold;
  ${setLinkColor};
`;
