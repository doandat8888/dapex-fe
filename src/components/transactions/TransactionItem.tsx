import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

interface Props {
    logo: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> 
    & { title?: string | undefined; titleId?: string | undefined; } 
    & RefAttributes<SVGSVGElement>>,
    content: string | undefined,
    description: string | undefined
}

const TransactionItem = ({ logo: Icon, content, description}: Props) => {
    return (
        <div className='px-4 rounded-md flex py-4 items-center text-[12px] space-x-4'>
            <div className="rounded-full p-3 bg-[#e3eeff] flex items-center justify-center">
                <Icon className='logo text-sm'/>
            </div>
            <div>
                <p className='font-bold text-[14px]'>{content}</p>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default TransactionItem