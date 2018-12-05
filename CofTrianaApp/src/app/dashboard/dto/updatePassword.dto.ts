export class UpdatePasswordDto{
    password: string;
    newpassword: string;

    constructor(password:string, newpassword:string){
        this.password = password;
        this.newpassword = newpassword;
    }
}