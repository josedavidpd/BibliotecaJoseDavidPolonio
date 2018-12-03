import { OneUsuario } from './one-usuario.interface';
export interface PrestarDevolverRecursoResp{
    id: number,
    title: string;
    autor: string;
    anyo: string;
    url: string;
    content: string;
    free: boolean,
    user: OneUsuario
}