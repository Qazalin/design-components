import { Image } from "@chakra-ui/react";

import { Container } from "../components/Container";
import { MsgCards } from "../components/MsgCards";
import { OptionsMenu } from "../components/OptionsMenu";

const Index = () => (
  <Container height="100vh" bg="gray.700">
    <MsgCards />
    <OptionsMenu />
  </Container>
);

export default Index;