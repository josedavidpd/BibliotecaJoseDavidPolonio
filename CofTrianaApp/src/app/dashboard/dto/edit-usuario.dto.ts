export class EditUsuarioDto{
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    notes: string;
    constructor(id:number,name: string, email: string, password: string, phone: string, notes:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.notes = notes;
    }
}