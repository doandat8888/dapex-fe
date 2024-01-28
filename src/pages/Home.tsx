import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import consts from '../consts/index';
import { useLocation } from 'react-router'
import TotalBalance from '../components/balance/TotalBalance';
import Card from '../components/cards/Card';
import SideBar from '../components/sidebar/SideBar';
import { useAuthStore } from '../stores/useUserStore';
import { useUserStore } from '../stores/useUserStore';
import UserAvatar from '../components/user/UserAvatar';
import useSWR from 'swr';
import transactionService from '../services/transactionService';
import Dashboard from '../components/balance/Dashboard';

const Home = () => {

    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;
    const token = useAuthStore.getState().token;
    const navigate = useNavigate();

    const [user, getUserProfile] = useUserStore((state) => [state.userProfile, state.getCurrentUser])
    const { data, error, isLoading } = useSWR('/user/transactions', transactionService.getCurrentUserTransaction);

    useEffect(() => {
        getUserProfile();
    }, [token, getUserProfile]);

    if(error) return "Error when fetching data"

    if(isLoading) return <p>Loading...</p>

    const transactions = data?.data;


    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage} />
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
                <div className="flex justify-between">
                    <p className='font-bold text-xl py-4'>Wallet</p>
                    <UserAvatar />
                </div>
                <div className="flex space-x-3">
                    <TotalBalance transactions={transactions}/>
                    <Dashboard transactions={transactions}/>
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