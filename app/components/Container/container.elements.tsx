import styled from "styled-components";

interface ContainerWrapperTypes {
  $justifyContent: string;
  $flexDirection: string;
}

export const ContainerWrapper = styled.div<ContainerWrapperTypes>`
  display: flex;
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ?? $justifyContent};
  flex-direction: ${({ $flexDirection }) => $flexDirection ?? $flexDirection};
`;
