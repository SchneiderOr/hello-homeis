import styled from "styled-components";
import { lighten, darken } from "polished";

export const GuideContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  transition: background 0.125s linear;
  background: white;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${darken(0.025, "white")};
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: -1px;
  padding: 1rem 0.25rem;
`;

export const SubjectTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Author = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => lighten(0.3, theme.colors.blue)};
  font-style: italic;
  line-height: 1rem;
  margin-bottom: 0.5rem;
`;
