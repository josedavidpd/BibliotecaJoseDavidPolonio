import { Category } from './category.interface';
export interface SuperCategoriaResp{
    id: number,
    name: string;
    categories: Category[];
}