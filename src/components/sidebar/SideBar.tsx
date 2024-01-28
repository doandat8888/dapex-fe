import Logo from '../common/Logo'
import MenuItem from '../menu/MenuItem'
import consts from '../../consts'
import { AiOutlineLogout } from "react-icons/ai";
import { useAuthStore, useUserStore } from '../../stores/useUserStore';
import { useNavigate } from 'react-router';

interface Props {
    activePage: number | undefined
}

const SideBar = ({ activePage }: Props) => {

    const navigate = useNavigate();

    const onLogout = () => {
        useAuthStore.getState().logOut();
        useUserStore.getState().clearUser();
        navigate('/login');
    }

    return (
        <div className="min-w-[240px] lg:w-[10%] lg:block hidden bg-white fixed">
            <div className="logo p-4 border border-b-gray-300">
                <Logo textSize="text-2xl" />
            </div>
            <div className="menu-list px-4 py-8">
                {consts.menuList.map((item, index) =>
                    <MenuItem path={item.path} isActive={activePage === index + 1} key={index} content={item.name} logo={item.logo} />
                )}
            </div>
            <div className="px-4 py-8 flex-grow items-end" onClick={onLogout}>
                <MenuItem content={"Log out"} logo={AiOutlineLogout} />
            </div>
        </div>
    )
}

export default SideBar