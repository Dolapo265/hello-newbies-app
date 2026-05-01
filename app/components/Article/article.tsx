import Container from "../Container/container";
import Text from "../Text/text";

export default function Article({ title, text }) {
  return (
    <Container
      justifyContent={"center"}
      flexDirection={"column"}
      content={
        <>
          <Text content={title} color={"green"} fontSize="2rem" />
          <Text content={text} color={"green"} fontSize="2rem" />
        </>
      }
    ></Container>
  );
}
