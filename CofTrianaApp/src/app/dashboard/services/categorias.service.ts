import { SessionService } from "./../../session/services/session.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../interfaces/category.interface";
import { environment } from "src/environments/environment";
import { AddCategoria } from "../interfaces/add-categoria.interface";
import { AddCategoriaDto } from "../dto/add-categoria.dto";

const categoriaUrl = `${environment.apiUrl}/categoria`;



@Injectable({
  providedIn: "root"
})
export class CategoriasService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  requestOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.sessionService.getToken()}`,
      "Access-Control-Allow-Origin": "*"
    })
  };

  getAllCategorias() {
    return this.http.get<Category[]>(`${categoriaUrl}/all`, this.requestOptions);
  }

  addCategoria(nuevaCategoria: AddCategoriaDto) {
    return this.http.post<AddCategoria>(
      `${categoriaUrl}/create`,
      nuevaCategoria,
      this.requestOptions
    );
  }

  editCategoria(id: number, categoriaEditada: AddCategoria) {
    return this.http.put<AddCategoria>(
      `${categoriaUrl}/edit/${id}`,
      categoriaEditada,
      this.requestOptions
    );
  }

  deleteCategoria(id: number){
    return this.http.delete(`${categoriaUrl}/${id}`,this.requestOptions);
  }
}
