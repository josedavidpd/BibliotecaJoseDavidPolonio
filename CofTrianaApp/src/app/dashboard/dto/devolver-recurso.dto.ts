export class DevolverRecursoDto {
  id: number;
  title: string;
  autor: string;
  anyo: string;
  url: string;
  content: string;
  free: true;
  user: null

  constructor(id: number, title: string, autor: string, anyo: string, url: string, content: string){

    this.id = id;
    this.title = title;
    this.autor = autor;
    this.anyo = anyo;
    this.url = url;
    this.content = content;
    this.free = true;
    this.user = null;
  }
}