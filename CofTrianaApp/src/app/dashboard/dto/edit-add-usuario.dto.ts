export class EditAddUsuarioDto {
    name: string;
    email: string;
    password: string;
    phone: string;
    notes: string;

    constructor(name: string, email: string, password: string, phone: string, notes:string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.notes = notes;
    }
}