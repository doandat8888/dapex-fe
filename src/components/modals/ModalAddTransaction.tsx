import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Select, SelectItem, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import categoryService from "../../services/categoryService";
import { Category } from "../../interfaces/Category";
import { Type } from "../../interfaces/Type";
import typeService from "../../services/typeService";
import { useFormik } from 'formik';
import { Transaction } from "../../interfaces/Transaction";
import { useAuthStore, useUserStore } from "../../stores/useUserStore";
import { convertDateToISO } from "../../utils/convertDateTime";
import transactionService from "../../services/transactionService";

interface Props {
    isOpen: boolean,
    onCloseModal: () => void
}

const ModalAddTransaction = ({ isOpen, onCloseModal }: Props) => {

    const [user, getUserProfile] = useUserStore((state) => [state.userProfile, state.getCurrentUser])
    const token = useAuthStore.getState().token;

    useEffect(() => {
        getUserProfile();
    }, [token, getUserProfile]);

    const formik = useFormik({
        initialValues: {
            typeId: '',
            categoryId: '',
            amount: ''
        },
        onSubmit: async (values) => {
            if (user && user._id) {
                const currentTime = new Date();
                const transaction: Transaction = {
                    ...values,
                    amount: parseInt(values.amount),
                    userId: user._id,
                    createdAt: convertDateToISO(currentTime)
                }
                try {
                    const response = await transactionService.addTransaction(transaction);
                    if (response && response.data) {
                        alert('Create transaction successfully!');
                        formik.resetForm();
                        onCloseModal();
                    }
                } catch (error: any) {
                    console.log(error.response.data.msg)
                }
            }
        },
    })

    const [categories, setCategories] = useState<Category[]>([]);
    const [types, setTypes] = useState<Type[]>([]);


    const getAllCategory = async () => {
        const response = await categoryService.getAllCategory();
        if (response && response.status === 200) {
            setCategories(response.data);
        }
    }

    const getAllType = async () => {
        const response = await typeService.getAllType();
        if (response && response.status === 200) {
            setTypes(response.data);
        }
    }

    const handleCloseModal = () => {
        formik.resetForm();
        onCloseModal();
    }


    useEffect(() => {
        getAllCategory();
        getAllType();
    }, [])

    return (
        <>
            <Modal
                isOpen={isOpen}
                placement="top-center"
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-2">Add new transaction</ModalHeader>
                        <form onSubmit={formik.handleSubmit}>
                            <ModalBody>
                                <Select
                                    id="categoryId"
                                    name="categoryId"
                                    label="Category"
                                    placeholder="Select a category"
                                    className="max-w-xs"
                                    fullWidth
                                    onChange={formik.handleChange}
                                    value={formik.values.categoryId}
                                >
                                    {categories.map((category) => (
                                        <SelectItem key={category._id} value={category._id}>
                                            {category.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Select
                                    id="typeId"
                                    name="typeId"
                                    label="Type"
                                    placeholder="Select type"
                                    className="max-w-xs"
                                    value={formik.values.typeId}
                                    onChange={formik.handleChange}
                                >
                                    {types.map((type) => (
                                        <SelectItem key={type._id} value={type._id}>
                                            {type.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    label="Amount"
                                    placeholder="0.00"
                                    value={formik.values.amount}
                                    endContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="text-default-400 text-small">đ</span>
                                        </div>
                                    }
                                    onChange={formik.handleChange}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={handleCloseModal}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit">
                                    Save
                                </Button>
                            </ModalFooter>
                        </form>

                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalAddTransaction
