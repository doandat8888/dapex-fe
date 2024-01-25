import { AuthAction, AuthState } from "../interfaces/Auth";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { UserAction, UserState } from "../interfaces/User";
import userService from "../services/userService";

export const useAuthStore = createWithEqualityFn<AuthState & AuthAction>()(
    immer(
        persist(
            (set) => ({
                token: '',
                setToken: (token: string) => {
                    set((state) => {
                        state.token = token
                    })
                },
                logOut: () => {
                    set((state) => {
                        state.token = ''
                    })
                    window.location.href = '/login'
                },
            }),
            {
                name: 'user-store',
            },
        ),
    ),
    shallow,
)

export const useUserStore = createWithEqualityFn<UserState & UserAction>()(
    immer(
        (set) => ({
            userProfile: null,
            getCurrentUser: async () => {
                try {
                    let response = await userService.getCurrentUser();
                    if (response && response.data) {
                        set((state) => {
                            state.userProfile = response.data.data
                        })
                    }
                } catch (error: any) {
                    console.log(error.response.data.msg)
                }
            },
            clearUser: () => {
                set((state) => {
                    state.userProfile = null
                })
            },
        }),
    ),
    shallow,
)

