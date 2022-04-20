export type MsgCardProps = {
    userImage: string
    userId: string
    userName: string
    userTitle: string
    userCompany: string
}
export type OptionsMenuProps = {
    options: string[]
}
export type VideoCardProps = {
    videoUrl: string
    videoTitle: string
    videoSubtitle: string
    viewerList: User[]
}
export type AvatarGroupProps = {
    users: User[]
}

export interface User {
    avatarUrl: string
    userId: string
}
