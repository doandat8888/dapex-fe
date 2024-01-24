import axios from "axios"
import { authAxios, baseAxios } from "../configs/axios"

const login = (email: string, password: string) => {
    return authAxios.post('/user/login', {
        email,
        password
    })
}

const getCurrentUser = () => {
    return authAxios.get('/user/current')
}

export default {
    login,
    getCurrentUser
}