import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'

const TotalBalance = () => {
    return (
        <div className='rounded-md bg-[#ffffff] p-4 shadow-sm space-y-2 min-w-[280px]'>
            <p className='text-[12px] text-[#a5a5a5]'>Total balance</p>
            <div className='flex justify-between items-center'>
                <div className="flex items-center space-x-2">
                    <p className='font-bold text-2xl'>đ300.000</p>
                    <div className="py-1 px-1 rounded-md bg-[#049c6b] text-white"><p className='text-[10px] flex items-center'><IoMdArrowDropup />2.3%</p></div>
                </div>
                <IoNotificationsOutline />
            </div>
            <div className='flex text-[12px] font-bold space-x-1'>
                <p>đ70.000 </p>
                <p className='text-red-500'>(Today)</p>
            </div>
        </div>
    )
}

export default TotalBalance