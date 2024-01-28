import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Pagination, Button } from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import consts from "../../consts";
import { AiOutlineDelete } from "react-icons/ai";
import TransactionItem from "./TransactionItem";
import { formatVNDCurrency } from "../../utils/formatCurrency";
import transactionService from "../../services/transactionService";
import convertDateTime from "../../utils/convertDateTime";
import useSWR from "swr";
import ModalAddTransaction from "../modals/ModalAddTransaction";
import { CiCirclePlus } from "react-icons/ci";

const TransactionTable = () => {

    const [page, setPage] = useState<number>(1);
    const rowsPerPage = 4;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data, error, isLoading, mutate } = useSWR('/user/transactions', transactionService.getCurrentUserTransaction);

    const transactions = data?.data;

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return transactions && transactions.length > 0 && transactions.slice(start, end);
    }, [transactions]);

    const renderCell = React.useCallback((transaction: any, columnKey: string) => {

        const cellValue = transaction[columnKey];
        switch (columnKey) {
            case "name":
                // eslint-disable-next-line no-case-declarations
                const transactionCategory = consts.transactionCategory.find(category => category.id === transaction.categoryId);
                // eslint-disable-next-line no-case-declarations
                const transactionType = consts.transactionType.find(type => type.id === transaction.typeId);
                return (
                    <TransactionItem
                        content={transactionCategory?.label}
                        description={transactionType?.label}
                        logo={transactionCategory?.img}
                    />
                );
            case "createdAt":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{convertDateTime(cellValue)}</p>
                    </div>
                );
            case "amount":
                return (
                    <div className="flex flex-col">
                        <p className="font-bold text-sm text-[#1f79fe]">{formatVNDCurrency(cellValue)}</p>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details transaction">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <FaRegEye />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit transaction">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <FiEdit2 />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete transaction">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <AiOutlineDelete />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    if (error) return "Error when fetching data"

    if (isLoading) return <p>Loading...</p>

    const pages = Math.ceil(transactions.length / rowsPerPage);

    const handleCloseModal = () => {
        setIsOpen(false);
        mutate();
    }

    const handleChangePage = (page: number) => {
        setPage(page);
        mutate();
    }

    return (
        <>
            <div className="flex justify-end">
                <Button
                    className='rounded-md bg-[#b2cff9]' endContent={<CiCirclePlus />}
                    onClick={() => setIsOpen(true)}
                >
                    Add
                </Button>
                <ModalAddTransaction onCloseModal={handleCloseModal} isOpen={isOpen} />
            </div>
            <Table
                aria-label="Example table with custom cells"
                bottomContent={
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="#1975fe"
                            page={page}
                            total={pages}
                            onChange={handleChangePage}
                        />
                    </div>
                }
                classNames={{
                    wrapper: "min-h-[222px]",
                }}
            >
                <TableHeader columns={consts.columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={items && items.length > 0 ? items : []}>
                    {(item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>

    );
}

export default TransactionTable
