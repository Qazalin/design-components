import { AspectRatio, Box, Text } from "@chakra-ui/layout"
import { VStack } from "@chakra-ui/react"
import React from "react"
import { Person1, Person2, Person3 } from "./placeHolders"
import { VideoCardProps } from "./types"

export const VideoCard: React.FC<VideoCardProps> = (props) => {
    return (
        <VStack
            spacing={"10px"}
            bg="bg1"
            w="300px"
            h="400px"
            p="10px"
            px="20px"
        >
            <AspectRatio ratio={1} w="100%" borderRadius="24px">
                <iframe
                    title="video"
                    src={props.videoUrl}
                    style={{ borderRadius: "24px" }}
                />
            </AspectRatio>
            <Text variant="h2">{props.videoTitle}</Text>
            <Text>{props.videoSubtitle}</Text>
        </VStack>
    )
}

VideoCard.defaultProps = {
    videoUrl: "placeholders/video.mp4",
    videoTitle: "Beautiful sky",
    videoSubtitle: "by: Mikhail Nilov",
    viewerList: [Person1, Person2, Person3],
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
