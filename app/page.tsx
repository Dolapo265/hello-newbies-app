import Text from "./components/Text/text";
import Container from "./components/Container/container";
import Article from "./components/Article/article";

export default function Home() {
  return (
    <>
      <Container
        content={<Text content={"Newbies"} color={"green"} fontSize="2rem" />}
        justifyContent="center"
      ></Container>
      <Article title="This is the title" text="Here is some text"></Article>
    </>
  );
}
