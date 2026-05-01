import styled from "styled-components";

interface ContentTypes {
  $color?: string;
  $fontSize?: string;
}

export const Content = styled.p<ContentTypes>`
  color: ${({ $color }) => $color ?? $color};
  font-size: ${({ $fontSize }) => $fontSize ?? $fontSize};
`;
