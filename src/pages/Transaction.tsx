import consts from '../consts'
import { useLocation } from 'react-router'
import SideBar from '../components/sidebar/SideBar'
import TransactionTable from '../components/transactions/TransactionTable';
import { Button } from '@nextui-org/button';
import { CiCirclePlus } from "react-icons/ci";
import ModalAddTransaction from '../components/modals/ModalAddTransaction';
import { useState } from 'react';

const Transaction = () => {

    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage}/>
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
                <p className='font-bold text-xl py-4'>Transactions</p>
                <div className="flex justify-end">
                    <Button 
                        className='rounded-md bg-[#b2cff9]' endContent={<CiCirclePlus />}
                        onClick={() => setIsOpen(true)}
                    >
                        Add
                    </Button>
                    <ModalAddTransaction onCloseModal={() => setIsOpen(false)} isOpen={isOpen} />
                </div>
                <TransactionTable />
            </div>
        </div>
    )
}

export default Transaction