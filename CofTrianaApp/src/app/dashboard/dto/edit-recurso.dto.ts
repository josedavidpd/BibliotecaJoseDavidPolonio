export class EditRecurso{
    id:number
    title: string;
    autor: string;
    anyo: string;
    url: string;
    content: string;
    typeId: number;
    categoryId: number;

    constructor(id:number,title: string, autor: string, anyo: string, url: string,content: string, typeId: number, categoryId: number){
        this.id = id;
        this.title = title;
        this.autor = autor;
        this.anyo = anyo;
        this.url = url;
        this.content = content;
        this.typeId= typeId;
        this.categoryId = categoryId;
    }
}