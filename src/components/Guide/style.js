import styled from "styled-components";
import BaseImage from "../Image/image";

export const Title = styled.h1`
  font-size: ${({ theme, size }) => size || "1rem"};
  margin: 1rem 0.25rem;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme, size }) => size || ".75rem"};
`;

export const Author = styled.h2`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
  line-height: 1rem;
  margin-bottom: 0.5rem;
`;

export const Timestemp = styled.h3`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.b60};
  margin-bottom: 0.25rem;
`;

export const Image = styled(BaseImage)`padding: 0.5rem 0;`;

//
export const CreatorBar = styled.div`
  margin-left: 0.75rem;
  display: flex;
  flex-direction: column;
`;
