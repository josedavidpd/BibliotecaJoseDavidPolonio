export class UpdateProfileDto{
    name: string;
    email: string;
    phone: string;
    notes: string;

    constructor(n: string, e: string, p:string, notes:string){
        this.name = n;
        this.email = e;
        this.phone = p;
        this.notes = notes;
    }
}