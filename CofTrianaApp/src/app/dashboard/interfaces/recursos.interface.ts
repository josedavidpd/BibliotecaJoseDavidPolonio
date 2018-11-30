import { Type } from "./type.interface";
import { Category } from "./category.interface";


export interface Recursos{
    id: number,
    title: string;
    autor: string;
    anyo: string;
    url: string;
    content: string;
    free: boolean,
    category: Category,
    type: Type,
    

}