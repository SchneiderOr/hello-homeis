import styled from "styled-components";
import { lighten } from "polished";
import BaseImage from "../Image/image";

export const SubjectTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.blue};
  margin: 1rem 0.25rem 0.5rem;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme, size }) => size || ".75rem"};
  color: ${({ theme }) => theme.colors.blue};
`;

export const Author = styled.h2`
  position: relative;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => lighten(0.125, theme.colors.blue)};
    &:before {
      display: flex;
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      background: ${({ theme }) => lighten(0.125, theme.colors.blue)};
      bottom: -2px;
    }
  }
`;

export const Timestemp = styled.h3`
  font-size: 0.75rem;
  color: ${({ theme }) => lighten(0.2, theme.colors.b60)};
  margin-bottom: 0.25rem;
`;

export const Image = styled(BaseImage)`padding: 0.5rem 0;`;
