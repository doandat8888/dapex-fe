import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContextState, AuthProviderProps, AuthReducerAction, IAuthContext } from "../interfaces/Auth";

const defaultAuthContextState: AuthContextState = {
    token: null
}

const AuthContext = createContext<IAuthContext>({
    authContextState: defaultAuthContextState,
    dispatchAuthAction: () => { },
    setToken: () => { }
});

const authReducer = (state: AuthContextState, action: AuthReducerAction) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authContextState, dispatchAuthAction] = useReducer(authReducer, defaultAuthContextState);

    const setToken = (token: string | null) => {
        dispatchAuthAction({ type: 'SET_TOKEN', payload: token ? token : ''});
    };

    return <AuthContext.Provider value={{ authContextState, dispatchAuthAction, setToken }}>{children}</AuthContext.Provider>;
};

// Custom hook for using AuthContext
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    // Kiểm tra nếu có token trong localStorage
    if (!context.authContextState.token && localStorage.getItem('token')) {
        const token = localStorage.getItem('token')
        context.dispatchAuthAction({
            type: 'SET_TOKEN',
            payload: token
        })
        console.log('New token: ', context.authContextState.token)
    }
    return context;
};

export { AuthProvider, useAuth };

