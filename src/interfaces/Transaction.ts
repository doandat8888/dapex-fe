import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type Transaction = {
    id: number,
    name: string,
    date: string,
    amount: string,
    type: string,
    img: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> 
    & { title?: string | undefined; titleId?: string | undefined; } 
    & RefAttributes<SVGSVGElement>>,
}