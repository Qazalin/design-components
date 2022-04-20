import {
    Box,
    Input,
    Center,
    Flex,
    IconButton,
    Image,
    Text,
    useToast,
} from "@chakra-ui/react"
import React, {
    EventHandler,
    KeyboardEvent,
    KeyboardEventHandler,
    useRef,
    useState,
} from "react"
import { AiOutlineSend } from "react-icons/ai"
import { MsgCardProps } from "./types"

export const MsgCards: React.FC<MsgCardProps> = (props) => {
    const [messageValue, setMessageValue] = useState("")
    const sendButtonRef = useRef(null)
    const toast = useToast()
    function handleSendClick() {
        toast({
            title: "Message Sent!",
            status: "success",
            duration: 1500,
            isClosable: true,
        })
    }
    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            console.log("pressed enter")
            sendButtonRef.current.click()
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur()
            }
            setMessageValue("")
        }
    }

    function handleMessageValueChange(e: string) {
        setMessageValue(e)
    }
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
                src={props.userImage}
                w={"100%"}
                h={"70%"}
                objectFit="cover"
                borderRadius={"24%"}
            />
            <Text mt="10px">{props.userName}</Text>
            <Flex>
                <Text>{props.userTitle}</Text>
                <Text textTransform="lowercase" color="blue.200" ml="3px">
                    @{props.userCompany}
                </Text>
            </Flex>
            <Flex w="100%">
                <Input
                    value={messageValue}
                    onChange={(e) => handleMessageValueChange(e.target.value)}
                    bg="bg2"
                    color="text3"
                    p="10px"
                    mt="10px"
                    borderRadius="5px"
                    w="100%"
                    textAlign="center"
                    placeholder="message"
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <IconButton
                    ref={sendButtonRef}
                    ml="5px"
                    mt="10px"
                    aria-label="send"
                    color="blue.100"
                    bg="blue.400"
                    icon={<AiOutlineSend />}
                    onClick={() => handleSendClick()}
                    _hover={{ color: "white" }}
                />
            </Flex>
        </Center>
    )
}

MsgCards.defaultProps = {
    userImage: "people/1.png",
    userName: "Lida Mira",
    userCompany: "Flooz",
    userTitle: "Product Manager",
}
