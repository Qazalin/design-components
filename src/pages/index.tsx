import { Box, HStack } from "@chakra-ui/react"
import { MsgCards, OptionsMenu, VideoCard, EmojiCard } from "../components"
import fs from "fs"

const Index = ({ emojies }) => {
    console.log(emojies)
    return (
        <HStack>
            {/* <MsgCards />
        <OptionsMenu />
        <VideoCard /> */}
            <EmojiCard emojiArr={emojies} />
        </HStack>
    )
}

export default Index

export function getStaticProps() {
    const Emojies = fs.readdirSync("./public/emoji")
    return {
        props: {
            emojies: Emojies,
        },
    }
}
