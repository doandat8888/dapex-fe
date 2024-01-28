import { Dispatch, ReactNode } from "react"

export interface AuthContextState {
    token: string | null
}

export interface IAuthContext {
    authContextState: AuthContextState,
    dispatchAuthAction: Dispatch<AuthReducerAction>,
    setToken: (token: string | null) => void
}

export interface AuthReducerAction {
    type: 'SET_TOKEN' | 'REMOVE_TOKEN',
    payload: string | null
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface AuthState {
    token: string | null,
    refreshToken: string | null
}

export interface AuthAction {
    setToken: (token: string) => void,
    logOut: () => void
    setRefreshToken: (refreshToken: string) => void
}