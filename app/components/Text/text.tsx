import { Content } from "./text.elements";

interface TextTypes {
  content: string;
  color?: string;
  fontSize?: string;
}

export default function Text({ content, color, fontSize }: TextTypes) {
  return (
    <Content $color={color} $fontSize={fontSize}>
      {content}
    </Content>
  );
}
