import Logo from '../common/Logo'
import MenuItem from '../menu/MenuItem'
import consts from '../../consts'

interface Props {
    activePage: number | undefined
}

const SideBar = ({ activePage }: Props) => {

    return (
        <div className="min-w-[240px] lg:w-[10%] lg:block hidden bg-white">
            <div className="logo p-4 border border-b-gray-300">
                <Logo textSize="text-2xl" />
            </div>
            <div className="menu-list px-4 py-8">
                {consts.menuList.map((item, index) =>
                    <MenuItem path={item.path} isActive={activePage === index + 1} key={index} content={item.name} logo={item.logo} />
                )}
            </div>
        </div>
    )
}

export default SideBar