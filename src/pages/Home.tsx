// import React, { useCallback, useEffect } from 'react'
// import { useAuth } from '../contexts/AuthContext'
// import userService from '../services/userService';
// import { useNavigate } from 'react-router';
import consts from '../consts/index';
//import { useState } from 'react'
import { useLocation } from 'react-router'
import TotalBalance from '../components/balance/TotalBalance';
import Card from '../components/cards/Card';
import SideBar from '../components/sidebar/SideBar';

const Home = () => {
    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;
    // const token = localStorage.getItem('token');
    // const navigate = useNavigate();

    // const getCurrentUser = async() => {
    //     try {
    //         const response = await userService.getCurrentUser();
    //         if(response && response.data && response.data.data) {
    //             console.log('Current user: ', response.data.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

    // useEffect(() => {
    //     if(token) {
    //         getCurrentUser();
    //     }else {
    //         navigate('/login')
    //     }

    // }, [token])

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage}/>
            <div className='px-4 space-y-4'>
                <p className='font-bold text-xl py-4'>Wallet</p>
                <div className="flex space-x-3">
                    <TotalBalance />
                    <div className="overviews flex">
                        <div className="p-4 rounded-lg bg-white flex text-black shadow-sm">
                            <p className='font-bold text-xl'>Last 30 days</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className='rounded-md bg-[#ffffff] p-4 shadow-sm space-y-4 w-[280px]'>
                        <p className='font-bold text-[13px]'>Card Lists</p>
                        <Card 
                            owner='Dat Doan' balance='đ100.000' bgTop='bg-[#424242]' bgBottom='bg-[#f99f01]'
                            expireIn='06/22' img='https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png'
                        />
                        <Card 
                            owner='Dat Doan' balance='đ102.000' bgBottom='bg-[#303778]' bgTop='bg-[#4f78e0]'
                            expireIn='06/22' img='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/350px-Visa_Inc._logo.svg.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home