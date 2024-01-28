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
        name: 'Transactions',
        logo: AiOutlineTransaction,
        path: '/transaction'
    },
]

const transactionCategory = [
    {
        id: "65b45ca6c06aa8dfa60a5256",
        name: "electricbill",
        label: "Electric bill",
        img: GiElectric
    },
    {
        id: "65b45d1dc06aa8dfa60a5257",
        name: "waterbill",
        label: "Water bill",
        img: IoWaterOutline
    },
    {
        id: "65b45d96c06aa8dfa60a5258",
        name: "internetbill",
        label: "Internet bill",
        img: IoWifi
    },
    {
        id: "65b45e28c06aa8dfa60a5259",
        name: "salary",
        label: "Salary",
        img: FaRegMoneyBillAlt
    },
    {
        id: "65b45e5fc06aa8dfa60a525a",
        name: "phonebill",
        label: "Phone bill",
        img: CiMobile1
    }
]

const transactionType = [
    {
        id: "65b45e8ac06aa8dfa60a525b",
        type: "expense",
        label: "Expense"
    },
    {
        id: "65b45eb1c06aa8dfa60a525c",
        type: "income",
        label: "Income"
    }
]

const transactions = [
    {
        id: 1,
        categoryId: "65b45ca6c06aa8dfa60a5256",
        createdAt: "March 10, 2023",
        amount: 300000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
    {
        id: 2,
        categoryId: "65b45d1dc06aa8dfa60a5257",
        createdAt: "March 12, 2023",
        amount: 120000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
    {
        id: 3,
        categoryId: "65b45d96c06aa8dfa60a5258",
        createdAt: "March 14, 2023",
        amount: 230000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
    {
        id: 4,
        categoryId: "65b45e28c06aa8dfa60a5259",
        createdAt: "March 20, 2023",
        amount: 5750000,
        typeId: "65b45eb1c06aa8dfa60a525c"
    },
    {
        id: 5,
        categoryId: "65b45e5fc06aa8dfa60a525a",
        createdAt: "March 20, 2023",
        amount: 23000,
        typeId: "65b45e8ac06aa8dfa60a525b"
    },
];

const columns = [
    {
        name: "Name",
        uid: "name",
    },
    {
        name: "Created at",
        uid: "createdAt",
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