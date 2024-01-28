import consts from '../consts'
import { useLocation } from 'react-router'
import SideBar from '../components/sidebar/SideBar'
import TransactionTable from '../components/transactions/TransactionTable';

const Transaction = () => {

    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;

    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage}/>
            <div className='px-8 space-y-4 flex-grow lg:ml-[240px]'>
                <p className='font-bold text-xl py-4'>Transactions</p>
                <TransactionTable />
            </div>
        </div>
    )
}

export default Transaction