import { ContainerWrapper } from "./container.elements";

interface ContainerWrapperTypes {
  justifyContent: string;
  flexDirection: string;
  content: any;
}

export default function Container({
  justifyContent,
  flexDirection,
  content,
}: ContainerWrapperTypes) {
  return (
    <ContainerWrapper
      $justifyContent={justifyContent}
      $flexDirection={flexDirection}
    >
      {content}
    </ContainerWrapper>
  );
}
