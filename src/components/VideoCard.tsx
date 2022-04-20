import { AspectRatio, Box, Text } from "@chakra-ui/layout"
export const VideoCard = () => {
    return (
        <Box>
            <AspectRatio>
                <iframe title="video" src="" />
            </AspectRatio>
            <Text>Title</Text>
        </Box>
    )
}

/* <IconButton
          ml="5px"
          mt="12px"
          aria-label="send"
          bg="primary"
          color="blue.200"
          icon={<BiRightArrow />}
          _hover={{ color: "white" }}
        /> */
