import { RiHome2Line } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsPersonVcardFill } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";

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

const transactionCategory = [
    {
        id: 1,
        name: "electricbill",
        label: "Electric bill",
        img: GiElectric
    },
    {
        id: 2,
        name: "waterbill",
        label: "Water bill",
        img: IoWaterOutline
    },
    {
        id: 3,
        name: "internetbill",
        label: "Internet bill",
        img: IoWifi
    },
    {
        id: 4,
        name: "salary",
        label: "Salary",
        img: FaRegMoneyBillAlt
    },
    {
        id: 5,
        name: "phonebill",
        label: "Phone bill",
        img: CiMobile1
    }
]

const transactionType = [
    {
        id: 1,
        type: "expense",
        label: "Expense"
    },
    {
        id: 2,
        type: "income",
        label: "Income"
    }
]

const transactions = [
    {
        id: 1,
        categoryId: 1,
        date: "March 10, 2023",
        amount: 300000,
        typeId: 1
    },
    {
        id: 2,
        categoryId: 2,
        date: "March 12, 2023",
        amount: 120000,
        typeId: 1
    },
    {
        id: 3,
        categoryId: 3,
        date: "March 14, 2023",
        amount: 230000,
        typeId: 1
    },
    {
        id: 4,
        categoryId: 4,
        date: "March 20, 2023",
        amount: 5750000,
        typeId: 2
    },
    {
        id: 5,
        categoryId: 5,
        date: "March 20, 2023",
        amount: 23000,
        typeId: 1
    },
];

const columns = [
    {
        name: "Name",
        uid: "name",
    },
    {
        name: "Date",
        uid: "date",
    },
    {
        name: "Amount",
        uid: "amount",
    },
    {
        name: "Actions",
        uid: "actions",
    },
];


export default {
    menuList,
    transactions,
    columns,
    transactionType,
    transactionCategory
}