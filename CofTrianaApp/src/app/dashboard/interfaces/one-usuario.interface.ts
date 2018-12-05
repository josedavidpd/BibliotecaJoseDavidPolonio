import { Recursos } from './recursos.interface';
export interface OneUsuario{
    id:number;
    name: string;
    email: string;
    password: string;
    phone: string;
    notes: string;
    role: string;
    recursos: Recursos[];
}