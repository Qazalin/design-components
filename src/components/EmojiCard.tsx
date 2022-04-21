import { Box, Image } from "@chakra-ui/react"
import React from "react"

export const EmojiCard: React.FC<{ emojiArr: string[] }> = ({ emojiArr }) => {
    console.log("EmojiCard: ", emojiArr)
    return (
        <Box w="500px" h="100px" bg="bg1" borderRadius="24px">
            {emojiArr.map((e, i) => {
                console.log(i, ":", e)
                return <Image key={`e-${i}`} src={`public/emoji/${e}`} />
            })}
        </Box>
    )
}
