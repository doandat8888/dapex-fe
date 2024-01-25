interface Props {
    owner: string | undefined,
    expireIn: string,
    img: string, 
    bgTop: string, 
    bgBottom: string, 
    balance: string
}

const Card = ({owner, expireIn, img, bgTop, bgBottom, balance}: Props) => {
    return (
        <div className="rounded-md text-sm">
            <div className={`h-[50%] py-4 px-4 items-center justify-between ${bgTop} rounded-tl-lg rounded-tr-lg text-white flex`}>
                <p className='text-md'>{owner}</p>
                <div className='flex items-center space-x-3'>
                    <div>
                        <p className='text-[10px] text-[#b3b3b3]'>Expire in</p>
                        <p className='font-bold'>{expireIn}</p>
                    </div>
                    <img className='w-[50px] h-[24px] object-contain' src={img} alt="" />
                </div>
            </div>
            <div className={`h-[50%] py-4 px-4 ${bgBottom} rounded-bl-lg rounded-br-lg text-white`}>
                <p className='text-[12px]'>Balance</p>
                <p className='text-xl font-bold'>{balance}</p>
            </div>
        </div>
    )
}

export default Card