import { Box, HStack } from "@chakra-ui/react"
import { MsgCards } from "../components/MsgCards"
import { OptionsMenu } from "../components/OptionsMenu"
import { VideoCard } from "../components/VideoCard"

const Index = () => (
    <HStack>
        <MsgCards />
        <OptionsMenu />
        <VideoCard />
    </HStack>
)

export default Index
