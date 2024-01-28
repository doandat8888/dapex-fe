import { MdOutlineArrowDropDown } from "react-icons/md";
import { formatVNDCurrency } from "../../utils/formatCurrency";
import { calcTotalExpense, calcTotalIncome } from "../../utils/calcMoney";

interface Props {
    transactions: any
}

const Dashboard = ({transactions}: Props) => {
    return (
        <div className="overviews flex flex-grow space-x-4">
            <div className="p-4 rounded-lg bg-white flex text-black shadow-sm space-x-4 items-center">
                <p className='font-bold text-xl'>Last 30 days</p>
                <MdOutlineArrowDropDown />
            </div>
            <div className="rounded-lg text-black shadow-sm flex items-center space-x-4 flex-grow">
                <div className='space-y-2 p-4 w-[33.33%] bg-white'>
                    <p className='text-[#c2c2c2] text-sm'>Transactions</p>
                    <p className='text-xl font-bold'>{transactions.length}</p>
                </div>
                <div className='space-y-2 p-4 w-[33.33%] bg-white'>
                    <p className='text-[#c2c2c2] text-sm'>Total spend</p>
                    <p className='text-xl font-bold'>{formatVNDCurrency(calcTotalExpense(transactions))}</p>
                </div>
                <div className='space-y-2 p-4 w-[33.33%] bg-white'>
                    <p className='text-[#c2c2c2] text-sm'>Total income</p>
                    <p className='text-xl font-bold'>{formatVNDCurrency(calcTotalIncome(transactions))}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

