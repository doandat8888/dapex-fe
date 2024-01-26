import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import consts from '../consts/index';
import { useLocation } from 'react-router'
import TotalBalance from '../components/balance/TotalBalance';
import Card from '../components/cards/Card';
import SideBar from '../components/sidebar/SideBar';
import { useAuthStore } from '../stores/useUserStore';
import { useUserStore } from '../stores/useUserStore';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { formatVNDCurrency } from '../utils/formatCurrency';
import { calcTotalExpense, calcTotalIncome } from '../utils/calcMoney';

const Home = () => {
    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;
    const token = useAuthStore.getState().token;
    const navigate = useNavigate();
    const [user, getUserProfile] = useUserStore((state) => [state.userProfile, state.getCurrentUser])

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
        getUserProfile();
    }, [token, getUserProfile]);

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage} />
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
                <p className='font-bold text-xl py-4'>Wallet</p>
                <div className="flex space-x-3">
                    <TotalBalance />
                    <div className="overviews flex flex-grow space-x-4">
                        <div className="p-4 rounded-lg bg-white flex text-black shadow-sm space-x-4 items-center">
                            <p className='font-bold text-xl'>Last 30 days</p>
                            <MdOutlineArrowDropDown />
                        </div>
                        <div className="rounded-lg text-black shadow-sm flex items-center space-x-4 flex-grow">
                            <div className='space-y-2 p-4 w-[33.33%] bg-white'>
                                <p className='text-[#c2c2c2] text-sm'>Transactions</p>
                                <p className='text-xl font-bold'>{consts.transactions.length}</p>
                            </div>
                            <div className='space-y-2 p-4 w-[33.33%] bg-white'>
                                <p className='text-[#c2c2c2] text-sm'>Total spend</p>
                                <p className='text-xl font-bold'>{formatVNDCurrency(calcTotalExpense())}</p>
                            </div>
                            <div className='space-y-2 p-4 w-[33.33%] bg-white'>
                                <p className='text-[#c2c2c2] text-sm'>Total income</p>
                                <p className='text-xl font-bold'>{formatVNDCurrency(calcTotalIncome())}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className='rounded-md bg-[#ffffff] p-4 shadow-sm space-y-4 w-[280px]'>
                        <p className='font-bold text-[13px]'>Card Lists</p>
                        <Card
                            owner={user?.name} balance='đ100.000' bgTop='bg-[#424242]' bgBottom='bg-[#f99f01]'
                            expireIn='06/22' img='https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png'
                        />
                        <Card
                            owner={user?.name} balance='đ102.000' bgBottom='bg-[#303778]' bgTop='bg-[#4f78e0]'
                            expireIn='06/22' img='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/350px-Visa_Inc._logo.svg.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home