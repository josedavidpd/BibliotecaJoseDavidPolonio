import { SuperCategoriaResp } from './supercategoria.interface';
export interface Category{
    id: number;
    name: string;
    supercategory: SuperCategoriaResp;
}