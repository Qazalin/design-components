import {
  Button,
  Center,
  Box,
  Stack,
  Checkbox,
  IconButton,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
export const OptionsMenu = () => {
  const options = ["spain", "UK", "Japan", "italy", "Brazil"];
  return (
    <Box
      bg="gray.900"
      w="300px"
      h="400px"
      p="10px"
      px="20px"
      borderRadius="15px"
      textTransform="capitalize"
    >
      <Flex w="100%">
        <Tooltip
          textTransform="capitalize"
          hasArrow
          label="select desired contries"
        >
          <Box
            bg="gray.700"
            color="gray.400"
            p="10px"
            mt="10px"
            borderRadius="5px"
            w="100%"
            textAlign="center"
          >
            Select
          </Box>
        </Tooltip>
      </Flex>
      <Stack mt="30px" spacing={5}>
        {options.map((o, i) => (
          <Checkbox fontSize="1rem" key={i}>
            {o}
          </Checkbox>
        ))}
      </Stack>
      <Center w="100%">
        <Button
          as={motion.button}
          whileHover={{ scale: 1.03 }}
          mt="30px"
          w="100%"
          size="lg"
          bg="primary"
        >
          Lets go!
        </Button>
      </Center>
    </Box>
  );
};
