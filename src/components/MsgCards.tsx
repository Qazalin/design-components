import { Box, Center, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

export const MsgCards = () => {
  return (
    <Center
      flexDir="column"
      bg="gray.900"
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
        <Box
          bg="gray.700"
          color="gray.400"
          p="10px"
          mt="10px"
          borderRadius="5px"
          w="100%"
          textAlign="center"
        >
          message
        </Box>
        <IconButton
          ml="5px"
          mt="10px"
          aria-label="send"
          icon={<AiOutlineSend />}
          colorScheme="blue"
        />
      </Flex>
    </Center>
  );
};
