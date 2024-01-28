import { IoWalletOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

interface Props {
    textSize: string
}

const Logo = ({ textSize }: Props) => {

    const navigate = useNavigate();

    return (
        <div className={`flex items-center select-none  ${textSize} cursor-pointer`} onClick={() => navigate('/')}>
            <IoWalletOutline className="text-[#0068ff]"/>
            <p className={`text-[#0068ff] ml-2 font-bold tracking-widest`}>DAPEX</p>
        </div>
    )
}

export default Logo