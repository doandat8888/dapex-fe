import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type Transaction = {
    typeId: string,
    categoryId: string,
    amount: number,
    userId: string,
    createdAt: any
}