import { baseAxiosToken } from "../configs/axios"
import { Transaction } from "../interfaces/Transaction"

const getCurrentUserTransaction = () => {
    return baseAxiosToken.get('/user/transactions')
}

const addTransaction = (transaction: Transaction) => {
    return baseAxiosToken.post('/transaction', {
        ...transaction
    })
}

export default {
    getCurrentUserTransaction,
    addTransaction
}