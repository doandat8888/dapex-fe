import { RiHome2Line } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsPersonVcardFill } from "react-icons/bs";

const menuList = [
    {
        id: 1,
        name: 'Home',
        logo: RiHome2Line,
        path: '/'
    },
    {
        id: 2,
        name: 'Transaction',
        logo: AiOutlineTransaction,
        path: '/transaction'
    },
    {
        id: 3,
        name: 'Portfolio',
        logo: BsPersonVcardFill,
        path: '/portfolio'
    }
]

export default {
    menuList
}