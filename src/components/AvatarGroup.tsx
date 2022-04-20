/* Overlapping group of multiple avatars */
import React from "react"
import { Box, Avatar } from "@chakra-ui/react"
import { AvatarGroupProps } from "./types"
import { Person1, Person2, Person3 } from "./placeHolders"

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ users }) => {
    return (
        <Box
            display="inline-flex"
            flexDir="row-reverse"
            w="100%"
            h="100%"
            borderRadius="24px"
        >
            {users.map((u, i) => (
                <Box
                    key={`${u.userId}-ag-${i}`}
                    h="50px"
                    w="50px"
                    pos="relative"
                    overflow="hidden"
                    borderRadius="50%"
                    ml="-6px"
                >
                    <Avatar
                        src={u.avatarUrl}
                        h="100%"
                        w="100%"
                        display="block"
                    />
                </Box>
            ))}
        </Box>
    )
}

AvatarGroup.defaultProps = {
    users: [Person1, Person2, Person3],
}
