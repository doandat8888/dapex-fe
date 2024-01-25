import { IoWalletOutline } from "react-icons/io5";

interface Props {
    textSize: string
}

const Logo = ({ textSize }: Props) => {
    return (
        <div className={`flex items-center select-none  ${textSize}`}>
            <IoWalletOutline className="text-[#0068ff]"/>
            <p className={`text-[#0068ff] ml-2 font-bold tracking-widest`}>DAPEX</p>
        </div>
    )
}

export default Logo