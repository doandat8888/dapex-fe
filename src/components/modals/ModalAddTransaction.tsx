import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Select, SelectItem, Input } from "@nextui-org/react";
import consts from "../../consts";

interface Props {
    isOpen: boolean,
    onCloseModal: () => void
}

const ModalAddTransaction = ({ isOpen, onCloseModal }: Props) => {

    return (
        <>
            <Modal
                isOpen={isOpen}
                placement="top-center"
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-2">Add new transaction</ModalHeader>
                        <ModalBody>
                            <Select
                                label="Category"
                                placeholder="Select a category"
                                className="max-w-xs"
                                fullWidth
                            >
                                {consts.transactionCategory.map((category) => (
                                    <SelectItem key={category.id} value={category.name}>
                                        {category.label}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Select
                                label="Type"
                                placeholder="Select type"
                                className="max-w-xs"
                            >
                                {consts.transactionType.map((type) => (
                                    <SelectItem key={type.id} value={type.type}>
                                        {type.label}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Input
                                type="number"
                                label="Amount"
                                placeholder="0.00"
                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">đ</span>
                                    </div>
                                }
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onCloseModal}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onCloseModal}>
                                Save
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalAddTransaction
