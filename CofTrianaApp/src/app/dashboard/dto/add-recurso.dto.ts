export class AddRecursoDto{
    title: string;
    autor: string;
    anyo: string;
    content: string;
    typeId: number;
    categoryId: number;

    constructor(title: string, autor: string, anyo: string, content: string, typeId: number, categoryId: number){
        this.title = title;
        this.autor = autor;
        this.anyo = anyo;
        this.content = content;
        this.typeId= typeId;
        this.categoryId = categoryId;
    }
}