import axios from "axios"
import { authAxios, baseAxios } from "../configs/axios"

const login = (email: string, password: string) => {
    return authAxios.post('/user/login', {
        email,
        password
    })
}

const register = (email: string, password: string, fullName: string) => {
    return axios.post('/user/register', {
        email,
        password,
        name: fullName
    })
}

const getCurrentUser = () => {
    return authAxios.get('/user/current')
}

export default {
    login,
    getCurrentUser,
    register
}