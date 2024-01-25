import consts from '../consts'
import { useLocation } from 'react-router'
import SideBar from '../components/sidebar/SideBar'

const Transaction = () => {
    const pathName = useLocation().pathname;
    const activePage = consts.menuList.find(menu => menu.path === pathName)?.id;
    return (
        <div className='flex bg-[#f3f8ff] h-[100vh]'>
            <SideBar activePage={activePage}/>
        </div>
    )
}

export default Transaction