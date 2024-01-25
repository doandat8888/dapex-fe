export type User = {
    _id: string | undefined,
    name: string | undefined,
    avt: string | undefined
}

export interface UserState {
    userProfile: User | null
}

export interface UserAction {
    getCurrentUser: () => void,
    clearUser: () => void
}