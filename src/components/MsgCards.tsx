import {
  Box,
  Input,
  Center,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

export const MsgCards = () => {
  return (
    <Center
      flexDir="column"
      bg="bg1"
      w="300px"
      h="400px"
      p="10px"
      px="20px"
      borderRightRadius="24px"
      borderTopLeftRadius="10px"
      borderBottomLeftRadius="5px"
      textTransform="capitalize"
    >
      <Image
        src="people/1.png"
        w={"100%"}
        h={"70%"}
        objectFit="cover"
        borderRadius={"24%"}
      />
      <Text mt="10px">Lida Mira</Text>
      <Flex>
        <Text>prodouct designer</Text>
        <Text textTransform="lowercase" color="blue.200" ml="3px">
          @flooz
        </Text>
      </Flex>
      <Flex w="100%">
        <Input
          bg="bg2"
          color="text3"
          p="10px"
          mt="10px"
          borderRadius="5px"
          w="100%"
          textAlign="center"
          placeholder="message"
        />
        <IconButton
          ml="5px"
          mt="10px"
          aria-label="send"
          color="blue.100"
          bg="blue.400"
          icon={<AiOutlineSend />}
          _hover={{ color: "white" }}
        />
      </Flex>
    </Center>
  );
};
